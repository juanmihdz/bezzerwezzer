package com.bezzerwizzer.service;

import com.bezzerwizzer.model.Question;
import com.bezzerwizzer.model.enums.QuestionType;
import com.bezzerwizzer.repository.CategoryRepository;
import com.bezzerwizzer.repository.QuestionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class QuestionServiceGoldenQuestionTest {

    private QuestionRepository questionRepository;
    private QuestionService questionService;

    @BeforeEach
    void setUp() {
        questionRepository = mock(QuestionRepository.class);
        questionService = new QuestionService(mock(CategoryRepository.class), questionRepository);
    }

    @Test
    void writingQuestionHasPriority() {
        Question writing = question(QuestionType.FREE_TEXT);
        when(questionRepository.findByQuestionTypeAndLocale(QuestionType.FREE_TEXT, "es"))
                .thenReturn(List.of(writing));

        Set<UUID> usedIds = new HashSet<>();
        Question selected = questionService.getRandomGoldenQuestion(usedIds, "es");

        assertEquals(writing, selected);
        assertTrue(usedIds.contains(writing.getId()));
        verify(questionRepository, never())
                .findByQuestionTypeAndLocale(QuestionType.MULTIPLE_CHOICE, "es");
    }

    @Test
    void multipleChoiceIsUsedWhenWritingBankIsEmpty() {
        Question multipleChoice = question(QuestionType.MULTIPLE_CHOICE);
        when(questionRepository.findByQuestionTypeAndLocale(QuestionType.FREE_TEXT, "es"))
                .thenReturn(List.of());
        when(questionRepository.findByQuestionTypeAndLocale(QuestionType.MULTIPLE_CHOICE, "es"))
                .thenReturn(List.of(multipleChoice));

        Question selected = questionService.getRandomGoldenQuestion(new HashSet<>(), "es");

        assertEquals(multipleChoice, selected);
    }

    private Question question(QuestionType type) {
        Question question = new Question();
        question.setId(UUID.randomUUID());
        question.setQuestionType(type);
        return question;
    }
}
