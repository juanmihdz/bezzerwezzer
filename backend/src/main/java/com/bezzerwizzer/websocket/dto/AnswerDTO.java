package com.bezzerwizzer.websocket.dto;

import lombok.Data;

@Data
public class AnswerDTO {
    private String questionId;
    private String selectedOption;
    private String freeTextAnswer;
}
