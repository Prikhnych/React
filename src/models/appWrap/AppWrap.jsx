import React from "react";
import classes from "./AppWrap.module.css";
import Header from "../header/Header";
import Nav from "../nav__bar/Nav";
import Futer from "../futer/Futer";
import Content from "../content/Content";

const AppWrap = () => {
  return (
    <div className="app__wrap">
      <Header />
      <Nav />
      <Content />
      <Futer />
    </div>
  );
};

export default AppWrap;
