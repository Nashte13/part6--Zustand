import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const mean = total === 0 ? 0 : total / 3;
  const positive = total === 0 ? 0 : ((good / total) * 100).toFixed(1);

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

export default Statistics;