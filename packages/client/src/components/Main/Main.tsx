import React from "react";

import { BsPlay } from "react-icons/bs";

export default function Main() {
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
        className="d-flex justify-content-center align-items-center bg-dark ft-light"
      >
        <BsPlay className="ft-medium me-2" />
        <p className="m-0">00:00:00</p>
      </button>
    </main>
  );
}
