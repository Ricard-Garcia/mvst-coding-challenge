import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";

import { HeaderProps } from "../../utils/types";

import Toggle from "react-toggle";

import Logo from "../../assets/images/logo.svg";

export default function Header({ handleTheme, isLight }: HeaderProps) {
  return (
    <header className="p- px-5 d-flex justify-content-between align-items-center">
      {/* MVST. logo */}
      <h3 className="m-0">MVST.</h3>
      {/* Theme switch */}

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
    </header>
  );
}
