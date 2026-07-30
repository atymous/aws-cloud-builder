import { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import ScenarioScreen from "./components/ScenarioScreen";

function App() {

  const [screen, setScreen] = useState("landing");

  // prop 1
  if (screen === "landing") {
    return (
      <LandingScreen
        onDrawCard={() => setScreen("scenario")}
      />
    );
  }

  // prop 2
  if (screen == "scenario") {
    return (
      <ScenarioScreen
        onStartMission={() => setScreen("game")}
      />
    );
  }
  
  //prop 3
  if (screen )
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