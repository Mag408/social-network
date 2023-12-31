import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StateType, store } from "./redux/state";

export const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

store.subcribe(rerenderEntireTree);
