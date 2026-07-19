package com.bezzerwizzer.websocket.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ZwapAction {
    private String targetPlayerId;
    private int mySlotIndex;
    private int targetSlotIndex;
}
