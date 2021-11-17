import React, { useState } from "react";
import { BsPlay, BsPause } from "react-icons/bs";

// Utils
import { ThemeProp, VoidFunction } from "../../utils/types";
import { setTheme } from "../../utils/theme";

export default function TimerButton({ isLight }: ThemeProp) {
  const [isCounting, setIsCounting] = useState<boolean>(false);

  const [primary, secondary] = setTheme(isLight);

  //   Start/stop counting
  const handleCount: VoidFunction = () => {
    setIsCounting(!isCounting);
  };

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
      <p className="m-0">00:00:00</p>
    </button>
  );
}
