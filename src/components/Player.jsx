// useRef() Is Used to Store Mutable Values.

// whenever ref changes, the component function does not re-execute
// whenever state changes, the component function re-execute
// used when we don't want to update the UI - and don't wanto to re-execute when a component is re-executed

// useState() is used to manage a state that triggers a re-render when it changes
// while useRef() is used to store mutable values that do not trigger a re-render.

import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ""; // after setting player's name - the field will reset to null value
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
