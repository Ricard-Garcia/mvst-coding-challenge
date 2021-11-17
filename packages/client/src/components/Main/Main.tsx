import React from "react";
import { BsPlay } from "react-icons/bs";

// Utils
import { ThemeProp } from "../../utils/types";
import { setTheme } from "../../utils/theme";

export default function Main({ isLight }: ThemeProp) {
  const [primary, secondary] = setTheme(isLight);

  return (
    <main className="d-flex flex-column justify-content-center align-items-center pb-5">
      {/* Total time */}
      <h1 id="totalTime" className="ft-large">
        00:00:00
      </h1>
      {/* Button */}
      <button
        type="button"
        id="timeButton"
        className={`d-flex justify-content-center align-items-center bg-${secondary} ft-${primary}`}
      >
        <BsPlay className="ft-medium me-2" />
        <p className="m-0">00:00:00</p>
      </button>
    </main>
  );
}
