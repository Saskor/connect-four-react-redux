/*
 * типы действий
 */
export const ADD_CHIP = "ADD_CHIP";
export const CHECK_WINNER = "CHECK_WINNER";
export const REFRESH_GAME = "REFRESH_GAME";

/*
 * генераторы действий
 */

export function addChipActCreator(column) {
  return { type: ADD_CHIP, column: column };
}

export function checkWinnerActCreator() {
  return { type: CHECK_WINNER };
}

export function refreashGameActCreator() {
  return { type: REFRESH_GAME };
}
