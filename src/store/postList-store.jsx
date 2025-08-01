import { createContext, useReducer } from "react";

export const Post_list = createContext({
  postList: [],
  deletePost: () => {},
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
        user_id: tempID,
        reactions: 10,
        tags: tempTags,
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
        deletePost,
      }}
    >
      {children}
    </Post_list.Provider>
  );
};
export default PostListRenderer;
const temp_post_list = [
  // {
  //   id: "1",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
  // {
  //   id: "2",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
  // {
  //   id: "3",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
  // {
  //   id: "4",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
  // {
  //   id: "5",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
  // {
  //   id: "6",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
  // {
  //   id: "7",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
  // {
  //   id: "8",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
  // {
  //   id: "9",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
  // {
  //   id: "10",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
  // {
  //   id: "11",
  //   title: "Hello, this is bilal in picture",
  //   body: "This guy is a CS student currently waiting for 5th semester",
  //   user_id: "10",
  //   reactions: 10,
  //   tags: ["student", "studying"],
  // },
];
