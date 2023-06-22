import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={setupStore({})}>
    <App />
  </Provider>
);
