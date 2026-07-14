package com.bezzerwizzer.service;

import com.bezzerwizzer.game.*;
import com.bezzerwizzer.model.Question;
import com.bezzerwizzer.model.enums.GamePhase;
import com.bezzerwizzer.websocket.dto.GameEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import com.bezzerwizzer.websocket.dto.AnswerDTO;
import com.bezzerwizzer.websocket.dto.ZwapAction;

@Slf4j
@Service
@RequiredArgsConstructor
public class GameService {

    private static final int TURN_PREPARATION_SECONDS = 10;
    private static final int ZWAP_SECONDS = 40;
    private static final int ANSWER_SECONDS = 30;
    private static final int REBOUND_SECONDS = 10;

    private final RoomService roomService;
    private final RoundManager roundManager;
    private final TurnManager turnManager;
    private final ScoringService scoringService;
    private final TacticalTileService tacticalTileService;
    private final SimpMessagingTemplate messagingTemplate;
    private final ScheduledExecutorService gameTimerScheduler;

    public synchronized void startGame(String roomCode) {
        GameRoom room = roomService.getRoom(roomCode);
        if (room.getPhase() != GamePhase.LOBBY) {
            throw new IllegalStateException("La partida ya ha comenzado");
        }
        if (!room.isReady()) {
            throw new RuntimeException("No todos los jugadores están listos");
        }

        roundManager.startNewRound(room);
        broadcastGameState(room);
    }

    /** Sends the current snapshot to a reconnected player without allowing a new join mid-game. */
    public synchronized void requestGameState(String roomCode, String playerId) {
        GameRoom room = roomService.getRoom(roomCode);
        if (!room.getPlayers().containsKey(playerId)) {
            throw new com.bezzerwizzer.exception.GameException("No perteneces a esta partida");
        }
        roomService.markPlayerConnected(room, playerId);
        broadcastGameState(room);
    }

    public synchronized void assignCategories(String roomCode, String playerId, List<Integer> points) {
        GameRoom room = roomService.getRoom(roomCode);
        if (room.getPhase() != GamePhase.CATEGORY_ASSIGNMENT) {
            throw new com.bezzerwizzer.exception.GameException("No estamos asignando categorías");
        }
        if (points == null || points.size() != GameRoom.CATEGORIES_PER_ROUND ||
                !new java.util.HashSet<>(points).equals(Set.of(1, 2, 3, 4))) {
            throw new com.bezzerwizzer.exception.GameException("Debes asignar una vez cada valor del 1 al 4");
        }

        PlayerState player = room.getPlayers().get(playerId);
        if (player == null) {
            throw new com.bezzerwizzer.exception.GameException("Jugador no encontrado");
        }
        if (room.getCategoryAssignmentConfirmed().contains(playerId)) {
            throw new com.bezzerwizzer.exception.GameException("Ya has confirmado tus categorías para este ciclo");
        }
        for (int i = 0; i < points.size(); i++) {
            player.getCategorySlots().get(i).setPointValue(points.get(i));
        }
        // All players use the same slot index during a round. Sorting locks the
        // turn order to 1, then 2, 3 and 4 points for every player.
        player.getCategorySlots().sort((first, second) ->
                Integer.compare(first.getPointValue(), second.getPointValue()));
        room.getCategoryAssignmentConfirmed().add(playerId);

        boolean allReady = room.getCategoryAssignmentConfirmed().containsAll(room.getPlayers().keySet());

        if (allReady) {
            room.setPhase(GamePhase.PLAYING);
            broadcastTurnReady(room);
        }

        broadcastGameState(room);
    }

