package com.bezzerwizzer.websocket.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GameEvent {
    private String type;
    private Object payload;
    private long timestamp = System.currentTimeMillis();
    
    public GameEvent(String type, Object payload) {
        this.type = type;
        this.payload = payload;
        this.timestamp = System.currentTimeMillis();
    }
}
