import { useFeedbackStore } from "./store";

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};


const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const mean = total === 0 ? 0 : total / 3
  const positive = total === 0 ? 0 : ((good / total) * 100).toFixed(1)

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
        <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={mean} />
            <StatisticLine text="positive" value={positive + "%"} />
        </tbody>
    </table>
  );
};

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