    public synchronized void handleAnswer(String roomCode, String playerId, AnswerDTO answer) {
        GameRoom room = roomService.getRoom(roomCode);
        if (room.getPhase() != GamePhase.ANSWERING) {
            throw new com.bezzerwizzer.exception.GameException("No se puede responder en esta fase");
        }
        if (answer == null || answer.getQuestionId() == null || room.getCurrentQuestion() == null ||
                !room.getCurrentQuestion().getId().toString().equals(answer.getQuestionId())) {
            throw new com.bezzerwizzer.exception.GameException("La pregunta ya no está activa");
        }

        String submitted = answer.getSelectedOption() != null
                ? answer.getSelectedOption() : answer.getFreeTextAnswer();

        log.info("DEBUG handleAnswer - PlayerId: {}, SelectedOption: '{}', FreeText: '{}', Submitted: '{}'",
            playerId,
            answer.getSelectedOption(),
            answer.getFreeTextAnswer(),
            submitted);

        if (!playerId.equals(room.getCurrentAnswerPlayerId())) {
            savePreparedBezzerwizzerAnswer(room, playerId, submitted);
            return;
        }
        completeCurrentTurn(room, playerId, submitted);
    }

    private void savePreparedBezzerwizzerAnswer(GameRoom room, String playerId, String submitted) {
        if (!room.getBezzerwizzerChallenges().containsKey(playerId)) {
            throw new com.bezzerwizzer.exception.GameException("No te toca responder");
        }
        if (playerId.equals(room.getCurrentAnswerPlayerId()) || !room.getBezzerwizzerQueue().contains(playerId)) {
            throw new com.bezzerwizzer.exception.GameException("Tu turno de preparar respuesta ya ha terminado");
        }
        // While the original player is still answering, Bezzerwizzer players may
        // revise their prepared answer as often as they need.
        room.getBezzerwizzerAnswers().put(playerId,
                scoringService.isCorrect(room.getCurrentQuestion(), submitted));
        messagingTemplate.convertAndSend("/topic/room/" + room.getRoomCode() + "/game",
                new GameEvent("BEZZERWIZZER_ANSWERED", Map.of("playerId", playerId)));
        broadcastGameState(room);
    }

    private void completeCurrentTurn(GameRoom room, String playerId, String submitted) {
        completeCurrentTurn(room, playerId, submitted, null);
    }

    private void completeCurrentTurn(GameRoom room, String playerId, String submitted, Boolean preparedCorrect) {
        Question currentQuestion = room.getCurrentQuestion();
        boolean correct = preparedCorrect != null ? preparedCorrect : scoringService.isCorrect(currentQuestion, submitted);

        // Debug logging
        if (currentQuestion != null) {
            log.info("DEBUG Answer Validation - QuestionId: {}, Text: '{}', Submitted: '{}', Type: {}, CorrectOption: '{}', CorrectAnswer: '{}', Result: {}",
                currentQuestion.getId(),
                currentQuestion.getQuestionText(),
                submitted,
                currentQuestion.getQuestionType(),
                currentQuestion.getCorrectOption(),
                currentQuestion.getCorrectAnswer(),
                correct);
        }

        boolean isRebound = !playerId.equals(room.getCurrentTurnPlayerId());
        boolean earlyBezzerwizzer = room.getEarlyBezzerwizzers().contains(playerId);
        int points = correct ? (isRebound ? (earlyBezzerwizzer ? 3 : 1)
                : scoringService.processAnswer(room, playerId, submitted)) : (isRebound && earlyBezzerwizzer ? -1 : 0);
        PlayerState player = room.getPlayers().get(playerId);
        scoringService.movePlayer(player, points);

        Map<String, Object> result = new java.util.LinkedHashMap<>();
        result.put("playerId", playerId);
        result.put("correct", correct);
        result.put("points", points);
        result.put("correctOption", scoringService.correctOptionKey(room.getCurrentQuestion()));
        result.put("correctAnswer", scoringService.correctAnswerText(room.getCurrentQuestion()));
        messagingTemplate.convertAndSend("/topic/room/" + room.getRoomCode() + "/game",
                new GameEvent("ANSWER_RESULT", result));

        if (!correct && (!isRebound || !room.getBezzerwizzerQueue().isEmpty())) {
            startNextRebound(room);
            return;
        }
        finishResolvedTurn(room);
    }

