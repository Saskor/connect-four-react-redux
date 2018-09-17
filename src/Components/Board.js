import React from "react";
import matches from "../CheckWinFunc/Matches";
import Cell from "./Cell";
import RefreshGameLink from "./RefreshGameLink";
import addChip from "../actions/actions";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(7).fill(Array(6).fill(null)),
      redIsNext: true,
      inserts: 0,
      maxInserts: this.cells.length * this.cells[0].length,
      winner: ""
    };
  }

  handleClick(column) {
    if (this.state.winner || this.state.inserts >= this.state.maxInserts) {
      return;
    }
    const cellIndex = addChip(this.state.cells, column);
    if (cellIndex) {
      matches(column, cellIndex, this.state.cells);
    }
  }

  repeatGame() {
    this.setState({
      cells: Array(7).fill(Array(6).fill(null)),
      redIsNext: true,
      inserts: 0,
      winner: ""
    });
  }

  render() {
    let status = "";
    let refreshGameLink = null;
    if (!this.state.winner) {
      if (this.state.inserts >= this.state.maxInserts) {
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
