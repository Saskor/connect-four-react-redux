import React from "react";
import Board from "./Board";

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <h3 className="header">Connect four</h3>
        <Board />
      </div>
    );
  }
}
