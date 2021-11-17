import React from "react";

// Utils
import { ThemeProp } from "../../utils/types";

// Components
import TimerButton from "../TimerButton";

export default function Main({ isLight }: ThemeProp) {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center pb-5">
      {/* Total time */}
      <h1 id="totalTime" className="ft-large">
        00:00:00
      </h1>
      {/* Timer button */}
      <TimerButton isLight={isLight} />
    </main>
  );
}
