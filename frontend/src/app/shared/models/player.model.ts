export interface Player {
  playerId: string;
  username: string;
  color: string;
  boardPosition: number;
  ready: boolean;
  roundScore: number;
  totalScore: number;
  categorySlots?: any[];
  zwapsRemaining?: number;
  bezzerwizzersRemaining?: number;
}

export type QuestionType = 'MULTIPLE_CHOICE' | 'FREE_TEXT';

export interface Question {
  id: string;
  questionText: string;
  questionType: QuestionType;
  options: string[] | null;
  categoryName: string;
  categoryIcon: string;
  categoryColor: string;
  pointValue: number;
}

export interface AnswerPayload {
  questionId: string;
  selectedOption?: string;
  freeTextAnswer?: string;
}
