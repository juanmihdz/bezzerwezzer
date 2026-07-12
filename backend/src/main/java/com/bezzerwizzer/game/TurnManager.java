package com.bezzerwizzer.game;

import com.bezzerwizzer.model.Question;
import com.bezzerwizzer.model.enums.GamePhase;
import com.bezzerwizzer.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Timer;
import java.util.TimerTask;

@Service
@RequiredArgsConstructor
public class TurnManager {

    private final QuestionService questionService;
    private final RoundManager roundManager;
    private final ScoringService scoringService;

    public void prepareTurn(GameRoom room) {
        PlayerState player = room.getPlayers().get(room.getCurrentTurnPlayerId());
        CategorySlot slot = player.getCategorySlots().get(room.getCurrentCategorySlotIndex());
        room.setPreparedQuestion(questionService.getRandomQuestion(
                slot.getCategory().getId(), room.getUsedQuestionIds(), "es"));
        room.setPreparedQuestionCategoryId(slot.getCategory().getId());
    }

    public void startTurn(GameRoom room) {
        String playerId = room.getCurrentTurnPlayerId();
        PlayerState player = room.getPlayers().get(playerId);
        player.setHasAnswered(false);
        CategorySlot currentSlot = player.getCategorySlots().get(room.getCurrentCategorySlotIndex());

        if (room.getPreparedQuestion() != null
                && currentSlot.getCategory().getId().equals(room.getPreparedQuestionCategoryId())) {
            room.setCurrentQuestion(room.getPreparedQuestion());
        } else {
            // A ZWAP changed the category while the window was open.
            if (room.getPreparedQuestion() != null) room.getUsedQuestionIds().remove(room.getPreparedQuestion().getId());
            room.setCurrentQuestion(questionService.getRandomQuestion(
                    currentSlot.getCategory().getId(), room.getUsedQuestionIds(), "es"));
        }
        room.setPreparedQuestion(null);
        room.setPreparedQuestionCategoryId(null);
        
        room.setTurnStartTime(System.currentTimeMillis());
        room.setCurrentAnswerPlayerId(playerId);
        room.setPhase(GamePhase.ANSWERING);
        // Challenges and the queue were reset at the start of the preparation
        // window, so early Bezzerwizzers survive until the question is revealed.
    }

    public void processBezzerwizzerWindowEnd(GameRoom room) {
        if (room.getPhase() == GamePhase.BEZZERWIZZER_WINDOW) {
            room.setPhase(GamePhase.ANSWERING);
            room.setTurnStartTime(System.currentTimeMillis());
        }
    }
}
