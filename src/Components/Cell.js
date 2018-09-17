import classNames from "classnames";
import React from "react";
/**
 * Render Cell jsx on Board
 * @return {button}
 */
const Cell = ({ player, onClick }) => {
  let cellClasses = classNames({
    cell: true,
    "cell-red": player === "Red",
    "cell-yellow": player === "Yellow"
  });
  return <button className={cellClasses} onClick={onClick} />;
};

export default Cell;
