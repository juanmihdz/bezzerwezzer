package com.bezzerwizzer.game;

import com.bezzerwizzer.model.Question;
import com.bezzerwizzer.model.enums.GamePhase;
import lombok.Data;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Data
public class GameRoom {
    public static final int BOARD_SIZE = 30;
    public static final int MAX_PLAYERS = 4;
    public static final int MIN_PLAYERS = 2;
    public static final int CATEGORIES_PER_ROUND = 4;

    private String roomId;
    private String roomCode;
    private Map<String, PlayerState> players = new ConcurrentHashMap<>();
    private String hostPlayerId;
    private GamePhase phase = GamePhase.LOBBY;
    
    private int currentRound = 0;
    private int currentTurnPlayerIndex = 0;
    private int currentCategorySlotIndex = 0;
    
    private List<String> turnOrder = new ArrayList<>();
    private Set<UUID> usedQuestionIds = ConcurrentHashMap.newKeySet();
    private Question currentQuestion;
    // Loaded during the tactical window, ready to reveal instantly.
    private Question preparedQuestion;
    private Integer preparedQuestionCategoryId;
    // The player currently answering. It may differ from the owner of the turn during a rebound.
    private String currentAnswerPlayerId;
    
    // challengerPlayerId -> targetPlayerId
    private Map<String, String> bezzerwizzerChallenges = new ConcurrentHashMap<>();
    private Map<String, Boolean> bezzerwizzerAnswers = new ConcurrentHashMap<>();
    private List<String> bezzerwizzerQueue = new ArrayList<>();
    private Set<String> earlyBezzerwizzers = ConcurrentHashMap.newKeySet();
    // Players who agree to skip the short ZWAP preparation window for this turn.
    private Set<String> preparationSkipVotes = ConcurrentHashMap.newKeySet();
    // Players who have explicitly confirmed their category order this round.
    private Set<String> categoryAssignmentConfirmed = ConcurrentHashMap.newKeySet();
    private String pendingZwapPlayerId;
    // Absolute deadline lets the preparation clock be paused safely for a ZWAP.
    private long preparationDeadlineAt;
    private long pausedPreparationMillis;
    private long zwapDeadlineAt;
    private long turnStartTime;
    private long lastActivityAt = System.currentTimeMillis();
    private long finishedAt;
    private Set<String> connectedPlayerIds = ConcurrentHashMap.newKeySet();

    public void addPlayer(PlayerState player) {
        if (players.size() < MAX_PLAYERS) {
            players.put(player.getPlayerId(), player);
            if (hostPlayerId == null) {
                hostPlayerId = player.getPlayerId();
            }
        }
    }

    public void removePlayer(String playerId) {
        players.remove(playerId);
        connectedPlayerIds.remove(playerId);
        if (playerId.equals(hostPlayerId) && !players.isEmpty()) {
            hostPlayerId = players.keySet().iterator().next();
        }
        turnOrder.remove(playerId);
    }

    public boolean isReady() {
        return players.size() >= MIN_PLAYERS && players.values().stream().allMatch(PlayerState::isReady);
    }

    public String getCurrentTurnPlayerId() {
        if (turnOrder.isEmpty() || currentTurnPlayerIndex >= turnOrder.size()) {
            return null;
        }
        return turnOrder.get(currentTurnPlayerIndex);
    }
}
