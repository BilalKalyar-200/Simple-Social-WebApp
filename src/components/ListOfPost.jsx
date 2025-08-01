import Post from "./Post";
import { Post_list } from "../store/postList-store";
import { useContext } from "react";

import styles from "./ListPost.module.css";

const ListPost = () => {
  const { postList } = useContext(Post_list);
  return (
    <div className={styles["post-grid"]}>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default ListPost;
