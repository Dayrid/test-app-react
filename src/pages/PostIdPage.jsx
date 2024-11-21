import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, commentsLoading, commentsError] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPostId(params.id);
      setComments(response.data);
    }
  );
  const params = useParams();
  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);
  return (
    <div>
      <h1>You opened post with id {params.id}</h1>
      {isLoading && <Loader />}
      {error && <h1>Post not found</h1>}
      <div>
        {post?.id}. {post?.title}
      </div>
      <h1>Comments:</h1>
      {commentsLoading && <Loader />}
      {commentsError || (!comments && <h1>Comments not found</h1>)}
      {comments &&
        comments.map((comment) => (
          <div
            key={comment.id}
            style={{ marginTop: 15 }}
          >
            <h5>{comment.email}</h5>
            <div>{comment.body}</div>
          </div>
        ))}
    </div>
  );
};

export default PostIdPage;
