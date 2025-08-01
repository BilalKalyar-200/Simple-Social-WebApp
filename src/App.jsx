import "./App.css";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/postCreate";
import ListPost from "./components/ListOfPost";
import Homethingies from "./components/Homeee";
import { useState } from "react";
import PostListRenderer from "./store/postList-store";
function App() {
  const [currentTab, setNewTab] = useState("CreatePosts");

  return (
    <PostListRenderer>
      <div className="app-container">
        <Sidebar currentTab={currentTab} setNewTab={setNewTab} />
        <div className="HF-container">
          <Header />
          {currentTab === "Home" && <Homethingies />}
          {currentTab === "SeePosts" && <ListPost />}
          {currentTab === "CreatePosts" && <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListRenderer>
  );
}

export default App;
