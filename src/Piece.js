import './Piece.scss';

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

function Piece(props) {

    let player = props.piece.Player;
    let type = props.piece.Type;

    let className = '';
    let pieceType = '';
    let pieceImage = {};

    switch(player) {
        case 1:
            className = 'white piece';
            switch(type) {
                case 1:
                    pieceType = 'King';
                    pieceImage = {backgroundImage: 'url(' + require('./images/wKing.png') + ')'};
                    break;
                case 2:
                    pieceType = 'Queen';
                    pieceImage = {backgroundImage: 'url(' + require('./images/wQueen.png') + ')'};
                    break;
                case 3:
                    pieceType = 'Rook';
                    pieceImage = {backgroundImage: 'url(' + require('./images/wRook.png') + ')'};
                    break;
                case 4:
                    pieceType = 'Bishop';
                    pieceImage = {backgroundImage: 'url(' + require('./images/wBishop.png') + ')'};
                    break;
                case 5:
                    pieceType = 'Knight';
                    pieceImage = {backgroundImage: 'url(' + require('./images/wKnight.png') + ')'};
                    break;
                case 6:
                    pieceType = 'Pawn';
                    pieceImage = {backgroundImage: 'url(' + require('./images/wPawn.png') + ')'};
                    break;
                default:
                    pieceType = '';
            }
            break;
        case 2:
            className = 'black piece';
            switch(type) {
                case 1:
                    pieceType = 'King';
                    pieceImage = {backgroundImage: 'url(' + require('./images/bKing.png') + ')'};
                    break;
                case 2:
                    pieceType = 'Queen';
                    pieceImage = {backgroundImage: 'url(' + require('./images/bQueen.png') + ')'};
                    break;
                case 3:
                    pieceType = 'Rook';
                    pieceImage = {backgroundImage: 'url(' + require('./images/bRook.png') + ')'};
                    break;
                case 4:
                    pieceType = 'Bishop';
                    pieceImage = {backgroundImage: 'url(' + require('./images/bBishop.png') + ')'};
                    break;
                case 5:
                    pieceType = 'Knight';
                    pieceImage = {backgroundImage: 'url(' + require('./images/bKnight.png') + ')'};
                    break;
                case 6:
                    pieceType = 'Pawn';
                    pieceImage = {backgroundImage: 'url(' + require('./images/bPawn.png') + ')'};
                    break;
                default:
                    pieceType = '';
            }
            break;
        default:
            className = 'noPiece';
    }

    return (
        <div className={className}>
            <button className={pieceType} style={pieceImage}></button>
        </div>
    );
}

export {Piece, newPiece};
export default Piece;