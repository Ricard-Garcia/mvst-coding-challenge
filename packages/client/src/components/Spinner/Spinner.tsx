import React from "react";

// Utils
import { ThemeProp } from "../../utils/types";
import { setTheme } from "../../utils/theme";

export default function Spinner({ isLight }: ThemeProp) {
  // Theme colors
  const [primary, secondary] = setTheme(isLight);

  return <div className={`spinner-grow ft-${secondary}`} />;
}
