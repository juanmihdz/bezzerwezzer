package com.bezzerwizzer.game;

import com.bezzerwizzer.model.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategorySlot {
    private Category category;
    private int pointValue;
    private boolean answered;
}
