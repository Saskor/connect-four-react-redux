import classNames from "classnames";
import React from "react";
export default Cell;
/**
 * Render Cell jsx on Board
 * @return {button}
 */
function Cell(props) {
  let cellClasses = classNames({
    cell: true,
    "cell-red": props.player === "Red",
    "cell-yellow": props.player === "Yellow"
  });
  return <button className={cellClasses} onClick={props.onClick} />;
}
