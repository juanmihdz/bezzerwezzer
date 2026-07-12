-- ============================================================
-- Bezzerwizzer Online – Database Schema (PostgreSQL 18)
-- ============================================================

-- Categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    icon VARCHAR(50) NOT NULL,
    color VARCHAR(7) NOT NULL,
    locale VARCHAR(5) NOT NULL DEFAULT 'es',
    UNIQUE(name, locale)
);

-- Questions table (supports MULTIPLE_CHOICE and FREE_TEXT)
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT uuidv7(),
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    question_type VARCHAR(20) NOT NULL DEFAULT 'MULTIPLE_CHOICE',

    -- Fields for MULTIPLE_CHOICE
    option_a VARCHAR(255),
    option_b VARCHAR(255),
    option_c VARCHAR(255),
    option_d VARCHAR(255),
    correct_option VARCHAR(1),

    -- Fields for FREE_TEXT
    correct_answer VARCHAR(255),
    answer_aliases TEXT[],

    difficulty INTEGER NOT NULL DEFAULT 1,
    locale VARCHAR(5) NOT NULL DEFAULT 'es',

    CONSTRAINT chk_question_type CHECK (question_type IN ('MULTIPLE_CHOICE', 'FREE_TEXT')),
    CONSTRAINT chk_difficulty CHECK (difficulty BETWEEN 1 AND 3),
    CONSTRAINT valid_mc CHECK (
        question_type != 'MULTIPLE_CHOICE' OR
        (option_a IS NOT NULL AND option_b IS NOT NULL AND
         option_c IS NOT NULL AND option_d IS NOT NULL AND
         correct_option IS NOT NULL AND correct_option IN ('A', 'B', 'C', 'D'))
    ),
    CONSTRAINT valid_ft CHECK (
        question_type != 'FREE_TEXT' OR correct_answer IS NOT NULL
    )
);

-- Optimized indexes
CREATE INDEX idx_questions_category_locale ON questions(category_id, locale);
CREATE INDEX idx_questions_type ON questions(question_type);
CREATE INDEX idx_categories_locale ON categories(locale);
