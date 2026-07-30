import { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import ScenarioScreen from "./components/ScenarioScreen";

function App() {

  const [screen, setScreen] = useState("landing");
  if (screen === "landing") {
    return (
      <LandingScreen
        onDrawCard={() => setScreen("scenario")}
      />
    );
  }

  if (screen == "scenario") {
    return (
      <ScenarioScreen
        onStartMission={() => setScreen("game")}
      />
    );
  }
  
  return (
    <div>
      <h1> ☁︎ Game Screen </h1>

      <p>
        The puzzle board will go here!
      </p>

    </div>
  );
}

export default App;