import React, { useState, useEffect } from "react";
import { BsPlay, BsPause } from "react-icons/bs";

// Utils
import { ThemeProp, VoidFunction } from "../../utils/types";
import { setTheme } from "../../utils/theme";
import { translateTime } from "../../utils/time";

export default function TimerButton({ isLight }: ThemeProp) {
  // State
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  // Variables
  const oneSecond: number = 1000;

  // Theme colors
  const [primary, secondary] = setTheme(isLight);

  //   Start/stop counting
  const handleCount: VoidFunction = () => {
    // Starting
    if (!isCounting) {
      setIsCounting(true);
    }
    // Stopping
    else {
      setIsCounting(false);
    }
  };

  // Update count
  useEffect(() => {
    // Updating after first second
    if (isCounting && count !== 0) {
      setTimeout(() => {
        setCount(count + oneSecond);
      }, oneSecond);
    }
    // Adding first seccond
    else if (isCounting) {
      setTimeout(() => {
        setCount(count + oneSecond);
      }, oneSecond);
    }
    // Reset count
    else {
      setCount(0);
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
      <p className="m-0">{translateTime(count)}</p>
    </button>
  );
}
