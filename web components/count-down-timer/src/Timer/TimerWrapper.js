import { useState } from "react";
import Timer from ".";

const TimerWrapper = ({ duration, onExpired }) => {
  const [hasExpired, setExpired] = useState(false);

  const onExpiredHelper = () => {
    onExpired && onExpired();
    setExpired(true);
  };

  const restartHandler = () => {
    setExpired(false);
  };

  return !hasExpired ? (
    <Timer duration={duration} onExpired={onExpiredHelper} />
  ) : (
    <button onClick={restartHandler}>Restart Timer</button>
  );
};
export default TimerWrapper;
