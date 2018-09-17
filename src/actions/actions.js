/*
 * типы действий
 */
export const ADD_CHIP = "ADD_CHIP";
export const CHECK_WINNER = "CHECK_WINNER";
export const CHECK_DRAW = "CHECK_DRAW";
export const REFRESH_GAME = "REFRESH_GAME";

/*
 * генераторы действий
 */

export function addChip(column) {
  return { type: ADD_CHIP, column };
}

export function checkWinner(column, row) {
  return { type: CHECK_WINNER, column, row };
}

export function checkDraw(inserts) {
  return { type: CHECK_DRAW, inserts };
}

export function refreashGame(state) {
  return { type: REFRESH_GAME, state };
}
