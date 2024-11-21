import React from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyBytton';

function PostForm({create}) {

  const [post, setPost] = React.useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...post
    }
    create(newPost)
    setPost({title: '', body: ''});
  }
  
  return (
    <form>
    <MyInput type="text" placeholder="Post title"
      value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}></MyInput>
    <MyInput type="text" placeholder="Post body" value={post.body} onChange={(e) => setPost({...post, body: e.target.value})}></MyInput>
    <MyButton onClick={addNewPost} type="submit">Create post</MyButton>
  </form>
  );
}

export default PostForm;