    private void startNextRebound(GameRoom room) {
        if (room.getBezzerwizzerQueue().isEmpty()) {
            finishResolvedTurn(room);
            return;
        }
        String nextPlayerId = room.getBezzerwizzerQueue().remove(0);
        PlayerState challenger = room.getPlayers().get(nextPlayerId);
        if (challenger != null) {
            challenger.setBezzerwizzersRemaining(Math.max(0, challenger.getBezzerwizzersRemaining() - 1));
        }
        room.setCurrentAnswerPlayerId(nextPlayerId);
        Boolean preparedCorrect = room.getBezzerwizzerAnswers().get(nextPlayerId);
        if (preparedCorrect != null) {
            completeCurrentTurn(room, nextPlayerId, null, preparedCorrect);
            return;
        }
        room.setTurnStartTime(System.currentTimeMillis());
        messagingTemplate.convertAndSend("/topic/room/" + room.getRoomCode() + "/game",
                new GameEvent("ANSWERING_STARTED", Map.of("playerId", nextPlayerId, "timeLimit", REBOUND_SECONDS)));
        broadcastGameState(room);
        scheduleAnswerTimeout(room.getRoomCode(), nextPlayerId, room.getCurrentQuestion().getId().toString(), REBOUND_SECONDS);
    }

    private void finishResolvedTurn(GameRoom room) {
        // A completed turn must not leak its challengers into the next turn or
        // into the category-assignment screen at the end of a round.
        room.getBezzerwizzerQueue().clear();
        room.getBezzerwizzerAnswers().clear();
        room.getBezzerwizzerChallenges().clear();
        room.getEarlyBezzerwizzers().clear();
        PlayerState originalPlayer = room.getPlayers().get(room.getCurrentTurnPlayerId());
        originalPlayer.getCategorySlots().get(room.getCurrentCategorySlotIndex()).setAnswered(true);
        originalPlayer.setHasAnswered(true);
        if (scoringService.checkWinCondition(room).isPresent()) {
            room.setPhase(GamePhase.GAME_OVER);
            room.setFinishedAt(System.currentTimeMillis());
        } else if (roundManager.advanceTurn(room)) {
            broadcastTurnReady(room);
        } else {
            roundManager.startNewRound(room);
        }
        broadcastGameState(room);
    }

    public synchronized void handleZwap(String roomCode, String playerId, ZwapAction action) {
        if (action == null) throw new com.bezzerwizzer.exception.GameException("Acción ZWAP inválida");
        GameRoom room = roomService.getRoom(roomCode);
        tacticalTileService.processZwap(room, playerId, action.getTargetPlayerId(),
                action.getMySlotIndex(), action.getTargetSlotIndex());
        PlayerState current = room.getPlayers().get(playerId);
        PlayerState target = room.getPlayers().get(action.getTargetPlayerId());
        resumePreparation(room);
        messagingTemplate.convertAndSend("/topic/room/" + room.getRoomCode() + "/game",
                new GameEvent("ZWAP_APPLIED", Map.of(
                        "playerId", playerId,
                        "playerName", displayName(current),
                        // The post-swap slots contain the other category, so read the
                        // opposite player to report the categories chosen beforehand.
                        "sourceCategory", categoryName(target, action.getTargetSlotIndex()),
                        "targetPlayerId", target.getPlayerId(),
                        "targetPlayerName", displayName(target),
                        "targetCategory", categoryName(current, action.getMySlotIndex()))));
        broadcastGameState(room);
    }

