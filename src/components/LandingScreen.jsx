function LandingScreen({ onDrawCard }) {
  return (
    <div>
      <h1>☁︎ Cloud Builder</h1>

      <p>Welcome to Cloud Builder!</p>

      <button onClick={onDrawCard}>
        Draw a Card
      </button>

      <p>
        Choose the correct AWS services to deploy your architecture.
      </p>
    </div>
  );
}

export default LandingScreen;