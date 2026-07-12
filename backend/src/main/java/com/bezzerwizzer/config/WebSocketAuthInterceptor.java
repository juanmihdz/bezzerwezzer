package com.bezzerwizzer.config;

import com.bezzerwizzer.auth.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class WebSocketAuthInterceptor implements ChannelInterceptor {

    private final JwtService jwtService;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);

        if (accessor != null && StompCommand.CONNECT.equals(accessor.getCommand())) {
            String authHeader = accessor.getFirstNativeHeader("Authorization");

            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                String token = authHeader.substring(7);

                if (jwtService.isTokenValid(token)) {
                    String playerId = jwtService.extractPlayerId(token);
                    String username = jwtService.extractUsername(token);
                    accessor.setUser(new StompPrincipal(playerId, username));
                    log.info("WebSocket authenticated: playerId={}, username={}", playerId, username);
                } else {
                    log.warn("Invalid JWT token in WebSocket CONNECT");
                    throw new IllegalArgumentException("Invalid JWT token");
                }
            } else {
                log.warn("Missing Authorization header in WebSocket CONNECT");
                throw new IllegalArgumentException("Missing Authorization header");
            }
        }

        return message;
    }
}
