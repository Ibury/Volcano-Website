import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import {
  VolcanoProvider
} from "./context/VolcanoContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <VolcanoProvider>

    <App />

  </VolcanoProvider>

);
