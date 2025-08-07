# Postify — A Minimal Social Posting Web App

Postify is a modern, lightweight React app where users can create, view, and manage posts with a simple, beautiful UI. Focused on core functionality, it offers a clean experience for posting content with titles, bodies, hashtags, and user IDs.

---

## 🚀 Features

### ✅ Create Posts
- Add posts with a title, body, hashtags (comma-separated), and user ID.
- Built-in validation ensures all fields are required.
- Responsive form with visual feedback (success alert on submission).

### 📄 View Posts
- Instantly see newly created posts.
- Posts are shown in a responsive grid layout.
- Tags and reaction counts are clearly displayed.
- If no posts exist, fetch sample posts from an external API (`dummyjson.com`).

### 🗑️ Delete Posts
- Delete any post using a trash icon.

### 🔄 Server Integration
- One-click fetch for sample posts from the server.
- External posts are added via context-based state management.

### ⚛️ State Management
- Powered by React Context + `useReducer`.
- All post operations (add, delete, fetch) are centralized and scalable.

### 🧱 Component-Based Architecture
- Fully modular: each UI feature (Post, ListPost, CreatePost, etc.) is split into self-contained components.
- Icons (e.g., delete, like, read more) are handled using `react-icons`.

### 🧭 Navigation
- Sidebar navigation for switching between Home, See Posts, and Create Post.

### 🎨 UI/UX
- Designed using Bootstrap 5 + custom CSS modules.
- Fully responsive across desktop and mobile.
- Clean animations and hover interactions for an engaging user experience.

---

## 📁 Folder Structure

```

first-social-page/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CreatePost.css
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Homeee.jsx
│   │   ├── Homee.css
│   │   ├── ListPost.jsx
│   │   ├── ListPost.module.css
│   │   ├── NoPostMsg.jsx
│   │   ├── Post.jsx
│   │   ├── PostCreate.jsx
│   │   ├── Sidebar.jsx
│   │   └── Sidebar.css
│   ├── store/
│   │   └── postList-store.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js

````

---

## 🛠️ Technologies Used

- **React 19**
- **Bootstrap 5** + Bootstrap Icons
- **React Icons**
- **Vite** — lightning-fast dev server & build tool
- **ESLint** — for code linting
- **React Context + useReducer** — scalable global state management
- **DummyJSON API** — sample data for posts

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```
   git clone <your-repo-url>
   cd first-social-page


2. **Install dependencies:**

   ``
   npm install
   ```

3. **Run the app:**

   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173)

---

## 💡 Usage Guide

* **Home** → Shows welcome text and features.
* **Create Post** → Fill in all fields and submit to add a new post.
* **See Posts** → View all posts. If empty, you’ll be prompted to load sample posts from server.
* **Delete Post** → Click the trash icon on a post card.

---

## 📣 Future Improvements

* Save posts to `localStorage` or integrate with a backend
* Edit/update post functionality
* Add user authentication & session handling
* Better tag-based filtering and search
* Accessibility enhancements (keyboard nav, screen reader support)

---

## 🤝 Contributing

Pull requests are welcome! Here's how:

1. Fork the repo
2. Create a feature branch:

   ```
   git checkout -b feature/your-feature
   ```
3. Commit your changes:

   ```
   git commit -m "Add your feature"
   ```
4. Push the branch:

   ```
   git push origin feature/your-feature
   ```
5. Submit a pull request.

---

## 📜 License

MIT License — use it freely.

---

## Acknowledgements

* [React](https://react.dev/)
* [Bootstrap](https://getbootstrap.com/)
* [Vite](https://vitejs.dev/)
* [DummyJSON](https://dummyjson.com/)

---
