package com.bezzerwizzer.game;

import com.bezzerwizzer.model.Question;
import org.springframework.stereotype.Service;

import java.text.Normalizer;
import java.util.Arrays;

@Service
public class AnswerValidator {

    public boolean validate(String userAnswer, Question question) {
        if (userAnswer == null || userAnswer.trim().isEmpty()) {
            return false;
        }

        String normalizedUserAnswer = normalize(userAnswer);
        String normalizedCorrectAnswer = normalize(question.getCorrectAnswer());

        if (isAcceptable(normalizedUserAnswer, normalizedCorrectAnswer)) {
            return true;
        }

        if (question.getAnswerAliases() != null) {
            for (String alias : question.getAnswerAliases()) {
                if (isAcceptable(normalizedUserAnswer, normalize(alias))) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean isAcceptable(String user, String correct) {
        if (user.equals(correct)) return true;
        
        // If the user's answer contains the correct answer (e.g. correct is "Picasso", user answers "Pablo Picasso")
        if (user.contains(correct)) return true;
        if (correct.contains(user) && user.length() > 4) return true; // partial match if long enough

        int distance = levenshteinDistance(user, correct);
        int threshold = correct.length() <= 5 ? 1 : 2;
        
        return distance <= threshold;
    }

    private String normalize(String text) {
        if (text == null) return "";
        String normalized = Normalizer.normalize(text, Normalizer.Form.NFD);
        normalized = normalized.replaceAll("\\p{InCombiningDiacriticalMarks}+", "");
        return normalized.toLowerCase().trim().replaceAll("[^a-z0-9 ]", "");
    }

    private int levenshteinDistance(String a, String b) {
        int[][] dp = new int[a.length() + 1][b.length() + 1];

        for (int i = 0; i <= a.length(); i++) {
            for (int j = 0; j <= b.length(); j++) {
                if (i == 0) {
                    dp[i][j] = j;
                } else if (j == 0) {
                    dp[i][j] = i;
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j - 1] 
                        + (a.charAt(i - 1) == b.charAt(j - 1) ? 0 : 1), 
                        Math.min(dp[i - 1][j] + 1, 
                        dp[i][j - 1] + 1));
                }
            }
        }
        return dp[a.length()][b.length()];
    }
}
