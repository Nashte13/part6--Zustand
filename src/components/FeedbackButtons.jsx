import { useFeedbackStore } from "./store";

const FeedbackButtons = () => {
  const { incrementGood, incrementNeutral, incrementBad } = useFeedbackStore();

  return (
    <>
      <Button onClick={incrementGood} text="good" />
      <Button onClick={incrementNeutral} text="neutral" />
      <Button onClick={incrementBad} text="bad" />
    </>
  );
};

export default FeedbackButtons;
