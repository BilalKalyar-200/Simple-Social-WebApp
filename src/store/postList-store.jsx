import { createContext, useReducer } from "react";

export const Post_list = createContext({
  postList: [],
  deletePost: () => {},
  addServerPosts: () => {},
  addPost: () => {},
});

const postList_reducer = (currPostList, action) => {
  let temp_post_list = currPostList;
  if (action.type === "delete_post") {
    temp_post_list = currPostList.filter(
      (post) => post.id !== action.payload.p
    );
  } else if (action.type === "add_post") {
    temp_post_list = [action.payload, ...currPostList];
  } else if (action.type === "add_server_posts") {
    temp_post_list = action.payload.posts;
  }
  return temp_post_list;
};

const PostListRenderer = ({ children }) => {
  const [postList, listDispatcher] = useReducer(postList_reducer, []);

  const addPost = (tempID, tempTitle, tempBody, tempTags) => {
    listDispatcher({
      type: "add_post",
      payload: {
        id: Date.now(),
        title: tempTitle,
        body: tempBody,
        tags: tempTags,
        reactions: 10,
        user_id: tempID,
      },
    });
  };

  const addServerPosts = (posts) => {
    listDispatcher({
      type: "add_server_posts",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (p) => {
    listDispatcher({
      type: "delete_post",
      payload: {
        p,
      },
    });
  };

  return (
    <Post_list.Provider
      value={{
        postList,
        addPost,
        addServerPosts,
        deletePost,
      }}
    >
      {children}
    </Post_list.Provider>
  );
};
export default PostListRenderer;
