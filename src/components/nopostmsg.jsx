const NoPostMsg = ({ setNewTab, onServerClick }) => {
  return (
    <div
      className="container py-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <div
        className="card text-center shadow-sm p-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="card-body">
          <h1 className="card-title mb-3">📭 No Posts Yet</h1>
          <p className="card-text text-muted">
            Looks like you haven't added any posts yet. Start by clicking the{" "}
            <strong>"Create Post"</strong> button and share something awesome!
          </p>
          <button
            onClick={() => setNewTab("CreatePosts")}
            className="btn btn-primary mt-3 d-block create-button"
          >
            Create Your First Post
          </button>

          <button
            onClick={onServerClick}
            className="btn btn-primary mt-3 d-block server-button"
          >
            Show Posts from Server
          </button>
        </div>
      </div>
    </div>
  );
};
export default NoPostMsg;
