package com.bezzerwizzer.service;

import com.bezzerwizzer.game.GameRoom;
import com.bezzerwizzer.model.enums.GamePhase;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RoomServiceTest {

    private final RoomService roomService = new RoomService();

    @Test
    void readyStateIsSharedAndRequiresEveryPlayer() {
        GameRoom room = roomService.createRoom("host", "Ana");
        roomService.joinRoom(room.getRoomCode(), "guest", "Luis");

        roomService.toggleReady(room.getRoomCode(), "host");
        assertTrue(room.getPlayers().get("host").isReady());
        assertFalse(room.isReady());

        roomService.toggleReady(room.getRoomCode(), "guest");
        assertTrue(room.isReady());
    }

    @Test
    void repeatedJoinDoesNotDuplicatePlayerOrConsumeSlot() {
        GameRoom room = roomService.createRoom("host", "Ana");

        roomService.joinRoom(room.getRoomCode(), "host", "Ana");

        assertEquals(1, room.getPlayers().size());
        assertEquals("host", room.getHostPlayerId());
    }

    @Test
    void lobbyCannotChangeAfterGameStarts() {
        GameRoom room = roomService.createRoom("host", "Ana");
        room.setPhase(GamePhase.CATEGORY_ASSIGNMENT);

        assertThrows(IllegalStateException.class,
            () -> roomService.toggleReady(room.getRoomCode(), "host"));
        assertThrows(IllegalStateException.class,
            () -> roomService.joinRoom(room.getRoomCode(), "guest", "Luis"));
        assertThrows(IllegalStateException.class,
            () -> roomService.setGoldenQuestionEnabled(room.getRoomCode(), "host", false));
    }

    @Test
    void onlyHostCanConfigureGoldenQuestionInLobby() {
        GameRoom room = roomService.createRoom("host", "Ana");
        roomService.joinRoom(room.getRoomCode(), "guest", "Luis");

        assertTrue(room.isGoldenQuestionEnabled());
        assertThrows(IllegalStateException.class,
            () -> roomService.setGoldenQuestionEnabled(room.getRoomCode(), "guest", false));

        roomService.setGoldenQuestionEnabled(room.getRoomCode(), "host", false);

        assertFalse(room.isGoldenQuestionEnabled());
    }
}
