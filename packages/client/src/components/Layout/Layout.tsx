import React from "react";

// Styles
import "./Layout.scss";

// Components
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function Layout() {
  return (
    <div id="layoutComponent" className="d-flex flex-column bg-light ft-dark">
      <Header />
      <Main />
    </div>
  );
}
