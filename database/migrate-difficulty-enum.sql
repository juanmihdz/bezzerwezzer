-- Run once on databases created before question_difficulty existed.
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'question_difficulty') THEN
        CREATE TYPE question_difficulty AS ENUM ('MEDIUM', 'HARD');
    END IF;

    IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'questions'
          AND column_name = 'difficulty'
          AND data_type = 'integer'
    ) THEN
        ALTER TABLE questions DROP CONSTRAINT IF EXISTS chk_difficulty;
        ALTER TABLE questions ALTER COLUMN difficulty DROP DEFAULT;
        ALTER TABLE questions
            ALTER COLUMN difficulty TYPE question_difficulty
            USING CASE
                WHEN difficulty = 1 THEN 'MEDIUM'::question_difficulty
                ELSE 'HARD'::question_difficulty
            END;
        ALTER TABLE questions ALTER COLUMN difficulty SET DEFAULT 'HARD';
    END IF;
END $$;
