import React from "react";
import ReactDOM from "react-dom";

// App component
import App from "./App";

import reportWebVitals from "./reportWebVitals";

// Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sass/main.scss";
import "react-toggle/style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
