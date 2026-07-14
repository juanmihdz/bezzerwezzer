package com.bezzerwizzer.game;

import com.bezzerwizzer.model.Question;
import com.bezzerwizzer.model.enums.QuestionType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;
import java.util.Locale;

@Service
@RequiredArgsConstructor
@Slf4j
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
        if (question == null || answer == null || answer.trim().isEmpty()) {
            return false;
        }

        if (question.getQuestionType() == QuestionType.MULTIPLE_CHOICE) {
            String correctOption = correctOptionKey(question);
            String submittedOption = optionKey(question, answer);
            if (correctOption == null || submittedOption == null) {
                return false;
            }
            boolean isCorrect = submittedOption.equals(correctOption);
            if (!isCorrect) {
                log.warn("Answer validation failed: answer='{}' resolved='{}' vs correctOption='{}'",
                        answer, submittedOption, correctOption);
            }
            return isCorrect;
        }
        return answerValidator.validate(answer, question);
    }

    /**
     * Returns the canonical A-D key even when legacy/imported data stores the
     * correct choice as option text or in correct_answer.
     */
    public String correctOptionKey(Question question) {
        if (question == null || question.getQuestionType() != QuestionType.MULTIPLE_CHOICE) return null;

        String fromOptionColumn = optionKey(question, question.getCorrectOption());
        if (fromOptionColumn != null) return fromOptionColumn;
        return optionKey(question, question.getCorrectAnswer());
    }

    public String correctAnswerText(Question question) {
        if (question == null) return "";
        if (question.getQuestionType() != QuestionType.MULTIPLE_CHOICE) {
            return question.getCorrectAnswer() == null ? "" : question.getCorrectAnswer();
        }
        String key = correctOptionKey(question);
        String option = optionText(question, key);
        return option == null ? "" : option;
    }

    private String optionKey(Question question, String value) {
        if (value == null || value.isBlank()) return null;
        String normalized = value.trim();
        if (normalized.matches("(?i)[A-D]")) {
            return normalized.toUpperCase(Locale.ROOT);
        }
        for (String key : new String[]{"A", "B", "C", "D"}) {
            String option = optionText(question, key);
            if (option != null && option.trim().equalsIgnoreCase(normalized)) return key;
        }
        return null;
    }

    private String optionText(Question question, String key) {
        if (key == null) return null;
        return switch (key) {
            case "A" -> question.getOptionA();
            case "B" -> question.getOptionB();
            case "C" -> question.getOptionC();
            case "D" -> question.getOptionD();
            default -> null;
        };
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
