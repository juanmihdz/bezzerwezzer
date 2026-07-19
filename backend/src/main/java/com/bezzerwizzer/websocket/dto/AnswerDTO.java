package com.bezzerwizzer.websocket.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerDTO {
    private String questionId;
    private String selectedOption;
    private String freeTextAnswer;
}
