package com.bezzerwizzer.game;

import com.bezzerwizzer.model.Category;
import com.bezzerwizzer.model.Question;
import com.bezzerwizzer.model.enums.QuestionType;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ScoringServiceTest {
    private final ScoringService service = new ScoringService(new AnswerValidator());

    @Test
    void correctAnswerUsesCurrentSlotsAssignedValue() {
        GameRoom room = new GameRoom();
        PlayerState player = new PlayerState();
        player.setPlayerId("p1");
        player.getCategorySlots().add(new CategorySlot(new Category(), 4, false));
        room.addPlayer(player);
        room.setCurrentCategorySlotIndex(0);
        Question question = new Question();
        question.setQuestionType(QuestionType.MULTIPLE_CHOICE);
        question.setCorrectOption("B");
        room.setCurrentQuestion(question);

        assertEquals(4, service.processAnswer(room, "p1", "b"));
        assertEquals(0, service.processAnswer(room, "p1", "A"));
    }

    @Test
    void movementNeverLeavesBoardBounds() {
        PlayerState player = new PlayerState();
        player.setBoardPosition(29);
        service.movePlayer(player, 4);
        assertEquals(GameRoom.BOARD_SIZE, player.getBoardPosition());
        service.movePlayer(player, -50);
        assertEquals(0, player.getBoardPosition());
    }

    @Test
    void multipleChoiceAcceptsLetterOrVisibleOptionText() {
        Question question = multipleChoiceQuestion();

        assertTrue(service.isCorrect(question, "B"));
        assertTrue(service.isCorrect(question, "Vincent van Gogh"));
        assertEquals("Vincent van Gogh", service.correctAnswerText(question));
        assertEquals("B", service.correctOptionKey(question));
    }

    @Test
    void multipleChoiceSupportsLegacyCorrectAnswerColumn() {
        Question question = multipleChoiceQuestion();
        question.setCorrectOption(null);
        question.setCorrectAnswer("Vincent van Gogh");

        assertTrue(service.isCorrect(question, "B"));
        assertEquals("Vincent van Gogh", service.correctAnswerText(question));
    }

    private Question multipleChoiceQuestion() {
        Question question = new Question();
        question.setQuestionType(QuestionType.MULTIPLE_CHOICE);
        question.setOptionA("Claude Monet");
        question.setOptionB("Vincent van Gogh");
        question.setOptionC("Pablo Picasso");
        question.setOptionD("Salvador Dalí");
        question.setCorrectOption("B");
        return question;
    }

    @Test
    void bezzerwizzerOnlyRisksPointsWhenOriginalPlayerMisses() {
        assertEquals(0, service.processBezzerwizzerResult(true, false));
        assertEquals(3, service.processBezzerwizzerResult(false, true));
        assertEquals(-1, service.processBezzerwizzerResult(false, false));
    }
}
