import { useState } from "react";
import { useFeedbackStore } from "./store";

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}


const Statistics = ({ good, neutral, bad, total, mean, positive }) => {
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
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const mean = total === 0 ? 0 : total / 3;
  const positive = total === 0 ? 0 : ((good / total) * 100).toFixed(1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        mean={mean}
        positive={positive}
      />
    </div>
  );
};
export default App;
