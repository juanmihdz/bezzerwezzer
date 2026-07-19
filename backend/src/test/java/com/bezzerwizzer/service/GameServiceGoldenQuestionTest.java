package com.bezzerwizzer.service;

import com.bezzerwizzer.game.AnswerValidator;
import com.bezzerwizzer.game.GameRoom;
import com.bezzerwizzer.game.PlayerState;
import com.bezzerwizzer.game.RoundManager;
import com.bezzerwizzer.game.ScoringService;
import com.bezzerwizzer.game.TacticalTileService;
import com.bezzerwizzer.game.TurnManager;
import com.bezzerwizzer.exception.GameException;
import com.bezzerwizzer.model.Question;
import com.bezzerwizzer.model.enums.GamePhase;
import com.bezzerwizzer.model.enums.QuestionType;
import com.bezzerwizzer.websocket.dto.AnswerDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.UUID;
import java.util.concurrent.ScheduledExecutorService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.anySet;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class GameServiceGoldenQuestionTest {

    private RoomService roomService;
    private QuestionService questionService;
    private RoundManager roundManager;
    private GameService gameService;
    private GameRoom room;

    @BeforeEach
    void setUp() {
        roomService = mock(RoomService.class);
        questionService = mock(QuestionService.class);
        roundManager = mock(RoundManager.class);
        gameService = new GameService(
                roomService,
                questionService,
                roundManager,
                mock(TurnManager.class),
                new ScoringService(new AnswerValidator()),
                mock(TacticalTileService.class),
                mock(SimpMessagingTemplate.class),
                mock(ScheduledExecutorService.class));

        room = new GameRoom();
        room.setRoomCode("ORO1");
        room.setPhase(GamePhase.GOLDEN_QUESTION);
        room.setCurrentQuestion(goldenQuestion());
        room.addPlayer(player("p1"));
        room.addPlayer(player("p2"));
        when(roomService.getRoom("ORO1")).thenReturn(room);
    }

    @Test
    void firstCorrectAnswerWinsExactlyTwoPointsAndClosesBonus() {
        gameService.handleAnswer("ORO1", "p1", answer("Madrid"));

        assertEquals(2, room.getPlayers().get("p1").getBoardPosition());
        assertEquals(0, room.getPlayers().get("p2").getBoardPosition());
        assertEquals(GamePhase.GOLDEN_RESULT, room.getPhase());
        assertThrows(RuntimeException.class,
                () -> gameService.handleAnswer("ORO1", "p2", answer("Madrid")));
    }

    @Test
    void bonusEndsWithoutWinnerWhenEveryoneMisses() {
        gameService.handleAnswer("ORO1", "p1", answer("Barcelona"));
        assertEquals(GamePhase.GOLDEN_QUESTION, room.getPhase());

        gameService.handleAnswer("ORO1", "p2", answer("Sevilla"));

        assertEquals(GamePhase.GOLDEN_RESULT, room.getPhase());
        assertEquals(0, room.getPlayers().get("p1").getBoardPosition());
        assertEquals(0, room.getPlayers().get("p2").getBoardPosition());
    }

    @Test
    void multipleChoiceGoldenQuestionAcceptsSelectedOption() {
        room.setCurrentQuestion(multipleChoiceGoldenQuestion());

        gameService.handleAnswer("ORO1", "p1", selectedOptionAnswer("B"));

        assertEquals(2, room.getPlayers().get("p1").getBoardPosition());
        assertEquals(GamePhase.GOLDEN_RESULT, room.getPhase());
    }

    @Test
    void missingWritingQuestionsCannotLeaveRoomFrozenAtRoundEnd() {
        room.setPhase(GamePhase.ROUND_END);
        room.setCurrentRound(4);
        when(questionService.getRandomGoldenQuestion(anySet(), eq("es")))
                .thenThrow(new GameException("No hay preguntas"));

        gameService.startGoldenQuestionIfStillComplete("ORO1", 4);

        verify(roundManager).startNewRound(room);
    }

    @Test
    void completedCycleStartsGoldenQuestionWhenWritingBankIsAvailable() {
        room.setPhase(GamePhase.ROUND_END);
        room.setCurrentRound(4);
        when(questionService.getRandomGoldenQuestion(anySet(), eq("es")))
                .thenReturn(goldenQuestion());

        gameService.startGoldenQuestionIfStillComplete("ORO1", 4);

        assertEquals(GamePhase.GOLDEN_QUESTION, room.getPhase());
    }

    private Question goldenQuestion() {
        Question question = new Question();
        question.setId(UUID.randomUUID());
        question.setQuestionText("¿Cuál es la capital de España?");
        question.setQuestionType(QuestionType.FREE_TEXT);
        question.setCorrectAnswer("Madrid");
        return question;
    }

    private Question multipleChoiceGoldenQuestion() {
        Question question = new Question();
        question.setId(UUID.randomUUID());
        question.setQuestionText("¿Cuál es la capital de España?");
        question.setQuestionType(QuestionType.MULTIPLE_CHOICE);
        question.setOptionA("Barcelona");
        question.setOptionB("Madrid");
        question.setOptionC("Sevilla");
        question.setOptionD("Valencia");
        question.setCorrectOption("B");
        return question;
    }

    private PlayerState player(String id) {
        PlayerState player = new PlayerState();
        player.setPlayerId(id);
        player.setUsername(id);
        return player;
    }

    private AnswerDTO answer(String value) {
        AnswerDTO answer = new AnswerDTO();
        answer.setQuestionId(room.getCurrentQuestion().getId().toString());
        answer.setFreeTextAnswer(value);
        return answer;
    }

    private AnswerDTO selectedOptionAnswer(String value) {
        AnswerDTO answer = new AnswerDTO();
        answer.setQuestionId(room.getCurrentQuestion().getId().toString());
        answer.setSelectedOption(value);
        return answer;
    }
}
