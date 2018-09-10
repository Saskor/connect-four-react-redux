import React from "react";
import matches from "../CheckWinFunc/Matches";
import Cell from "./Cell";
import RefreshGameLink from "./RefreshGameLink";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(7).fill(Array(6).fill(null)),
      redIsNext: true,
      isActive: true,
      inserts: 0
    };
  }

  handleClick(x) {
    if (!this.state.isActive) {
      return;
    }
    const cells = this.state.cells.slice();
    const column = cells[x].slice();
    let cellIndex = -1;
    let winner = "";
    column.forEach(columnCell => {
      if (columnCell === null) {
        cellIndex++;
      }
    });
    if (cellIndex >= 0) {
      column[cellIndex] = this.state.redIsNext ? "Red" : "Yellow";
      cells[x] = column;
      winner = matches(x, cellIndex, cells);
      let inserts = this.state.inserts + 1;
      this.setState({
        cells: cells,
        redIsNext: !this.state.redIsNext,
        isActive: !winner,
        winner: winner,
        inserts: inserts
      });
    }
  }

  repeatGame() {
    this.setState({
      cells: Array(7).fill(Array(6).fill(null)),
      redIsNext: true,
      isActive: true
    });
  }

  render() {
    console.log(this.state.inserts);
    let status = "";
    let refreshGameLink = null;
    if (!this.state.isActive) {
      if (this.state.inserts >= 42) {
        status = `No one wins! `;
      } else {
        status = `${this.state.winner} wins! `;
      }
      refreshGameLink = <RefreshGameLink onClick={() => this.repeatGame()} />;
    } else {
      status = "Next player is: " + (this.state.redIsNext ? "Red" : "Yellow");
    }

    let boardCells = this.state.cells.map((column, x) => {
      return (
        <div className="column" key={`column-${x}`}>
          {column.map((cell, y) => {
            return (
              <Cell
                key={`cell-${x}-${y}`}
                player={this.state.cells[x][y]}
                onClick={() => this.handleClick(x)}
              />
            );
          })}
        </div>
      );
    });

    return (
      <div className={"game-board"}>
        <div className="board">{boardCells}</div>
        <h3 className="next-player-title">
          {status}
          {refreshGameLink}
        </h3>
      </div>
    );
  }
}
