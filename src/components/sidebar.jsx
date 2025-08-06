import "./sidebar.css";

const Sidebar = ({ currentTab, setNewTab }) => {
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <div className="sidebar-header">
          <h2>Postify</h2>
        </div>
        <ul className="sidebar-nav">
          <li
            className={`sidebar-link ${currentTab === "Home" ? "active" : ""}`}
            onClick={() => setNewTab("Home")}
          >
            🏠 Home
          </li>
          <li
            className={`sidebar-link ${
              currentTab === "SeePosts" ? "active" : ""
            }`}
            onClick={() => setNewTab("SeePosts")}
          >
            📄 See Posts
          </li>
          <li
            className={`sidebar-link ${
              currentTab === "CreatePosts" ? "active" : ""
            }`}
            onClick={() => setNewTab("CreatePosts")}
          >
            ✍️ Create Post
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
