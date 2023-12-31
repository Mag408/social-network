import React from "react";
import classes from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/dialogs"
        >
          Messanges
        </NavLink>
      </div>
      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Setting</a>
      </div>
    </nav>
  );
};

export default NavBar;
