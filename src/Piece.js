/* 
/ Players: Empty == 0, White == 1, Black == 2
/ Types: 
/ 0 == Empty square
/ 1 == King
/ 2 == Queen
/ 3 == Rook
/ 4 == Bishop
/ 5 == Knight
/ 6 == Pawn
*/

function newPiece(player, name, type, column, row) {
        return {
            Player: player,
            PieceName: name,
            Type: type,
            Column: column,
            Row: row,
        };
    }

function Piece( player, type ) {

    let className = '';
    let pieceType = '';

    switch(player) {
        case 1:
            className = 'white-piece';
            break;
        case 2:
            className = 'black-piece';
            break;
        default:
            className = '';
    }

    switch(type) {
        case 1:
            pieceType = 'King';
            break;
        case 2:
            pieceType = 'Queen';
            break;
        case 3:
            pieceType = 'Rook';
            break;
        case 4:
            pieceType = 'Bishop';
            break;
        case 5:
            pieceType = 'Knight';
            break;
        case 6:
            pieceType = 'Pawn';
            break;
        default:
            pieceType = '';
    }

    return (
        <div className={className}>
            <div className={pieceType}></div>
        </div>
    );
}

export {Piece, newPiece};
export default Piece;