import { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import ScenarioScreen from "./components/ScenarioScreen";

function App() {

  // state variables
  const [screen, setScreen] = useState("landing");
  const [selectedMission, setSelectedMission] = useState(null);

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
        onSelectMission={(mission) => {
          setSelectedMission=(mission);
          setScreen("game");
        }}
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