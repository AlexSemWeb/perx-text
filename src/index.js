import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

window.app = {
  start(props = {}) {
    const root = document.getElementById("root");
    const dealersArr = props.dealers ? props.dealers : [];

    ReactDOM.render(
      <Provider store={store}>
        <App dealers={dealersArr} />
      </Provider>,
      root
    );
  },
};
