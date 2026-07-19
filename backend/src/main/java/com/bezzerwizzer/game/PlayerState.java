package com.bezzerwizzer.game;

import lombok.Getter;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class PlayerState {
    private String playerId;
    private String username;
    private String color;
    private int boardPosition;
    private List<CategorySlot> categorySlots = new ArrayList<>();
    private int zwapsRemaining = 1;
    private int bezzerwizzersRemaining = 2;
    private boolean ready;
    private boolean hasAnswered;
    private int roundScore;
}
