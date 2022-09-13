import Cell from "./Cell";
// import { caculateWinner } from "./helpers";

function Board(props) {
    // console.log(props);

    // const show = () => {
    //     const cells = [null, null, null, "X", "X", "x", null, null, null];
    //     console.log(caculateWinner(cells))
    // }
    return ( 
        <div className="game-board">
            {props.cells.map((item ,index) => (
                <Cell key={index} value={item} onClick={() => props.onClick(index)}
                className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
                >

                </Cell>
            ))}
        </div>
     );
}

export default Board;