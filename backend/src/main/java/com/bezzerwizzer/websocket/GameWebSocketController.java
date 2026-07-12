package com.bezzerwizzer.websocket;

import com.bezzerwizzer.game.GameRoom;
import com.bezzerwizzer.service.GameService;
import com.bezzerwizzer.service.RoomService;
import com.bezzerwizzer.websocket.dto.AnswerDTO;
import com.bezzerwizzer.websocket.dto.CategoryAssignment;
import com.bezzerwizzer.websocket.dto.ZwapAction;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import java.security.Principal;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class GameWebSocketController {

    private final GameService gameService;
    private final RoomService roomService;

    @MessageMapping("/game/{code}/start")
    public void startGame(@DestinationVariable String code, Principal principal) {
        String playerId = principal.getName();
        GameRoom room = roomService.getRoom(code);
        
        if (!room.getHostPlayerId().equals(playerId)) {
            throw new RuntimeException("Solo el host puede iniciar la partida");
        }
        
        gameService.startGame(code);
    }

    @MessageMapping("/game/{code}/state")
    public void requestGameState(@DestinationVariable String code, Principal principal) {
        gameService.requestGameState(code, principal.getName());
    }

    @MessageMapping("/game/{code}/assign-categories")
    public void assignCategories(@DestinationVariable String code, Principal principal, CategoryAssignment assignment) {
        String playerId = principal.getName();
        gameService.assignCategories(code, playerId, assignment.getPointValues());
    }

    @MessageMapping("/game/{code}/answer")
    public void answerQuestion(@DestinationVariable String code, Principal principal, AnswerDTO answer) {
        gameService.handleAnswer(code, principal.getName(), answer);
    }

    @MessageMapping("/game/{code}/begin-turn")
    public void beginTurn(@DestinationVariable String code, Principal principal) {
        gameService.beginTurn(code, principal.getName());
    }

    @MessageMapping("/game/{code}/skip-turn-preparation")
    public void skipTurnPreparation(@DestinationVariable String code, Principal principal) {
        gameService.skipTurnPreparation(code, principal.getName());
    }

    @MessageMapping("/game/{code}/zwap")
    public void useZwap(@DestinationVariable String code, Principal principal, ZwapAction action) {
        gameService.handleZwap(code, principal.getName(), action);
    }

    @MessageMapping("/game/{code}/bezzerwizzer")
    public void useBezzerwizzer(@DestinationVariable String code, Principal principal, Map<String, String> payload) {
        gameService.handleBezzerwizzer(code, principal.getName(), payload.get("targetPlayerId"));
    }
}
