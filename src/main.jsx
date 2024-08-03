import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import { ResultContext } from "./context/ResultContext/ResultContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ResultContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ResultContext>
);
