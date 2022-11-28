import React from "react";
import Background from '../Background/Background.jsx'
import Profaile from "../Profaile/Profaile";
import s from "./Content.module.css";

const Content = () => {
  return (
    <div className={s.content}>
      <Background/>
      <Profaile />

      {/* <img className={s.content__img} src="-#" alt="" /> */}
    </div>
  );
};

export default Content;
