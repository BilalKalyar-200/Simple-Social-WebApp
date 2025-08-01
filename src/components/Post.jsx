import { useContext } from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Post_list } from "../store/postList-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(Post_list);
  return (
    <div className="card post-card shadow-lg border-0 mb-4">
      <div className="card-header text-white">
        {post.title}
        {
          <span onClick={() => deletePost(post.id)}>
            <MdDelete
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}
            />
          </span>
        }
      </div>

      <div className="card-body" style={{ backgroundColor: "#fdfdfd" }}>
        <p className="card-text text-dark" style={{ fontSize: "0.95rem" }}>
          {post.body}
        </p>
        <div className="mb-2">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="badge bg-gradient me-2"
              style={{ backgroundColor: "#adb5bd", cursor: "pointer" }}
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="text-danger fw-semibold">
            <FaHeart style={{ marginRight: "5px" }} />
            {post.reactions}
          </div>

          <a
            href="#"
            className="btn btn-outline-dark btn-sm d-flex align-items-center"
          >
            Read More <FaArrowRight style={{ marginLeft: "6px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
