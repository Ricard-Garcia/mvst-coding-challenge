import React, { useState, useEffect } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";

// Api
import { getTotalTime, updateTotalTime } from "../../api/time-api";

// Utils
import { ThemeProp } from "../../utils/types";
import { setTheme } from "../../utils/theme";
import { translateTime } from "../../utils/time";

// Components
import TimerButton from "../TimerButton";
import Spinner from "../Spinner";

export default function Main({ isLight }: ThemeProp) {
  // State
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalTime, setTotalTime] = useState<number>(0);

  // Theme colors
  const [primary, secondary] = setTheme(isLight);

  // Load total from database
  const loadTotalTime = async () => {
    // Start loading time
    setIsLoading(true);

    // Call to api
    const { data } = await getTotalTime();
    const databaseTotalTime = data.data[0].totalTime;
    setTotalTime(databaseTotalTime);

    // Done loading time
    setIsLoading(false);
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
        {/* Loading conditional */}

        {isLoading ? (
          <Spinner isLight={isLight} />
        ) : (
          <>
            <h1 id="totalTime" className="ft-large m-0">
              {translateTime(totalTime)}
            </h1>

            <button type="button" onClick={handleRefreshTotal}>
              <BsArrowCounterclockwise
                className={`ft-medium ft-${secondary}`}
              />
            </button>
          </>
        )}
      </div>
      {/* Timer button */}
      <TimerButton isLight={isLight} />
    </main>
  );
}
