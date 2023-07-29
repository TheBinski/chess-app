import './Square.scss';
import Piece from './Piece';

function findPiece(pieces, x, y) {
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].Column === x && pieces[i].Row === y) {
            return pieces[i];
        }
    }

    return {};
}

function Square(props) {
    let classes = "" + props.squareNumber;
    let squareColor = 'errorSquare';

    if (props.squareRow%2 === 0) {
        squareColor = props.squareNumber%2 === 1 ? 'whiteSquare' : 'blackSquare';
    } else {
        squareColor = props.squareNumber%2 === 0 ? 'whiteSquare' : 'blackSquare';
    }
    classes += " " + squareColor + " " + props.x + props.y;

    let piece = findPiece(props.pieces, props.x, props.y);

    return (
        <div className={classes}>
            <Piece piece={piece}/>
        </div>
    );
}

export default Square;