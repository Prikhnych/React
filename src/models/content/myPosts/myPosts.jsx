import React from "react";
import s from './myPosts.module.css'



const myPosts = () => {
  return (
    <div>
      My post 
      <div>
        New post 
        <div className={s.post}>
          <div className={s.iteam}>
            Post 1
          </div>
          <div
          className={s.iteam}>
            Post 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default myPosts;