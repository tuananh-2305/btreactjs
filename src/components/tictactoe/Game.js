import { useState } from "react";
import Board from "./Board";
import "./Game.Style.css";
import { caculateWinner } from "./helpers";

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))

    const [xIsNext , setXIsNext] = useState(true)
    const winner = caculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if ( winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? "X" : "O";
        
        setBoard(boardCopy);
        setXIsNext((xIsNext) => !xIsNext);
    }

    const handleResetGame = () => {
        setBoard(Array(9).fill(null))
    }

    return ( 
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            {winner &&
            <div className="game-winner">Winner is {winner}</div>}
            <button className="game-reset" onClick={handleResetGame}>Reset Game</button>
        </div>
     );
}

export default Game;