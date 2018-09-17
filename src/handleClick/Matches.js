export default matches;

/**
 * Iterates over row, column, and two crossed diagonals
 * where last chip was added
 * for find four chips with same color
 * and define winner color.
 * @return {String}
 */

function matches(x, y, cells) {
  let width = cells.length;
  let height = cells[x].length;
  let player = cells[x][y]; //player ID
  let winner =
    verticalCheck(x, cells, height, player) ||
    horizontalCheck(y, cells, width, player) ||
    diagonalCheck(x, y, width, height, cells, player);
  if (winner) {
    this.setState({
      winner: winner
    });
  }
}

// Vertical check
//iterate over current column in all rows
//current column it's column where last chip was added
function verticalCheck(x, cells, height, player) {
  let count = 0;
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
}
//Horizontal check
//iterate over current row in all columns
//current row it's row where last chip was added
function horizontalCheck(y, cells, width, player) {
  let count = 0;
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
}
//Diagonal check
//iterate over two crossed diagonals
//where last chip was added
function diagonalCheck(x, y, width, height, cells, player) {
  let count = 0;
  let xTopLeft;
  let yTopLeft;
  let xBottomLeft;
  let yBottomLeft;
  //find top left begin of first diagonal
  for (let col = x, row = y; col > -1 && row > -1; col--, row--) {
    if (col == 0 || row == 0) {
      xTopLeft = col;
      yTopLeft = row;
    }
  }
  //find bottom left begin of second diagonal
  for (let col = x, row = y; col > -1 && row < height; col--, row++) {
    if (col == 0 || row > height - 2) {
      xBottomLeft = col;
      yBottomLeft = row;
    }
  }
  //check first diagonal from top left to bottom right
  for (
    let col = xTopLeft, row = yTopLeft;
    col < width && row < height;
    col++, row++
  ) {
    //erly exit from loop if diagonal.length < 4 because
    //it locate in top right or bottom left corners of board
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
  //check second diagonal from bottom left to top right
  for (
    let col = xBottomLeft, row = yBottomLeft;
    col < width && row > -1;
    col++, row--
  ) {
    //erly exit from loop if diagonal.length < 4 because
    //it locate in top left or bottom right corners of board
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
