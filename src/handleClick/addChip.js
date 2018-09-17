export default addChip;

/**
 * add chip to available cell in boardColumn
 * of boardCells
 * @return {void}
 */

function addChip(boardCells, boardColumn) {
  const cells = boardCells.slice();
  const column = cells[boardColumn].slice();
  let cellIndex = -1;

  column.forEach(columnCell => {
    if (columnCell === null) {
      cellIndex++;
    }
  });

  if (cellIndex == -1) {
    return;
  }

  column[cellIndex] = this.state.redIsNext ? "Red" : "Yellow";
  cells[boardColumn] = column;
  let inserts = this.state.inserts + 1;

  this.setState({
    cells: cells,
    redIsNext: !this.state.redIsNext,
    inserts: inserts
  });

  return cellIndex;
}
