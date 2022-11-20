import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Header.module.css";

const Logo = () => {
  return (
    <NavLink to={"/home"} className={s.logo}>
      Moviee
    </NavLink>
  );
};

export default Logo;
