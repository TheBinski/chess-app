import './App.scss';
import PlayerArea from './PlayerArea';
import Board from './Board';
import {newPiece} from './Piece';

function initializePieces() {
  let array = [];
  let piece = {};
  
  for (let j = 1; j < 3; j++) {
    let pieceType = 6;
    let pieceName = 'Pawn';

     // Pawns
    for (let i = 1; i <= 8; i++) {
      let x = i;
      let y = 2;

      if (j === 2) {
        y += 5;
      }

      piece = newPiece(j, pieceName, pieceType, x, y);
      array.push(piece);
    }

    // Back row Pieces
    for (let i = 1; i <= 8; i++) {
      let x = i;
      let y = 1;

      if (j === 2) {
        y += 7;
      }

      switch(i) {
        case 1:
        case 8: 
          pieceType = 3;
          pieceName = 'Rook';
          break;
        case 2:
        case 7:
          pieceType = 5;
          pieceName = 'Knight';
          break;
        case 3:
        case 6:
          pieceType = 4;
          pieceName = 'Bishop';
          break;
        case 4:
          pieceType = 2;
          pieceName = 'Queen';
          break;
        case 5:
          pieceType = 1;
          pieceName = 'King';
          break;
        default: 
          pieceType = -1;
          pieceName = 'ERROR';
      }

      piece = newPiece(j, pieceName, pieceType, x, y);
      array.push(piece);
    }
  }
  
  return array;
}

function App() {

  let pieces = initializePieces();

  return (
    <div className="App">
      <div className="titleBar">
        <div className="titleBox">
          <label className="app-title">Chess</label>
        </div>
      </div>
      <div className="AppArea">
        <PlayerArea/>
        <Board pieces={pieces}/>
      </div>
    </div>
  );
}

export default App;
