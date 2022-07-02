import React, { useState } from "react";
import Cell from "./Cell";
import "./index.css";

function TicTacToe() {
  const [cell, setCell] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const winner = checkForWinner(cell);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Player Turn: " + (turn ? "X" : "O");
  }

  function restartGame() {
    setCell(Array(9).fill(null));
    setTurn(true);
  }

  function dispWinner() {
    if (winner) {
      return <button onClick={() => restartGame()}> Restart</button>;
    } else {
      return null;
    }
  }

  function returnCell(i) {
    return <Cell onClick={() => handleClick(i)} value={cell[i]} />;
  }

  function handleClick(i) {
    const cells = cell.slice();
    if (cells[i] === null) {
      cells[i] = turn ? "X" : "O";
      setCell(cells);
      setTurn(!turn);
    } else {
      alert("MOVE HAS BEEN MADE, CANNOT OVERRIDE");
    }
  }

  function checkForWinner(cells) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (cells[a] && cells[a] === cells[b] && cells[c] === cells[a]) {
        return cells[a];
      }
    }
    return null;
  }

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <table>
        <tbody>
          <tr>
            {returnCell(0)}
            {returnCell(1)}
            {returnCell(2)}
          </tr>
          <tr>
            {returnCell(3)}
            {returnCell(4)}
            {returnCell(5)}
          </tr>
          <tr>
            {returnCell(6)}
            {returnCell(7)}
            {returnCell(8)}
          </tr>
        </tbody>
      </table>
      {status}
      <div>{dispWinner()}</div>
    </div>
  );
}
export default TicTacToe;
