import Header from "../components/Header/Header"
import Sequencer from "../components/Sequencer/Sequencer"
import "./PlayerPage.scss";

const PlayerPage = () => {
  return (
    <div className="player">
      <header className="player-header">
        <Header />
        <a
            className="github-link"
            href="https://github.com/LandoMeowrissian/synapse-brainbeat"
          >
            github.com/LandoMeowrissian/synapse-brainbeat
          </a>
      </header>
      <main className="player-main">
      <Sequencer />

      </main>
    </div>
  )
}

export default PlayerPage;
