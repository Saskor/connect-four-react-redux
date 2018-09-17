/**
 * add chip to available cell in boardColumn
 * of boardCells
 * @return {void}
 */

function addChip(
  boardCells,
  boardColumn,
  redIsNext,
  lastInserts,
  lastChipPosition
) {
  const cells = boardCells.slice();
  const column = cells[boardColumn].slice();
  let cellIndex = -1;

  column.forEach(columnCell => {
    if (columnCell === null) {
      cellIndex++;
    }
  });

  if (cellIndex == -1) {
    return {
      cells: boardCells,
      redIsNext: redIsNext,
      inserts: lastInserts,
      lastChipPosition: lastChipPosition
    };
  }

  column[cellIndex] = redIsNext ? "Red" : "Yellow";
  cells[boardColumn] = column;
  let inserts = lastInserts + 1;

  return {
    cells: cells,
    redIsNext: !redIsNext,
    inserts: inserts,
    lastChipPosition: { x: boardColumn, y: cellIndex }
  };
}

export default addChip;
