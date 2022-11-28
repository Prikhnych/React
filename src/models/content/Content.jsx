import React from "react";
import s from  "./Content.module.css";

const Content = () => {
  return (
    <div className={s.content}>
      <img className={s.content__img} src="-#" alt="" />
    </div>
  );
};

export default Content;
