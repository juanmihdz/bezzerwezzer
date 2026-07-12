package com.bezzerwizzer.repository;

import com.bezzerwizzer.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface QuestionRepository extends JpaRepository<Question, UUID> {

    List<Question> findByCategoryIdAndLocale(Integer categoryId, String locale);

    @Query(value = """
            SELECT * FROM questions q
            WHERE q.category_id = :categoryId
              AND q.locale = :locale
              AND q.id NOT IN (:usedIds)
            ORDER BY RANDOM()
            LIMIT :limit
            """, nativeQuery = true)
    List<Question> findRandomQuestions(
            @Param("categoryId") Integer categoryId,
            @Param("locale") String locale,
            @Param("usedIds") List<UUID> usedIds,
            @Param("limit") int limit);

    @Query(value = """
            SELECT * FROM questions q
            WHERE q.category_id = :categoryId
              AND q.locale = :locale
            ORDER BY RANDOM()
            LIMIT :limit
            """, nativeQuery = true)
    List<Question> findRandomQuestionsNoExclusion(
            @Param("categoryId") Integer categoryId,
            @Param("locale") String locale,
            @Param("limit") int limit);
}
