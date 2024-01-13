import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { Store } from "redux";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import { UsersContainer } from "./components/Users/UsersContainer";

interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  return (
    <div className="app-wrapp">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
