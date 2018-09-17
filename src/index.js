import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import appReducer from "./reducers/appReducer";
import "./index.css";
import Game from "./components/Game";

const store = createStore(appReducer);

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("root")
);

module.hot.accept("./reducers/appReducer", () => {
  const rootReducer = require("./reducers/appReducer");
  store.replaceReducer(rootReducer);
});
