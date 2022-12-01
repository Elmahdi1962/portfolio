import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";

// app
import App from "./App";

// fonts
import "./fonts/Roboto_Mono/static/RobotoMono-Regular.ttf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
