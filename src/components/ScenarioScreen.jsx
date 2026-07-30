function ScenarioScreen({ onStartMission }) {
  return (
    <div>
      <h1>🎴 Choose Your Mission</h1>

      <p>
        Your first challenge is waiting...
      </p>

      <button onClick={onStartMission}>
        Reveal Mission
      </button>
    </div>
  );
}

export default ScenarioScreen;