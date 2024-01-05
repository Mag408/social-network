import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { ActionsType, StateType } from "./redux/store ";
import { Store } from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

interface AppProps {
  store: Store;
}

const App: React.FC<AppProps> = (props) => {
  return (
    <div className="app-wrapp">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route
            path="/dialogs*"
            element={<DialogsContainer store={props.store} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