    /** Pauses the normal preparation clock while the player selects a ZWAP. */
    public synchronized void beginZwap(String roomCode, String playerId) {
        GameRoom room = roomService.getRoom(roomCode);
        if (room.getPhase() != GamePhase.PLAYING || !playerId.equals(room.getCurrentTurnPlayerId())) {
            throw new com.bezzerwizzer.exception.GameException("Solo puedes usar ZWAP durante la preparación de tu turno");
        }
        PlayerState player = room.getPlayers().get(playerId);
        if (player == null || player.getZwapsRemaining() <= 0) {
            throw new com.bezzerwizzer.exception.GameException("No te quedan fichas ZWAP");
        }
        room.setPendingZwapPlayerId(playerId);
        room.setPausedPreparationMillis(Math.max(0, room.getPreparationDeadlineAt() - System.currentTimeMillis()));
        room.setPhase(GamePhase.ZWAP);
        room.setZwapDeadlineAt(System.currentTimeMillis() + TimeUnit.SECONDS.toMillis(ZWAP_SECONDS));
        scheduleZwapTimeout(room.getRoomCode(), playerId, room.getZwapDeadlineAt());
        broadcastGameState(room);
    }

    /** Releases the ZWAP lock without spending the tile. */
    public synchronized void cancelZwap(String roomCode, String playerId) {
        GameRoom room = roomService.getRoom(roomCode);
        if (room.getPhase() != GamePhase.ZWAP || !playerId.equals(room.getPendingZwapPlayerId())) {
            throw new com.bezzerwizzer.exception.GameException("No tienes un ZWAP en curso");
        }
        resumePreparation(room);
        broadcastGameState(room);
    }

    public synchronized void handleBezzerwizzer(String roomCode, String playerId, String targetPlayerId) {
        GameRoom room = roomService.getRoom(roomCode);
        tacticalTileService.processBezzerwizzer(room, playerId, targetPlayerId);
        PlayerState challenger = room.getPlayers().get(playerId);
        PlayerState target = room.getPlayers().get(targetPlayerId);
        messagingTemplate.convertAndSend("/topic/room/" + room.getRoomCode() + "/game",
                new GameEvent("BEZZERWIZZER_PLAYED", Map.of(
                        "playerId", playerId,
                        "playerName", displayName(challenger),
                        "targetPlayerId", targetPlayerId,
                        "targetPlayerName", displayName(target))));
        broadcastGameState(room);
    }

    public synchronized void beginTurn(String roomCode, String playerId) {
        // Compatibility endpoint: revealing early is always a unanimous vote,
        // never a unilateral action by the current player.
        skipTurnPreparation(roomCode, playerId);
    }

    /** Records unanimous consent to reveal the question before the preparation timer ends. */
    public synchronized void skipTurnPreparation(String roomCode, String playerId) {
        GameRoom room = roomService.getRoom(roomCode);
        if (room.getPhase() != GamePhase.PLAYING) {
            throw new com.bezzerwizzer.exception.GameException("La ventana de preparación no está activa");
        }
        if (!room.getPlayers().containsKey(playerId)) {
            throw new com.bezzerwizzer.exception.GameException("Jugador no encontrado");
        }

        room.getPreparationSkipVotes().add(playerId);
        if (room.getPreparationSkipVotes().containsAll(room.getPlayers().keySet())) {
            startQuestion(room);
            return;
        }
        broadcastGameState(room);
    }

    private void broadcastTurnReady(GameRoom room) {
        room.getPreparationSkipVotes().clear();
        room.getBezzerwizzerChallenges().clear();
        room.getBezzerwizzerAnswers().clear();
        room.getBezzerwizzerQueue().clear();
        room.getEarlyBezzerwizzers().clear();
        room.setCurrentAnswerPlayerId(null);
        turnManager.prepareTurn(room);
        room.setTurnStartTime(System.currentTimeMillis());
        room.setPreparationDeadlineAt(System.currentTimeMillis() + TimeUnit.SECONDS.toMillis(TURN_PREPARATION_SECONDS));
        messagingTemplate.convertAndSend("/topic/room/" + room.getRoomCode() + "/game",
                new GameEvent("TURN_READY", Map.of(
                        "playerId", room.getCurrentTurnPlayerId(),
                        "timeLimit", TURN_PREPARATION_SECONDS)));
        scheduleQuestionStart(room.getRoomCode(), room.getCurrentTurnPlayerId(), room.getPreparationDeadlineAt());
    }

