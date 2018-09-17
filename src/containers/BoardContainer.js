import { connect } from "react-redux";
import { addChipActCreator } from "../actions/actions";
import { checkWinnerActCreator } from "../actions/actions";
import { refreashGameActCreator } from "../actions/actions";
import Board from "../components/Board";

const mapStateToProps = state => ({
  cells: state.cells,
  draw: state.draw,
  winner: state.winner,
  redIsNext: state.redIsNext
});
const mapDispatchToProps = dispatch => ({
  addChip: column => dispatch(addChipActCreator(column)),
  checkWinnerOrDraw: () => dispatch(checkWinnerActCreator()),
  refreshOnClick: () => dispatch(refreashGameActCreator())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
