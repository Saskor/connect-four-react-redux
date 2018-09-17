import React from "react";
import Cell from "./Cell";
import RefreshGameLink from "./RefreshGameLink";

const Board = ({
  cells,
  draw,
  winner,
  redIsNext,
  addChip,
  checkWinnerOrDraw,
  refreshOnClick
}) => {
  let status = "";
  let refreshGameLink = null;
  if (draw || winner) {
    refreshGameLink = <RefreshGameLink onClick={() => refreshOnClick()} />;
    if (draw) {
      status = `No one wins! `;
    }
    if (winner) {
      status = `${winner} wins! `;
    }
  } else {
    status = "Next player is: " + (redIsNext ? "Red" : "Yellow");
  }

  let boardCells = cells.map((column, x) => {
    return (
      <div className="column" key={`column-${x}`}>
        {column.map((cell, y) => {
          return (
            <Cell
              key={`cell-${x}-${y}`}
              player={cell}
              onClick={() => {
                addChip(x);
                checkWinnerOrDraw();
              }}
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
};

export default Board;
