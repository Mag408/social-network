import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
  isAuth: boolean;
  login: string | null;
  setUserData: (id: number, email: string, login: string) => void;
};

const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={classes.header}>
      <img
        width={50}
        src="https://www.myconfinedspace.com/wp-content/uploads/2016/05/Southern-MAGA.png"
        alt="logo"
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to="/login">"login"</NavLink>}
      </div>
    </header>
  );
};

export default Header;
