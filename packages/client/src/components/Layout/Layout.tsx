import React, { useState } from "react";

// Utils
import { setTheme } from "../../utils/theme";
import { VoidFunction } from "../../utils/types";

// Styles
import "./Layout.scss";

// Components
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function Layout() {
  const [isLight, setIsLight] = useState<boolean>(true);
  const [primary, secondary] = setTheme(isLight);

  // Change theme
  const handleTheme: VoidFunction = () => {
    setIsLight(!isLight);
  };

  return (
    <div
      id="layoutComponent"
      className={`d-flex flex-column bg-${primary} ft-${secondary}`}
    >
      <Header handleTheme={handleTheme} isLight={isLight} />
      <Main isLight={isLight} />
    </div>
  );
}
