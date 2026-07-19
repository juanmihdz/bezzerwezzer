package com.bezzerwizzer.websocket;

import com.bezzerwizzer.game.GameRoom;
import com.bezzerwizzer.service.RoomService;
import com.bezzerwizzer.websocket.dto.GameEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.security.Principal;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class LobbyWebSocketController {

    private final RoomService roomService;
    private final SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/room/create")
    public void createRoom(Principal principal) {
        if (principal instanceof com.bezzerwizzer.config.StompPrincipal sp) {
            GameRoom room = roomService.createRoom(sp.playerId(), sp.username());
            messagingTemplate.convertAndSendToUser(sp.playerId(), "/queue/personal", new GameEvent("ROOM_CREATED", room));
        }
    }

    @MessageMapping("/room/{code}/join")
    public void joinRoom(@DestinationVariable String code, Principal principal) {
        if (principal instanceof com.bezzerwizzer.config.StompPrincipal sp) {
            GameRoom room = roomService.joinRoom(code, sp.playerId(), sp.username());
            messagingTemplate.convertAndSend("/topic/room/" + code, new GameEvent("PLAYER_JOINED", room));
        }
    }

    @MessageMapping("/room/{code}/ready")
    public void toggleReady(@DestinationVariable String code, Principal principal, Map<String, Boolean> payload) {
        if (principal instanceof com.bezzerwizzer.config.StompPrincipal sp) {
            boolean ready = Boolean.TRUE.equals(payload.get("ready"));
            GameRoom room = roomService.setReady(code, sp.playerId(), ready);
            messagingTemplate.convertAndSend("/topic/room/" + code, new GameEvent("ROOM_STATE", room));
        }
    }

    @MessageMapping("/room/{code}/winning-position")
    public void setWinningPosition(@DestinationVariable String code, Principal principal, Map<String, Integer> payload) {
        if (principal instanceof com.bezzerwizzer.config.StompPrincipal sp) {
            Integer winningPosition = payload.get("winningPosition");
            if (winningPosition == null) {
                throw new IllegalArgumentException("Indica la casilla final");
            }
            GameRoom room = roomService.setWinningPosition(code, sp.playerId(), winningPosition);
            messagingTemplate.convertAndSend("/topic/room/" + code, new GameEvent("ROOM_STATE", room));
        }
    }

    @MessageMapping("/room/{code}/golden-question")
    public void setGoldenQuestionEnabled(
            @DestinationVariable String code, Principal principal, Map<String, Boolean> payload) {
        if (principal instanceof com.bezzerwizzer.config.StompPrincipal sp) {
            Boolean enabled = payload.get("enabled");
            if (enabled == null) {
                throw new IllegalArgumentException("Indica si se jugará la Pregunta Dorada");
            }
            GameRoom room = roomService.setGoldenQuestionEnabled(code, sp.playerId(), enabled);
            messagingTemplate.convertAndSend("/topic/room/" + code, new GameEvent("ROOM_STATE", room));
        }
    }

    @MessageMapping("/room/{code}/kick")
    public void kickPlayer(@DestinationVariable String code, Principal principal, Map<String, String> payload) {
        if (principal instanceof com.bezzerwizzer.config.StompPrincipal sp) {
            String playerId = payload.get("playerId");
            if (playerId == null || playerId.isBlank()) {
                throw new IllegalArgumentException("Indica el jugador que quieres expulsar");
            }

            GameRoom room = roomService.kickPlayer(code, sp.playerId(), playerId);
            messagingTemplate.convertAndSendToUser(playerId, "/queue/personal",
                new GameEvent("KICKED_FROM_ROOM", Map.of("roomCode", code)));
            messagingTemplate.convertAndSend("/topic/room/" + code, new GameEvent("ROOM_STATE", room));
        }
    }
}
