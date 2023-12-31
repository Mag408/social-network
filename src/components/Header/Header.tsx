import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        width={50}
        src="https://www.myconfinedspace.com/wp-content/uploads/2016/05/Southern-MAGA.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
