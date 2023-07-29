import './Board.scss';
import Square from './Square';

function Board(prop) {

    let rows = [];
    let squareNum = 1;

    for (let i = 8; i >= 1; i--) {
        let rowName = "row row"+i;
        let xPos = 1;
        rows.push(<div key={'row'+i} className={rowName}>
            <Square squareNumber={squareNum++} squareRow={i} pieces={prop.pieces} x={xPos++} y={i}/>
            <Square squareNumber={squareNum++} squareRow={i} pieces={prop.pieces} x={xPos++} y={i}/>
            <Square squareNumber={squareNum++} squareRow={i} pieces={prop.pieces} x={xPos++} y={i}/>
            <Square squareNumber={squareNum++} squareRow={i} pieces={prop.pieces} x={xPos++} y={i}/>
            <Square squareNumber={squareNum++} squareRow={i} pieces={prop.pieces} x={xPos++} y={i}/>
            <Square squareNumber={squareNum++} squareRow={i} pieces={prop.pieces} x={xPos++} y={i}/>
            <Square squareNumber={squareNum++} squareRow={i} pieces={prop.pieces} x={xPos++} y={i}/>
            <Square squareNumber={squareNum++} squareRow={i} pieces={prop.pieces} x={xPos++} y={i}/>
        </div>);
    }

    return (
    <div className="board-container">
        <div className="row-numbers">
            <label>1</label>
            <label>2</label>
            <label>3</label>
            <label>4</label>
            <label>5</label>
            <label>6</label>
            <label>7</label>
            <label>8</label>
        </div>
        <div className="board">
            {rows}
        </div>
        <div className="column-letters">
            <label>A</label>
            <label>B</label>
            <label>C</label>
            <label>D</label>
            <label>E</label>
            <label>F</label>
            <label>G</label>
            <label>H</label>
        </div>
    </div>
    );
  }
  
  export default Board;