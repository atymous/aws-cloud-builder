function MissionCard({ mission, onSelectMission }) {
    return (
        <div className="mission-card">
        
            <h2>{mission.title}</h2>

            <p>{mission.description}</p>

            <p>Difficulty: {mission.difficulty}</p>

            <button onClick={() => onSelectMission(mission)}>
                Select Mission
            </button>
        
        </div>
    );
}

export default MissionCard;