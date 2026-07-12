package com.bezzerwizzer.game;

import com.bezzerwizzer.model.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategorySlot {
    private Category category;
    private int pointValue;
    private boolean answered;
}
