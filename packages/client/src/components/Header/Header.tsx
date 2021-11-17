import React from "react";

export default function Header() {
  return (
    <header className="p-4 d-flex justify-content-between align-items-center">
      {/* MVST. logo */}
      <p className="m-0">LOGO</p>
      {/* Theme switch */}
      <div id="switch">Switch</div>
    </header>
  );
}
