export type GamePhase = 'HOME' | 'LOBBY' | 'CATEGORY_ASSIGNMENT' | 'PLAYING' | 'ZWAP' | 'BEZZERWIZZER_WINDOW' | 'ANSWERING' | 'TURN_RESULT' | 'ROUND_END' | 'GOLDEN_QUESTION' | 'GOLDEN_RESULT' | 'GAME_OVER';

export interface GameEvent {
  type: string;
  payload: unknown;
  timestamp: number;
}

export interface GameStatePayload {
  roomCode: string;
  hostPlayerId?: string;
  phase: GamePhase;
  players: PlayerStatePayload[] | Record<string, PlayerStatePayload>;
  currentTurnPlayerId?: string | null;
  currentAnswerPlayerId?: string | null;
  pendingZwapPlayerId?: string | null;
  reboundQueue?: string[];
  bezzerwizzerPlayers?: string[];
  bezzerwizzerAnswered?: string[];
  round: number;
  winningPosition?: number;
  goldenQuestionEnabled?: boolean;
  timer?: number;
  preparationSkipVotes?: string[];
  activeQuestion?: import('./player.model').Question | null;
  goldenQuestionSubmittedPlayerIds?: string[];
}

export interface GoldenQuestionResult {
  winnerPlayerId: string | null;
  points: number;
  correctAnswer: string;
}

export interface PlayerStatePayload extends PlayerInfo {
  categorySlots?: CategorySlot[];
  zwapsRemaining?: number;
  bezzerwizzersRemaining?: number;
}

export interface TurnStartPayload {
  playerId: string;
  question: import('./player.model').Question;
  timeLimit?: number;
}

export interface PlayerEventPayload {
  playerId: string;
  timeLimit?: number;
}

export interface AnswerResult {
  playerId: string;
  correct: boolean;
  points: number;
  submittedAnswer?: string;
  reboundContinues?: boolean;
  reboundSummary?: boolean;
  submittedAnswerText?: string;
  correctAnswer: string;
  correctOption?: string;
  bezzerwizzerResults?: BezzerwizzerResult[];
}

export interface BezzerwizzerResult {
  challengerId?: string;
  playerId?: string;
  correct: boolean;
  pointsGained?: number;
  points?: number;
}

export interface ZwapAction {
  targetPlayerId: string;
  mySlotIndex: number;
  targetSlotIndex: number;
}

export interface ZwapAppliedPayload {
  playerId: string;
  playerName: string;
  sourceCategory: string;
  targetPlayerId: string;
  targetPlayerName: string;
  targetCategory: string;
}

export interface BezzerwizzerPlayedPayload {
  playerId: string;
  playerName: string;
  targetPlayerId: string;
  targetPlayerName: string;
}

export interface CategorySlot {
  category: Category;
  pointValue: number;
  answered: boolean;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
}

export interface TacticalTiles {
  zwap: number;
  bezzerwizzer: number;
}

export interface RoomInfo {
  roomCode: string;
  roomId: string;
  players: PlayerInfo[];
  hostPlayerId: string;
  phase: string;
  winningPosition?: number;
  goldenQuestionEnabled?: boolean;
}

export interface PlayerInfo {
  playerId: string;
  username: string;
  color: string;
  boardPosition: number;
  ready: boolean;
  roundScore?: number;
  categorySlots?: CategorySlot[];
}

export interface TurnInfo {
  playerId: string;
  categoryName: string;
  categoryIcon: string;
  categoryColor: string;
  pointValue: number;
}
