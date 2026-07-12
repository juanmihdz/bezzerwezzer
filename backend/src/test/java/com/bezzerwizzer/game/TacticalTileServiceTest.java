package com.bezzerwizzer.game;

import com.bezzerwizzer.exception.GameException;
import com.bezzerwizzer.model.Category;
import com.bezzerwizzer.model.enums.GamePhase;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TacticalTileServiceTest {
    private final TacticalTileService service = new TacticalTileService();

    @Test
    void zwapSwapsCategoriesButKeepsPointValues() {
        GameRoom room = roomIn(GamePhase.PLAYING);
        PlayerState current = player("a", category("Historia"), 4);
        PlayerState target = player("b", category("Ciencia"), 1);
        room.addPlayer(current);
        room.addPlayer(target);
        room.getTurnOrder().add("a");

        service.processZwap(room, "a", "b", 0, 0);

        assertEquals("Ciencia", current.getCategorySlots().get(0).getCategory().getName());
        assertEquals(4, current.getCategorySlots().get(0).getPointValue());
        assertEquals("Historia", target.getCategorySlots().get(0).getCategory().getName());
        assertEquals(0, current.getZwapsRemaining());
    }

    @Test
    void bezzerwizzerCanOnlyTargetCurrentPlayer() {
        GameRoom room = roomIn(GamePhase.BEZZERWIZZER_WINDOW);
        room.addPlayer(player("a", category("A"), 1));
        room.addPlayer(player("b", category("B"), 1));
        room.addPlayer(player("c", category("C"), 1));
        room.getTurnOrder().add("b");

        assertThrows(GameException.class, () -> service.processBezzerwizzer(room, "a", "c"));
        assertEquals(2, room.getPlayers().get("a").getBezzerwizzersRemaining());
    }

    @Test
    void tacticalActionsRejectMissingTargetsWithoutLeakingNullPointerExceptions() {
        GameRoom zwapRoom = roomIn(GamePhase.PLAYING);
        zwapRoom.addPlayer(player("a", category("A"), 1));
        zwapRoom.getTurnOrder().add("a");
        assertThrows(GameException.class, () -> service.processZwap(zwapRoom, "a", null, 0, 0));

        GameRoom bezRoom = roomIn(GamePhase.BEZZERWIZZER_WINDOW);
        bezRoom.addPlayer(player("a", category("A"), 1));
        assertThrows(GameException.class, () -> service.processBezzerwizzer(bezRoom, "a", null));
    }

    private GameRoom roomIn(GamePhase phase) {
        GameRoom room = new GameRoom();
        room.setPhase(phase);
        return room;
    }

    private PlayerState player(String id, Category category, int points) {
        PlayerState player = new PlayerState();
        player.setPlayerId(id);
        player.getCategorySlots().add(new CategorySlot(category, points, false));
        return player;
    }

    private Category category(String name) {
        Category category = new Category();
        category.setName(name);
        return category;
    }
}
