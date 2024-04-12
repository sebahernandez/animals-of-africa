import React from "react";
import ReactDOM from "react-dom/client";
import PixabayContext from "./context/PixabayContext";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PixabayContext>
      <App />
    </PixabayContext>
  </React.StrictMode>
);