    private void broadcastTurnStart(GameRoom room) {
        var question = room.getCurrentQuestion();
        var slot = room.getPlayers().get(room.getCurrentTurnPlayerId())
                .getCategorySlots().get(room.getCurrentCategorySlotIndex());
        Map<String, Object> safeQuestion = new java.util.LinkedHashMap<>();
        safeQuestion.put("id", question.getId().toString());
        safeQuestion.put("questionText", question.getQuestionText());
        safeQuestion.put("questionType", question.getQuestionType());
        safeQuestion.put("options", question.getQuestionType() == com.bezzerwizzer.model.enums.QuestionType.MULTIPLE_CHOICE
                ? List.of(question.getOptionA(), question.getOptionB(), question.getOptionC(), question.getOptionD()) : null);
        safeQuestion.put("categoryName", slot.getCategory().getName());
        safeQuestion.put("categoryIcon", slot.getCategory().getIcon());
        safeQuestion.put("categoryColor", slot.getCategory().getColor());
        safeQuestion.put("pointValue", slot.getPointValue());
        messagingTemplate.convertAndSend("/topic/room/" + room.getRoomCode() + "/game",
                new GameEvent("TURN_START", Map.of(
                        "playerId", room.getCurrentTurnPlayerId(),
                        "question", safeQuestion,
                        "timeLimit", ANSWER_SECONDS)));
    }

    private void startQuestion(GameRoom room) {
        room.getPreparationSkipVotes().clear();
        turnManager.startTurn(room);
        broadcastTurnStart(room);
        broadcastGameState(room);
        scheduleAnswerTimeout(room.getRoomCode(), room.getCurrentAnswerPlayerId(),
                room.getCurrentQuestion().getId().toString(), ANSWER_SECONDS);
    }

    /** Keeps the game moving even if the active player's browser misses the timer event. */
    private void scheduleQuestionStart(String roomCode, String expectedPlayerId, long expectedDeadlineAt) {
        long delay = Math.max(0, expectedDeadlineAt - System.currentTimeMillis());
        gameTimerScheduler.schedule(
                () -> startQuestionIfStillPreparing(roomCode, expectedPlayerId, expectedDeadlineAt),
                delay, TimeUnit.MILLISECONDS);
    }

    private synchronized void startQuestionIfStillPreparing(String roomCode, String expectedPlayerId, long expectedDeadlineAt) {
        try {
            GameRoom room = roomService.getRoom(roomCode);
            if (room.getPhase() == GamePhase.PLAYING && expectedPlayerId.equals(room.getCurrentTurnPlayerId())
                    && expectedDeadlineAt == room.getPreparationDeadlineAt()) {
                startQuestion(room);
            }
        } catch (RuntimeException ignored) {
            // The room may have closed while the delayed task was waiting.
        }
    }

    private void scheduleZwapTimeout(String roomCode, String expectedPlayerId, long expectedDeadlineAt) {
        long delay = Math.max(0, expectedDeadlineAt - System.currentTimeMillis());
        gameTimerScheduler.schedule(
                () -> cancelZwapIfStillActive(roomCode, expectedPlayerId, expectedDeadlineAt),
                delay, TimeUnit.MILLISECONDS);
    }

    private synchronized void cancelZwapIfStillActive(String roomCode, String expectedPlayerId, long expectedDeadlineAt) {
        try {
            GameRoom room = roomService.getRoom(roomCode);
            if (room.getPhase() == GamePhase.ZWAP && expectedPlayerId.equals(room.getPendingZwapPlayerId())
                    && expectedDeadlineAt == room.getZwapDeadlineAt()) {
                resumePreparation(room);
                broadcastGameState(room);
            }
        } catch (RuntimeException ignored) {
            // The room may have closed while the delayed task was waiting.
        }
    }

