import './Square.scss';
import Piece from './Piece';

function Square(props) {
    let classes = "" + props.squareNumber;
    let squareColor = 'errorSquare';

    if (props.squareRow%2 === 0) {
        squareColor = props.squareNumber%2 === 1 ? 'whiteSquare' : 'blackSquare';
    } else {
        squareColor = props.squareNumber%2 === 0 ? 'whiteSquare' : 'blackSquare';
    }
    classes += " " + squareColor;

    return (
        <div className={classes}>
            <Piece/>
        </div>
    );
}

export default Square;