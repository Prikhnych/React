import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.post}>
      My post
      <div className={s.post}>
        New post
        <div>
          <div>
            <textarea
              className={s.text_area}
              name=""
              id=""

            ></textarea>
            <button>Add Post</button>
            <button>Remove</button>
          </div>
          <div>
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
