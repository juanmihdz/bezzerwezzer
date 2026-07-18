package com.bezzerwizzer.service;

import com.bezzerwizzer.exception.RoomNotFoundException;
import com.bezzerwizzer.game.GameRoom;
import com.bezzerwizzer.game.PlayerState;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;
import com.bezzerwizzer.model.enums.GamePhase;

@Service
public class RoomService {
    
    private final Map<String, GameRoom> rooms = new ConcurrentHashMap<>();
    private final String[] COLORS = {"#E91E63", "#2196F3", "#4CAF50", "#FF9800"};
    private final Random random = new Random();

    public GameRoom createRoom(String hostPlayerId, String hostUsername) {
        String roomCode = generateRoomCode();
        GameRoom room = new GameRoom();
        room.setRoomId(java.util.UUID.randomUUID().toString());
        room.setRoomCode(roomCode);
        
        PlayerState host = new PlayerState();
        host.setPlayerId(hostPlayerId);
        host.setUsername(hostUsername);
        host.setColor(COLORS[0]);
        
        room.addPlayer(host);
        room.getConnectedPlayerIds().add(hostPlayerId);
        rooms.put(roomCode, room);
        
        return room;
    }

    public synchronized GameRoom joinRoom(String roomCode, String playerId, String username) {
        GameRoom room = getRoom(roomCode);
        if (room.getPhase() != com.bezzerwizzer.model.enums.GamePhase.LOBBY) {
            throw new IllegalStateException("La partida ya ha comenzado");
        }
        if (room.getPlayers().containsKey(playerId)) {
            markPlayerConnected(room, playerId);
            return room;
        }
        if (room.getPlayers().size() >= GameRoom.MAX_PLAYERS) {
            throw new IllegalStateException("La sala está llena");
        }
        
        PlayerState player = new PlayerState();
        player.setPlayerId(playerId);
        player.setUsername(username);
        player.setColor(COLORS[room.getPlayers().size() % COLORS.length]);
        
        room.addPlayer(player);
        markPlayerConnected(room, playerId);
        return room;
    }

    public GameRoom getRoom(String roomCode) {
        GameRoom room = rooms.get(roomCode.toUpperCase());
        if (room == null) {
            throw new RoomNotFoundException("Sala no encontrada: " + roomCode);
        }
        room.setLastActivityAt(System.currentTimeMillis());
        return room;
    }

    public synchronized GameRoom toggleReady(String roomCode, String playerId) {
        GameRoom room = getRoom(roomCode);
        PlayerState player = room.getPlayers().get(playerId);
        return setReady(roomCode, playerId, player != null && !player.isReady());
    }

    public synchronized GameRoom setReady(String roomCode, String playerId, boolean ready) {
        GameRoom room = getRoom(roomCode);
        if (room.getPhase() != com.bezzerwizzer.model.enums.GamePhase.LOBBY) {
            throw new IllegalStateException("La partida ya ha comenzado");
        }
        PlayerState player = room.getPlayers().get(playerId);
        if (player == null) {
            throw new IllegalStateException("El jugador no pertenece a la sala");
        }
        player.setReady(ready);
        return room;
    }

    public synchronized GameRoom setWinningPosition(String roomCode, String playerId, int winningPosition) {
        GameRoom room = getRoom(roomCode);
        if (room.getPhase() != GamePhase.LOBBY) {
            throw new IllegalStateException("La casilla final solo se puede configurar en la sala de espera");
        }
        if (!playerId.equals(room.getHostPlayerId())) {
            throw new IllegalStateException("Solo el anfitrión puede configurar la casilla final");
        }
        if (winningPosition < 10 || winningPosition > GameRoom.BOARD_SIZE) {
            throw new IllegalArgumentException("La casilla final debe estar entre 10 y " + GameRoom.BOARD_SIZE);
        }
        room.setWinningPosition(winningPosition);
        return room;
    }

    public void removePlayerFromRoom(String roomCode, String playerId) {
        GameRoom room = getRoom(roomCode);
        room.removePlayer(playerId);
        if (room.getPlayers().isEmpty()) {
            rooms.remove(roomCode);
        }
    }

    public void markPlayerConnected(GameRoom room, String playerId) {
        room.getConnectedPlayerIds().add(playerId);
        room.setLastActivityAt(System.currentTimeMillis());
    }

    public void markPlayerDisconnected(String playerId) {
        rooms.values().forEach(room -> {
            if (room.getConnectedPlayerIds().remove(playerId)) {
                room.setLastActivityAt(System.currentTimeMillis());
            }
        });
    }

    public void cleanupExpiredRooms(long now) {
        final long abandonedRoomGrace = 5 * 60_000L;
        final long finishedRoomGrace = 10 * 60_000L;
        final long inactiveRoomGrace = 60 * 60_000L;
        rooms.entrySet().removeIf(entry -> {
            GameRoom room = entry.getValue();
            if (room.getPhase() == GamePhase.GAME_OVER && room.getFinishedAt() > 0) {
                return now - room.getFinishedAt() >= finishedRoomGrace;
            }
            if (room.getConnectedPlayerIds().isEmpty()) {
                return now - room.getLastActivityAt() >= abandonedRoomGrace;
            }
            return now - room.getLastActivityAt() >= inactiveRoomGrace;
        });
    }

    private String generateRoomCode() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder code;
        do {
            code = new StringBuilder();
            for (int i = 0; i < 6; i++) {
                code.append(chars.charAt(random.nextInt(chars.length())));
            }
        } while (rooms.containsKey(code.toString()));
        return code.toString();
    }
}
