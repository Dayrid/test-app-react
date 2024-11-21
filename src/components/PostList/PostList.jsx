import React from "react";
import PostItem from "../PostItem/PostItem";
import styles from "./PostList.module.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Posts not found</h1>;
  }
  return (
    <div className={styles.post_list}>
      <h1 stlye={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              post={post}
              number={index + 1}
              key={post.id}
              remove={remove}
            ></PostItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
