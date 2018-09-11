export default matches;

/**
 * Are there matches found?
 * @return {String}
 */

function matches(x, y, cells) {
  //debugger;
  let width = cells.length;
  let height = cells[x].length;
  let player = cells[x][y]; //player ID
  let count = 0;

  // Vertical check
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
  let xMinTop;
  let yMinTop;
  let xMinBottom;
  let yMinBottom;
  //defined top left begin of diagonal
  for (let col = x, row = y; row > -1 && col > -1; row--, col--) {
    if (col < 1) {
      xMinTop = col;
      yMinTop = row;
    }
    if (row < 1) {
      xMinTop = col;
      yMinTop = row;
    }
  }
  //defined bottom left begin of diagonal
  for (let col = x, row = y; row < height && col > -1; row++, col--) {
    if (col < 1) {
      xMinBottom = col;
      yMinBottom = row;
    }
    if (row > height - 2) {
      xMinBottom = col;
      yMinBottom = row;
    }
  }

  //check to bottom right diagonal
  for (
    let col = xMinTop, row = yMinTop;
    row < height && col < width;
    row++, col++
  ) {
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
    let col = xMinBottom, row = yMinBottom;
    row < height && col < width;
    row--, col++
  ) {
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
