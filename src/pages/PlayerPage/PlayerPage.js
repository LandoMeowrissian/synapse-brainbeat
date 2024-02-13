import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Sequencer from "../../components/Sequencer/Sequencer"
import "./PlayerPage.scss";

const PlayerPage = () => {
  return (
    <div className="player">
      <header className="player-header">
        <Header />
        
      </header>
      <main className="player-main">
      <Sequencer />

      </main>
      <Footer/>
    </div>
  )
}

export default PlayerPage;
