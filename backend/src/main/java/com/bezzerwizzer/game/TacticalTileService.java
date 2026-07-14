package com.bezzerwizzer.game;

import com.bezzerwizzer.exception.GameException;
import com.bezzerwizzer.model.enums.GamePhase;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class TacticalTileService {

    public void processZwap(GameRoom room, String playerId, String targetPlayerId, int mySlotIndex, int targetSlotIndex) {
        if (room.getPhase() != GamePhase.ZWAP) {
            throw new GameException("No se puede usar ZWAP en esta fase");
        }
        
        if (!playerId.equals(room.getCurrentTurnPlayerId())) {
            throw new GameException("Solo puedes usar ZWAP en tu turno");
        }
        if (!playerId.equals(room.getPendingZwapPlayerId())) {
            throw new GameException("No tienes un ZWAP en curso");
        }
        
        if (targetPlayerId == null || targetPlayerId.isBlank()) {
            throw new GameException("Jugador objetivo no válido");
        }

        PlayerState current = room.getPlayers().get(playerId);
        PlayerState target = room.getPlayers().get(targetPlayerId);
        
        if (current == null || target == null) {
            throw new GameException("Jugador no encontrado");
        }
        
        if (current.getZwapsRemaining() <= 0) {
            throw new GameException("No te quedan fichas ZWAP");
        }
        
        if (mySlotIndex < 0 || mySlotIndex >= current.getCategorySlots().size() ||
            targetSlotIndex < 0 || targetSlotIndex >= target.getCategorySlots().size()) {
            throw new GameException("Índices de categoría inválidos");
        }
        if (playerId.equals(targetPlayerId) && mySlotIndex == targetSlotIndex) {
            throw new GameException("Debes elegir dos categorías distintas para reordenarlas");
        }
        
        CategorySlot mySlot = current.getCategorySlots().get(mySlotIndex);
        CategorySlot targetSlot = target.getCategorySlots().get(targetSlotIndex);
        
        if (mySlot.isAnswered() || targetSlot.isAnswered()) {
            throw new GameException("No puedes intercambiar categorías ya jugadas");
        }
        
        // Swap categories but keep point values
        com.bezzerwizzer.model.Category temp = mySlot.getCategory();
        mySlot.setCategory(targetSlot.getCategory());
        targetSlot.setCategory(temp);
        
        current.setZwapsRemaining(current.getZwapsRemaining() - 1);
    }

    public void processBezzerwizzer(GameRoom room, String challengerId, String targetPlayerId) {
        boolean beforeQuestion = room.getPhase() == GamePhase.PLAYING;
        boolean whileOriginalAnswers = room.getPhase() == GamePhase.ANSWERING
                && room.getCurrentTurnPlayerId().equals(room.getCurrentAnswerPlayerId());
        if (!beforeQuestion && !whileOriginalAnswers) {
            throw new GameException("Bezzerwizzer solo está disponible antes o durante la respuesta original");
        }
        
        if (targetPlayerId == null || targetPlayerId.isBlank()) {
            throw new GameException("Jugador objetivo no válido");
        }

        if (challengerId.equals(targetPlayerId)) {
            throw new GameException("No puedes hacerte un Bezzerwizzer a ti mismo");
        }
        
        PlayerState challenger = room.getPlayers().get(challengerId);
        if (challenger == null || !room.getPlayers().containsKey(targetPlayerId)) {
            throw new GameException("Jugador no encontrado");
        }
        if (!targetPlayerId.equals(room.getCurrentTurnPlayerId())) {
            throw new GameException("Solo puedes desafiar al jugador del turno actual");
        }
        
        if (challenger.getBezzerwizzersRemaining() <= 0) {
            throw new GameException("No te quedan fichas Bezzerwizzer");
        }
        
        if (room.getBezzerwizzerChallenges().containsKey(challengerId)) {
            throw new GameException("Ya has jugado una ficha Bezzerwizzer en este turno");
        }
        
        room.getBezzerwizzerChallenges().put(challengerId, targetPlayerId);
        room.getBezzerwizzerQueue().add(challengerId);
        if (beforeQuestion) room.getEarlyBezzerwizzers().add(challengerId);
        // The tile is only consumed if this player actually receives a rebound.
    }
}
