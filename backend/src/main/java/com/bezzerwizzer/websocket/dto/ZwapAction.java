package com.bezzerwizzer.websocket.dto;

import lombok.Data;

@Data
public class ZwapAction {
    private String targetPlayerId;
    private int mySlotIndex;
    private int targetSlotIndex;
}
