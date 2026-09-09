import FeedbackButtons from './components/FeedbackButtons';
import { useFeedbackStore } from './store';

const App = () => {
  const { good, neutral, bad } = useFeedbackStore();

  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackButtons />
      

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
