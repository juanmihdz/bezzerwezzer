package com.bezzerwizzer.game;

import com.bezzerwizzer.model.enums.GamePhase;
import lombok.Builder;
import lombok.Data;
import java.util.List;
import java.util.Set;

@Data
@Builder
public class GameState {
    private String roomCode;
    private GamePhase phase;
    private List<PlayerState> players;
    private String currentTurnPlayerId;
    private String currentAnswerPlayerId;
    private String pendingZwapPlayerId;
    private List<String> reboundQueue;
    private Set<String> bezzerwizzerPlayers;
    private Set<String> bezzerwizzerAnswered;
    private CategoryInfo currentCategory;
    private int round;
    private int timer;
    private Set<String> preparationSkipVotes;

    @Data
    @Builder
    public static class CategoryInfo {
        private String name;
        private String icon;
        private String color;
        private int pointValue;
    }
}
