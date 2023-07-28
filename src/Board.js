import './Board.scss';

function Board() {
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
            <div className="row1">
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
            </div>
            <div className="row2">
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
            </div>
            <div className="row3">
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
            </div>
            <div className="row4">
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
            </div>
            <div className="row5">
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
            </div>
            <div className="row6">
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
            </div>
            <div className="row7">
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
            </div>
            <div className="row8">
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
                <div className="blackSquare"></div>
                <div className="whiteSquare"></div>
            </div>
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