import './PlayerArea.scss';

function PlayerArea() {
    return (
    <div className="playerAreas">
        <div className="p1">
            <div className="pHeader">
                <h2>Player 1</h2>
                <label className="clock1">20:00</label>
            </div>
            <div className="dungeon1"></div>
        </div>
        <div className="turnIndicator">
            <div className="upArrow"></div>
            <label>Turn</label>
            <div className="downArrow"></div>
        </div>
        <div className="p2">
            <div className="pHeader">
                <h2>Player 2</h2>
                <label className="clock2">20:00</label>
            </div>
            <div className="dungeon2"></div>
        </div>
    </div>
    );
  }
  
  export default PlayerArea;