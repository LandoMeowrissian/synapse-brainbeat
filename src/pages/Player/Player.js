import Header from "../../components/Header/Header";
import DrumGrid from "../../components/Drums/DrumGrid";
import SynthGrid from "../../components/Synth/SynthGrid";
import "./Player.scss";

const Player = () => {
  return (
    <section className="player">
      <Header />
      <main className="player-main">
        <div className="player-notes">
          <ul className="player-notes__list" >
            <li className="player-notes__list-item" >C</li>
            <li className="player-notes__list-item" >D</li>
            <li className="player-notes__list-item" >E</li>
            <li className="player-notes__list-item" >G</li>
            <li className="player-notes__list-item" >A</li>
            <li className="player-notes__list-item" >C</li>
          </ul>
        </div>

        <div className="synth-grid">
          <h2>synapse</h2>
          <SynthGrid />
        </div>
        <div className="player-notes" >
          <ul className="player-notes__list" >
            <li className="player-notes__list-item" >Kick</li>
            <li className="player-notes__list-item" >Snare</li>
            <li className="player-notes__list-item" >Hi-Hat</li>
            <li className="player-notes__list-item" >Tom1</li>
            <li className="player-notes__list-item" >Tom2</li>
            <li className="player-notes__list-item" >Tom3</li>
          </ul>
        </div>
        <div className="drum-grid">
          <h2>brainbeat</h2>
          <DrumGrid />
        </div>
      </main>
    </section>
  );
};

export default Player;
