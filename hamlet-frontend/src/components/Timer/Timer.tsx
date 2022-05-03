<<<<<<< HEAD
import React, { useState, useEffect } from "react";

type TimeProps = {
  mm : string
  ss : string
}

const Timer = ({ mm, ss } : TimeProps) => {
  const [minutes, setMinutes] = useState<string>(mm);
  const [seconds, setSeconds] = useState<string>(ss);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(String(parseInt(seconds) - 1));
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
            clearInterval(countdown);
        } else {
          setMinutes(String(parseInt(minutes) - 1));
          setSeconds('59');
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div>
      {minutes}:{parseInt(seconds) < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
=======
export {}
>>>>>>> 05c0232451d7cab136ca4ffbb73b49a03cffff15
