import React, { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import PostService from "../API/PostService";
import MyBytton from "../components/UI/button/MyBytton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm/PostForm";
import useFetching from "../hooks/useFetching";
import PostFilter from "../components/PostFilter/PostFilter";
import Pagination from "../components/UI/pagination/Pagination";
import PostList from "../components/PostList/PostList";
import Loader from "../components/UI/loader/Loader";
import { getPageCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = React.useState([]);

  const [filter, setFilter] = React.useState({ sort: "", query: "" });
  const [modal, setModal] = React.useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll(limit, page);
    setPosts(posts.data);
    setTotalPages(getPageCount(posts.headers["x-total-count"], limit));
  });

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div style={{ width: "800px" }}>
      <MyBytton
        style={{ marginTop: "30px" }}
        onClick={() => setModal(true)}
      >
        Create post
      </MyBytton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost}></PostForm>
      </MyModal>
      <hr style={{ margin: "15px 0" }}></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      ></PostFilter>
      {postError && <h1 style={{ textAlign: "center" }}>Error: {postError}</h1>}
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader></Loader>
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Post List"
          remove={deletePost}
        ></PostList>
      )}

      <Pagination
        page={page}
        changePage={setPage}
        totalPages={totalPages}
      ></Pagination>
    </div>
  );
}

export default Posts;
