import React, { useState, useEffect } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";

// Utils
import { ThemeProp } from "../../utils/types";
import { setTheme } from "../../utils/theme";
import { translateTime } from "../../utils/time";

// Components
import TimerButton from "../TimerButton";

export default function Main({ isLight }: ThemeProp) {
  // State
  const [totalTime, setTotalTime] = useState<number>(0);

  // Theme colors
  const [primary, secondary] = setTheme(isLight);

  // Load total from database
  const loadTotalTime = (): number => {
    // call to api
    // setTotalTime(totalTimeDB)
    return 0;
  };

  const handleRefreshTotal = (): void => {
    console.log("Refreshed total!");
    // setTotalTime(1000);
  };

  // Mount state
  useEffect(() => {
    loadTotalTime();
  }, []);

  return (
    <main className="d-flex flex-column justify-content-center align-items-center pb-5">
      {/* Total time */}
      <div
        id="totalTimeWrapper"
        className="d-flex flex-column align-items-center"
      >
        <h1 id="totalTime" className="ft-large m-0">
          {translateTime(totalTime)}
        </h1>
        <button type="button" onClick={handleRefreshTotal}>
          <BsArrowCounterclockwise className={`ft-medium ft-${secondary}`} />
        </button>
      </div>
      {/* Timer button */}
      <TimerButton isLight={isLight} />
    </main>
  );
}
