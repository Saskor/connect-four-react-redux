export default matches;

/**
 * Are there matches found?
 * @return {String}
 */

function matches(x, y, cells) {
  let width = cells.length;
  let height = cells[x].length;
  let player = cells[x][y]; //player ID
  let count = 0;

  // Vertical check
  //iterate over current column in all rows
  for (let i = 0; i < height; i++) {
    if (cells[x][i] === player) {
      count++;
    } else {
      count = 0;
    }
    if (count >= 4) {
      return player;
    }
  }
  count = 0;
  //Horizontal check
  //iterate over current row in all columns
  for (let i = 0; i < width; i++) {
    if (cells[i][y] === player) {
      count++;
    } else {
      count = 0;
    }
    if (count >= 4) {
      return player;
    }
  }
  count = 0;
  //diagonal check
  let xTopLeft;
  let yTopLeft;
  let xBottomLeft;
  let yBottomLeft;
  //defined top left begin of diagonal
  for (let col = x, row = y; col > -1 && row > -1; col--, row--) {
    if (col == 0 || row == 0) {
      xTopLeft = col;
      yTopLeft = row;
    }
  }
  //defined bottom left begin of diagonal
  for (let col = x, row = y; col > -1 && row < height; col--, row++) {
    if (col == 0 || row > height - 2) {
      xBottomLeft = col;
      yBottomLeft = row;
    }
  }

  //check to bottom right diagonal
  for (
    let col = xTopLeft, row = yTopLeft;
    col < width && row < height;
    col++, row++
  ) {
    //erly exit from loop if diagonal.length < 4 because
    //it locate in top right or bottom left corner of board
    if (xTopLeft > width - 4 || yTopLeft > height - 4) {
      break;
    }
    if (cells[col][row] === player) {
      count++;
    } else {
      count = 0;
    }
    if (count >= 4) {
      return player;
    }
  }
  count = 0;
  //check to top right diagonal
  for (
    let col = xBottomLeft, row = yBottomLeft;
    col < width && row > -1;
    col++, row--
  ) {
    //erly exit from loop if diagonal.length < 4 because
    //it locate in top left or bottom right corner of board
    if (xBottomLeft > width - 4 || yBottomLeft < 3) {
      break;
    }
    if (cells[col][row] === player) {
      count++;
    } else {
      count = 0;
    }
    if (count >= 4) {
      return player;
    }
  }
}
