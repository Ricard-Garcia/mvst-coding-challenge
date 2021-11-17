import React from "react";
import Toggle from "react-toggle";
import { BsSun, BsMoon } from "react-icons/bs";

// Utils
import { VoidFunctionProp } from "../../utils/types";

// Styles
import "./ThemeSwitch.scss";

export default function ThemeSwitch({ handleTheme }: VoidFunctionProp) {
  return (
    <div id="switchWrapper">
      <Toggle
        // id="customSwitch"
        defaultChecked={false}
        className="custom-switch d-flex align-items-center"
        icons={{
          checked: <BsSun className="ft-dark" />,
          unchecked: <BsMoon className="ft-light" />,
        }}
        onChange={handleTheme}
      />
    </div>
  );
}
