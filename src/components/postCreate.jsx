import { Post_list } from "../store/postList-store";
import { useContext, useRef, useState } from "react";
import "./createPost.css";

const CreatePost = () => {
  const { addPost } = useContext(Post_list);
  const postTitle = useRef();
  const postBody = useRef();
  const postHashtags = useRef();
  const userID = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    //now extracting values from those elements that were entered by user
    const tempID = userID.current.value;
    const tempTitle = postTitle.current.value;
    const tempBody = postBody.current.value;
    const tempTags = postHashtags.current.value.split(",");
    if (!tempID || !tempTitle || !tempBody || tempTags.length === 0) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    addPost(tempID, tempTitle, tempBody, tempTags);

    setShowAlert(true);
    userID.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    postHashtags.current.value = "";
    setTimeout(() => setShowAlert(false), 3000);
  };
  return (
    <div className="create-post-container">
      <h2 className="create-heading">Create New Post</h2>

      {showAlert && (
        <div className="alert alert-success" role="alert">
          ✅ Post submitted successfully!
        </div>
      )}

      <form className="create-post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={postTitle}
          name="title"
          placeholder="Post Title"
          className="form-control mb-2"
        />
        <textarea
          name="body"
          ref={postBody}
          placeholder="Write your post here..."
          className="form-control mb-2"
        />
        <input
          type="text"
          name="hashtags"
          ref={postHashtags}
          placeholder="Hashtags (comma separated)"
          className="form-control mb-2"
        />
        <input
          type="text"
          name="userId"
          ref={userID}
          placeholder="Your User ID"
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary w-100">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
