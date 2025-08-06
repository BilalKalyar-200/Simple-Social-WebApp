import "./homee.css";

const Homethingies = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Postify</h1>
      <p className="home-subtitle">
        Your one-stop platform to create, view, and manage amazing posts!
      </p>

      <div className="home-grid">
        <div className="feature-card">
          <h2>📬 Easy Posting</h2>
          <p>Quickly create and share posts with your audience.</p>
        </div>
        <div className="feature-card">
          <h2>📖 Seamless Browsing</h2>
          <p>Effortlessly browse through posts using our clean UI.</p>
        </div>
        <div className="feature-card">
          <h2>⚡ Fast & Secure</h2>
          <p>Built with speed and security in mind for all users.</p>
        </div>
      </div>

      <footer className="home-footer">&copy; 2025 Company, Inc</footer>
    </div>
  );
};

export default Homethingies;
