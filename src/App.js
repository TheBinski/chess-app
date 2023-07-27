import './App.scss';
import PlayerArea from './PlayerArea';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <div className="titleBar">
        <div className="titleBox">
          <label className="app-title">Chess</label>
        </div>
      </div>
      <div className="AppArea">
        <PlayerArea/>
        <Board/>
      </div>
    </div>
  );
}

export default App;
