import missions from "../data/missions";
import MissionCard from "./MissionCard";

function ScenarioScreen({ onSelectMission }) {

    // const mission = missions[0];

  return (
    <div>
        <h1>Choose Your Mission</h1>
        <div className="mission-list">
            {missions.map((mission) => (
                <MissionCard
                    key={mission.id}
                    mission={mission}
                    onSelectMission={onSelectMission}
                 />
            ))}
        </div>
    </div>
  );
}

export default ScenarioScreen;