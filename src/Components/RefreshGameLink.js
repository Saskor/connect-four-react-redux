import React from "react";
export default RefreshGameLink;
/**
 * Render Cell jsx on Board
 * @return {a}
 */
function RefreshGameLink(props) {
  return (
    <button className={"refresh-link"} onClick={props.onClick}>
      {"Play again"}
    </button>
  );
}
