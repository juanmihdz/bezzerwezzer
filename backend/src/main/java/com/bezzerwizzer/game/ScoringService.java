package com.bezzerwizzer.game;

import com.bezzerwizzer.model.Question;
import com.bezzerwizzer.model.enums.QuestionType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ScoringService {

    private final AnswerValidator answerValidator;

    public int processAnswer(GameRoom room, String playerId, String answer) {
        Question question = room.getCurrentQuestion();
        if (question == null) return 0;

        boolean correct = isCorrect(question, answer);

        if (correct) {
            PlayerState player = room.getPlayers().get(playerId);
            if (player != null) {
                // Determine points from the category slot
                int points = 1;
                if (!player.getCategorySlots().isEmpty() && room.getCurrentCategorySlotIndex() < player.getCategorySlots().size()) {
                    points = player.getCategorySlots().get(room.getCurrentCategorySlotIndex()).getPointValue();
                }
                return points;
            }
        }
        return 0;
    }

    public boolean isCorrect(Question question, String answer) {
        if (question == null) return false;
        if (question.getQuestionType() == QuestionType.MULTIPLE_CHOICE) {
            return answer != null && answer.equalsIgnoreCase(question.getCorrectOption());
        }
        return answerValidator.validate(answer, question);
    }

    public int processBezzerwizzerResult(boolean originalPlayerCorrect, boolean challengerCorrect) {
        if (originalPlayerCorrect) {
            return 0;
        } else if (challengerCorrect) {
            return 3;
        } else {
            return -1;
        }
    }

    public void movePlayer(PlayerState player, int spaces) {
        int currentPos = player.getBoardPosition();
        int newPos = currentPos + spaces;
        
        // Prevent moving backwards past start
        if (newPos < 0) newPos = 0;
        
        // Cap at board size
        if (newPos >= GameRoom.BOARD_SIZE) {
            newPos = GameRoom.BOARD_SIZE;
        }
        
        player.setBoardPosition(newPos);
        player.setRoundScore(player.getRoundScore() + spaces);
    }

    public Optional<String> checkWinCondition(GameRoom room) {
        return room.getPlayers().values().stream()
                .filter(p -> p.getBoardPosition() >= GameRoom.BOARD_SIZE)
                .max((p1, p2) -> Integer.compare(p1.getBoardPosition(), p2.getBoardPosition()))
                .map(PlayerState::getPlayerId);
    }
}
