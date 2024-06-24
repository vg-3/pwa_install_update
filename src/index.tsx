import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./i18n.ts";
import Routes from "./components/Routes";
// import Routes from "./Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense>
      <Routes></Routes>
    </React.Suspense>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
