import "./Board.scss";

const Board = () => {
  return (
    <div className="main">
      <h1>brainBeat</h1>
      <div className="sfx-bar"></div>
     
      <div className="grid">
        <div id="row1" className="row">
          <input id="play" type="checkbox" className="play" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
        </div>
        <div id="row2" className="row">
          <input id="play" type="checkbox" className="play" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
        </div>
        <div id="row3" className="row">
          <input id="play" type="checkbox" className="play" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
        </div>
        <div id="row4" className="row">
          <input id="play" type="checkbox" className="play" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
        </div>
        <div id="row5" className="row">
          <input id="play" type="checkbox" className="play"/>
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
          <input type="checkbox" className="pad" />
        </div>
      </div>
    </div>
  );
};

export default Board;
