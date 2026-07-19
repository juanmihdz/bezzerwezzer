package com.bezzerwizzer.service;

import com.bezzerwizzer.exception.GameException;
import com.bezzerwizzer.model.Category;
import com.bezzerwizzer.model.Question;
import com.bezzerwizzer.model.enums.QuestionType;
import com.bezzerwizzer.repository.CategoryRepository;
import com.bezzerwizzer.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class QuestionService {

    private final CategoryRepository categoryRepository;
    private final QuestionRepository questionRepository;

    public List<Category> getRandomCategories(int count, String locale) {
        List<Category> all = categoryRepository.findByLocale(locale);
        Collections.shuffle(all);
        return all.stream().limit(count).collect(Collectors.toList());
    }

    public Question getRandomQuestion(Integer categoryId, Set<UUID> usedIds, String locale) {
        List<Question> questions = questionRepository.findByCategoryIdAndLocale(categoryId, locale);
        List<Question> available = questions.stream()
                .filter(q -> !usedIds.contains(q.getId()))
                .collect(Collectors.toList());
                
        if (available.isEmpty()) {
            // If all used, reset for this category
            available = questions;
            usedIds.removeAll(questions.stream().map(Question::getId).collect(Collectors.toSet()));
        }
        
        if (available.isEmpty()) {
            throw new GameException("No hay preguntas disponibles para esta categoría");
        }
        
        Collections.shuffle(available);
        Question selected = available.get(0);
        usedIds.add(selected.getId());
        return selected;
    }

    /** Selects a writing question from the complete bank for the shared golden bonus. */
    public Question getRandomFreeTextQuestion(Set<UUID> usedIds, String locale) {
        Question selected = selectQuestionByType(QuestionType.FREE_TEXT, usedIds, locale);
        if (selected == null) {
            throw new GameException("No hay preguntas de escritura disponibles para la Pregunta Dorada");
        }
        return selected;
    }

    /**
     * Prefers a writing question for the shared golden bonus and falls back to
     * multiple choice when the bank contains no writing questions.
     */
    public Question getRandomGoldenQuestion(Set<UUID> usedIds, String locale) {
        Question selected = selectQuestionByType(QuestionType.FREE_TEXT, usedIds, locale);
        if (selected == null) {
            selected = selectQuestionByType(QuestionType.MULTIPLE_CHOICE, usedIds, locale);
        }
        if (selected == null) {
            throw new GameException("No hay preguntas disponibles para la Pregunta Dorada");
        }
        return selected;
    }

    private Question selectQuestionByType(QuestionType type, Set<UUID> usedIds, String locale) {
        List<Question> questions = questionRepository.findByQuestionTypeAndLocale(type, locale);
        List<Question> available = questions.stream()
                .filter(question -> !usedIds.contains(question.getId()))
                .collect(Collectors.toList());
        if (available.isEmpty()) {
            available = questions;
            usedIds.removeAll(questions.stream().map(Question::getId).collect(Collectors.toSet()));
        }
        if (available.isEmpty()) {
            return null;
        }
        Collections.shuffle(available);
        Question selected = available.get(0);
        usedIds.add(selected.getId());
        return selected;
    }
}