    private void scheduleAnswerTimeout(String roomCode, String expectedPlayerId, String expectedQuestionId, int seconds) {
        gameTimerScheduler.schedule(
                () -> resolveTimedOutAnswer(roomCode, expectedPlayerId, expectedQuestionId),
                seconds,
                TimeUnit.SECONDS);
    }

    private synchronized void resolveTimedOutAnswer(String roomCode, String expectedPlayerId, String expectedQuestionId) {
        try {
            GameRoom room = roomService.getRoom(roomCode);
            if (room.getPhase() == GamePhase.ANSWERING
                    && expectedPlayerId.equals(room.getCurrentAnswerPlayerId())
                    && room.getCurrentQuestion() != null
                    && expectedQuestionId.equals(room.getCurrentQuestion().getId().toString())) {
                completeCurrentTurn(room, expectedPlayerId, null);
            }
        } catch (RuntimeException ignored) {
            // A valid answer or a later game transition superseded this timeout.
        }
    }

    public void broadcastGameState(GameRoom room) {
        GameState.CategoryInfo catInfo = null;
        if (room.getCurrentQuestion() != null) {
            PlayerState currentTurnPlayer = room.getPlayers().get(room.getCurrentTurnPlayerId());
            CategorySlot currentSlot = currentTurnPlayer.getCategorySlots().get(room.getCurrentCategorySlotIndex());
            catInfo = GameState.CategoryInfo.builder()
                .name(currentSlot.getCategory().getName())
                .icon(currentSlot.getCategory().getIcon())
                .color(currentSlot.getCategory().getColor())
                .pointValue(currentSlot.getPointValue())
                .build();
        }

        GameState state = GameState.builder()
            .roomCode(room.getRoomCode())
            .phase(room.getPhase())
            .players(room.getPlayers().values().stream().collect(Collectors.toList()))
            .currentTurnPlayerId(room.getCurrentTurnPlayerId())
            .currentAnswerPlayerId(room.getCurrentAnswerPlayerId())
            .pendingZwapPlayerId(room.getPendingZwapPlayerId())
            .reboundQueue(List.copyOf(room.getBezzerwizzerQueue()))
            .bezzerwizzerPlayers(Set.copyOf(room.getBezzerwizzerChallenges().keySet()))
            .bezzerwizzerAnswered(Set.copyOf(room.getBezzerwizzerAnswers().keySet()))
            .currentCategory(catInfo)
            .round(room.getCurrentRound())
            .timer(remainingPreparationSeconds(room))
            .preparationSkipVotes(Set.copyOf(room.getPreparationSkipVotes()))
            .build();

        messagingTemplate.convertAndSend("/topic/room/" + room.getRoomCode() + "/game", new GameEvent("GAME_STATE", state));
    }

    private int remainingPreparationSeconds(GameRoom room) {
        long deadline = room.getPhase() == GamePhase.ZWAP ? room.getZwapDeadlineAt() : room.getPreparationDeadlineAt();
        if (room.getPhase() != GamePhase.PLAYING && room.getPhase() != GamePhase.ZWAP) return 0;
        return Math.max(0, (int) Math.ceil((deadline - System.currentTimeMillis()) / 1000.0));
    }

    private void resumePreparation(GameRoom room) {
        room.setPendingZwapPlayerId(null);
        room.setZwapDeadlineAt(0);
        room.setPreparationDeadlineAt(System.currentTimeMillis() + room.getPausedPreparationMillis());
        room.setPausedPreparationMillis(0);
        room.setPhase(GamePhase.PLAYING);
        scheduleQuestionStart(room.getRoomCode(), room.getCurrentTurnPlayerId(), room.getPreparationDeadlineAt());
    }

    private String categoryName(PlayerState player, int slotIndex) {
        if (player == null || slotIndex < 0 || slotIndex >= player.getCategorySlots().size()) return "categoría";
        return player.getCategorySlots().get(slotIndex).getCategory().getName();
    }

    private String displayName(PlayerState player) {
        return player.getUsername() == null || player.getUsername().isBlank()
                ? player.getPlayerId() : player.getUsername();
    }
}
