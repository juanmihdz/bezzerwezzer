package com.bezzerwizzer.game;

import com.bezzerwizzer.model.Category;
import com.bezzerwizzer.model.enums.GamePhase;
import com.bezzerwizzer.exception.GameException;
import com.bezzerwizzer.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoundManager {

    private final QuestionService questionService;

    public void startNewRound(GameRoom room) {
        room.setCurrentRound(room.getCurrentRound() + 1);
        room.setCurrentTurnPlayerIndex(0);
        room.setCurrentCategorySlotIndex(0);
        room.setCurrentQuestion(null);
        room.setPhase(GamePhase.CATEGORY_ASSIGNMENT);
        room.getCategoryAssignmentConfirmed().clear();
        
        // Setup turn order based on current standings (lowest points first)
        List<PlayerState> sortedPlayers = new ArrayList<>(room.getPlayers().values());
        sortedPlayers.sort((p1, p2) -> Integer.compare(p1.getBoardPosition(), p2.getBoardPosition()));
        
        room.getTurnOrder().clear();
        for (PlayerState player : sortedPlayers) {
            room.getTurnOrder().add(player.getPlayerId());
            
            // Reset tiles and states for new round
            player.setZwapsRemaining(1);
            player.setBezzerwizzersRemaining(2);
            player.setHasAnswered(false);
            player.setRoundScore(0);
            player.getCategorySlots().clear();
        }
        
        // Fetch random categories and assign 4 to each player
        int categoriesNeeded = room.getPlayers().size() * GameRoom.CATEGORIES_PER_ROUND;
        List<Category> randomCategories = questionService.getRandomCategories(categoriesNeeded, "es");
        if (randomCategories.size() < categoriesNeeded) {
            throw new GameException("No hay suficientes categorías únicas para iniciar la ronda");
        }
        
        int catIndex = 0;
        for (String playerId : room.getTurnOrder()) {
            PlayerState player = room.getPlayers().get(playerId);
            for (int i = 0; i < GameRoom.CATEGORIES_PER_ROUND; i++) {
                Category cat = randomCategories.get(catIndex);
                // Give every category a valid initial position. Players can still
                // rearrange them before confirming, but no client-side timer or
                // rendering lifecycle is needed to make the assignment usable.
                player.getCategorySlots().add(new CategorySlot(
                        cat, i + 1, false));
                catIndex++;
            }
        }
    }

    public boolean advanceTurn(GameRoom room) {
        // Find next player who hasn't answered their current slot
        int originalSlotIndex = room.getCurrentCategorySlotIndex();
        int originalPlayerIndex = room.getCurrentTurnPlayerIndex();
        
        while (true) {
            room.setCurrentTurnPlayerIndex(room.getCurrentTurnPlayerIndex() + 1);
            if (room.getCurrentTurnPlayerIndex() >= room.getTurnOrder().size()) {
                // One point value has been played by every player. Move to the
                // next round, where every player receives the next value.
                room.setCurrentTurnPlayerIndex(0);
                room.setCurrentCategorySlotIndex(room.getCurrentCategorySlotIndex() + 1);
            }
            
            if (room.getCurrentCategorySlotIndex() >= GameRoom.CATEGORIES_PER_ROUND) {
                // Round is complete
                room.setPhase(GamePhase.ROUND_END);
                return false;
            }
            if (room.getCurrentTurnPlayerIndex() == 0) {
                room.setCurrentRound(room.getCurrentRound() + 1);
            }

            String nextPlayerId = room.getCurrentTurnPlayerId();
            PlayerState nextPlayer = room.getPlayers().get(nextPlayerId);
            
            if (!nextPlayer.getCategorySlots().get(room.getCurrentCategorySlotIndex()).isAnswered()) {
                room.setPhase(GamePhase.PLAYING);
                room.setCurrentQuestion(null);
                return true; // Turn advanced successfully
            }
            
            // Safety break just in case
            if (room.getCurrentCategorySlotIndex() == originalSlotIndex && 
                room.getCurrentTurnPlayerIndex() == originalPlayerIndex) {
                break;
            }
        }
        
        room.setPhase(GamePhase.ROUND_END);
        return false;
    }

    public boolean isRoundComplete(GameRoom room) {
        for (PlayerState player : room.getPlayers().values()) {
            for (CategorySlot slot : player.getCategorySlots()) {
                if (!slot.isAnswered()) {
                    return false;
                }
            }
        }
        return true;
    }
}
