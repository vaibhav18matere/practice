import { useState, useEffect } from "react";

// values in miliseconds :
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const Timer = ({ duration, onExpired }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    // break condition

    if (time <= 0) {
      onExpired && onExpired();
      clearTimeout(timerId);
    }

    //clean up

    return () => {
      clearTimeout(timerId);
    };
  }, [time, onExpired]);

  const getFormatedTime = (time) => {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
  };

  return getFormatedTime(time);
};

export default Timer;
