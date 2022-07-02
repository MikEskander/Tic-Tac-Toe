import React from "react";
import "./index.css";

function Cell(props) {
  return (
    <td>
      <button onClick={() => props.onClick()}>{props.value}</button>
    </td>
  );
}
export default Cell;
