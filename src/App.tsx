import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { ActionsType, StateType } from "./redux/state";

interface AppProps {
  appState: StateType;
  dispatch: (action: ActionsType) => void;
}

const App: React.FC<AppProps> = (props) => {
  return (
    <div className="app-wrapp">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePageState={props.appState.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs*"
            element={<Dialogs dialogsPageState={props.appState.dialogsPage} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
