import { ADD_CHIP, CHECK_WINNER, REFRESH_GAME } from "../actions/actions";
import addChip from "../handleClick/addChip";
import matches from "../handleClick/Matches";

const initialState = {
  cells: Array(7).fill(Array(6).fill(null)),
  redIsNext: true,
  inserts: 0,
  winner: "",
  draw: false,
  lastChipPosition: { x: null, y: null }
};

export default function connectFourAppReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHIP:
      if (
        state.winner ||
        state.inserts >= state.cells.length * state.cells[0].length
      ) {
        return state;
      }
      const stateWithAddedChip = addChip(
        state.cells,
        action.column,
        state.redIsNext,
        state.inserts,
        state.lastChipPosition
      );
      return Object.assign({}, state, stateWithAddedChip);

    case CHECK_WINNER:
      if (
        state.winner ||
        state.inserts >= state.cells.length * state.cells[0].length
      ) {
        return state;
      }
      const stateWithWinnerOrDraw = matches(
        state.lastChipPosition.x,
        state.lastChipPosition.y,
        state.cells,
        state.inserts
      );
      return Object.assign({}, state, stateWithWinnerOrDraw);

    case REFRESH_GAME:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}
