package com.bezzerwizzer.service;

import com.bezzerwizzer.exception.GameException;
import com.bezzerwizzer.model.Category;
import com.bezzerwizzer.model.Question;
import com.bezzerwizzer.repository.CategoryRepository;
import com.bezzerwizzer.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
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
}
