import Post from "./Post";
import { Post_list } from "../store/postList-store";
import { useContext } from "react";
import NoPostMsg from "./nopostmsg";
import styles from "./ListPost.module.css";

const ListPost = ({ setNewTab }) => {
  const { postList, addServerPosts } = useContext(Post_list);
  const handleServerClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data.posts); // <- DEBUG
        addServerPosts(data.posts); // assuming this is an array
      });
  };

  if (!postList || postList.length === 0) {
    return (
      <NoPostMsg setNewTab={setNewTab} onServerClick={handleServerClick} />
    );
  } else {
    return (
      <div className={styles["post-grid"]}>
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
};
export default ListPost;
