import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />

      <div id="challenges">
        <TimerChallenge title="Beginner's Luck" targetTime={1} />
        <TimerChallenge title="A Little Tricky" targetTime={5} />
        <TimerChallenge title="Time Tactician" targetTime={10} />
        <TimerChallenge title="Precision Player" targetTime={15} />
        <TimerChallenge title="The Challenger" targetTime={20} />
        <TimerChallenge title="Expert Estimator" targetTime={25} />
        <TimerChallenge title="Time Strategist" targetTime={30} />
        <TimerChallenge title="Time Master" targetTime={40} />
        <TimerChallenge title="Timing Virtuoso" targetTime={50} />
        <TimerChallenge title="Ultimate Timer" targetTime={60} />
      </div>
    </>
  );
}

export default App;
