import React from "react";
/**
 * Render Cell jsx on Board
 * @return {a}
 */
const RefreshGameLink = ({ onClick }) => (
  <button className={"refresh-link"} onClick={onClick}>
    {"Play again"}
  </button>
);

export default RefreshGameLink;
