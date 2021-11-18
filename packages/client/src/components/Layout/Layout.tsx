import React, { useState, useEffect } from "react";

// Utils
import { setTheme } from "../../utils/theme";
import { VoidFunction } from "../../utils/types";
import { setLocalStorage, getLocalStorage } from "../../utils/localStorage";

// Styles
import "./Layout.scss";

// Components
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function Layout() {
  // State
  const [isLight, setIsLight] = useState<boolean>(true);

  // Theme colors
  const [primary, secondary] = setTheme(isLight);

  // Change theme
  const handleTheme: VoidFunction = () => {
    setIsLight(!isLight);
    setLocalStorage("isLight", String(isLight));
  };

  // If set, get localStorage on load
  useEffect(() => {
    if (getLocalStorage("isLight")) {
      const localStorageTheme = getLocalStorage("isLight");
      setIsLight(JSON.parse(localStorageTheme));
    }
  }, []);

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
