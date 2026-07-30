import missions from "../data/missions";

function ScenarioScreen({ onStartMission }) {

    const mission = missions[0];

  return (
    <div>
      <h1>{mission.title}</h1>

      <p>{mission.description}</p>

      <button onClick={onStartMission}>
        Start Mission
      </button>
      
    </div>
  );
}

export default ScenarioScreen;