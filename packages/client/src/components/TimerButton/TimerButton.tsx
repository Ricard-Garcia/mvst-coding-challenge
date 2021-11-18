import React, { useState, useEffect } from "react";
import { BsPlay, BsPause } from "react-icons/bs";

// Utils
import { ThemeProp, VoidFunction, TimeType } from "../../utils/types";
import { setTheme } from "../../utils/theme";
import { translateTime } from "../../utils/time";

export default function TimerButton({ isLight }: ThemeProp) {
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [count, setCount] = useState<TimeType>({
    start: 0,
    stop: 0,
    current: 0,
  });

  const [primary, secondary] = setTheme(isLight);

  //   Start/stop counting
  const handleCount: VoidFunction = () => {
    // Starting
    if (!isCounting) {
      setIsCounting(true);
      const start: number = Date.now();
      setCount({ ...count, start: start });
    }
    // Stopping
    else {
      setIsCounting(false);
      const stop: number = Date.now();
      setCount({ ...count, stop: stop });
    }
  };

  // Update count
  useEffect(() => {
    if (isCounting) {
      setTimeout(() => {
        setCount({
          ...count,
          current: count.current + 1,
        });
      }, 1000);
      console.log(count.current);
    } else {
      const resultantTime: number = count.stop - count.start;
      translateTime(resultantTime);
    }
  }, [isCounting, count]);

  return (
    <button
      type="button"
      id="timeButton"
      className={`d-flex justify-content-center align-items-center bg-${secondary} ft-${primary}`}
      onClick={handleCount}
    >
      {/* Conditionally render play/pause */}
      {isCounting ? (
        <BsPause className="ft-medium me-2" />
      ) : (
        <BsPlay className="ft-medium me-2" />
      )}
      <p className="m-0">{count.current}</p>
    </button>
  );
}
