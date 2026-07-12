package com.bezzerwizzer.config;

import com.bezzerwizzer.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
@RequiredArgsConstructor
public class WebSocketDisconnectListener {

    private final RoomService roomService;

    @EventListener
    public void onDisconnect(SessionDisconnectEvent event) {
        if (event.getUser() instanceof StompPrincipal principal) {
            roomService.markPlayerDisconnected(principal.playerId());
        }
    }
}
