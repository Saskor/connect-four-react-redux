export default matches;

/**
 * Are there matches found?
 * @return {String}
 */

function matches(x, y, cells) {
  const width = cells.length;
  const height = cells[x].length;
  const player = cells[x][y]; //player ID
  let count = 0;

  // Vertical check
  for (let i = 0; i < width; i++) {
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
  for (let i = 0; i < height; i++) {
    if (cells[i][y] === player) {
      count++;
    } else {
      count = 0;
    }

    if (count >= 4) {
      return player;
    }
  }
  //diagonal check
  let xMinTop = 0;
  let yMinTop = 0;
  let xMinBottom = 0;
  let yMinBottom = 0;

  if (y > x) {
    yMinTop = y - x;
    yMinBottom = y + x;
  }
  if (x > y) {
    xMinTop = x - y;
    yMinBottom = x + y;
  }
  count = 0;
  //check to bottom right diagonal
  for (
    let col = xMinTop, row = yMinTop;
    row < height && col < width;
    row++, col++
  ) {
    if (cells[col][row] === player) {
      count++;
      if (count >= 4) return player;
    } else {
      count = 0;
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
      if (count >= 4) return player;
    } else {
      count = 0;
    }
  }
}
