import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.iteam}>
      <img
        src="https://www.shutterstock.com/image-photo/skeptic-surprised-cat-thinking-dont-260nw-1905929728.jpg"
        alt=""
      />
      <span> Post 1</span>
    </div>
  );
};

export default Post;
