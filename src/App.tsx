import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  return (
    <div className="app-wrapp">
      <HeaderContainer />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:id?" element={<ProfileContainer />} />
          <Route path="/dialogs*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
