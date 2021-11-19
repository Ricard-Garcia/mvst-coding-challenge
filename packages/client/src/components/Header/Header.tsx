import React from "react";

// Utils
import { HeaderProps } from "../../utils/types";

// Components
import ThemeSwitch from "../../components/ThemeSwitch";
import Logo from "../../components/Logo";

export default function Header({ handleTheme, isLight }: HeaderProps) {
  return (
    <header className="p- px-5 d-flex justify-content-between align-items-center">
      {/* MVST. logo */}
      {/* <h3 className="m-0">MVST.</h3> */}
      <Logo isLight={isLight} />
      {/* Theme switch */}
      <ThemeSwitch handleTheme={handleTheme} />
    </header>
  );
}
