import { useFeedbackStore } from "./store";


const App = () => {
  const { good, neutral, bad, incrementGood, incrementNeutral, incrementBad } = useFeedbackStore();

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incrementGood} text="good" />
      <Button onClick={incrementNeutral} text="neutral" />
      <Button onClick={incrementBad} text="bad" />

      <h1>statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
};
export default App;
