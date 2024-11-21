import React from "react";
import styles from "./PostItem.module.scss";
import MyBytton from "../UI/button/MyBytton";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post, number, remove }) => {
  const router = useNavigate();
  return (
    <div className={styles.post}>
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className={styles.post__btns}>
        <MyBytton
          onClick={() => router(`/posts/${post.id}`)}
          style={{ border: "1px solid blue" }}
        >
          Open
        </MyBytton>
        <MyBytton
          onClick={() => remove(post)}
          style={{ border: "1px solid red" }}
        >
          Delete
        </MyBytton>
      </div>
    </div>
  );
};

export default PostItem;
