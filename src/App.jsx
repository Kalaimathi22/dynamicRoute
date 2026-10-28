
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Search from "./Search";
import PostForm from "./PostForm";
import UpdatePost from "./pages/UpdatePost";
import NotFound from "./pages/NotFound";
import DeletePost from "./DeletePost";


function App() {
  return (
    <>
      <nav style={{ textAlign: "center", padding: "20px" }}>
        <NavLink to="/" end style={{ margin: "10px" }}>Home</NavLink>
        <NavLink to="/about" style={{ margin: "10px" }}>About</NavLink>
        <NavLink to="/contact" style={{ margin: "10px" }}>Contact</NavLink>
        <NavLink to="/user/101" style={{ margin: "10px" }}>User</NavLink>
        <NavLink to="/users" style={{ margin: "10px" }}>Users</NavLink>
        <NavLink to="/search" style={{ margin: "10px" }}>Search</NavLink>
        <NavLink to="/post-form" style={{ margin: "10px" }}>Submit Post</NavLink>
        <NavLink to="/update-post" style={{ margin: "10px" }}>Update Post</NavLink>
        <NavLink to="/delete-post" style={{ margin: "10px" }}>Delete Post</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/search" element={<Search />} />
        <Route path="/post-form" element={<PostForm />} />
        <Route path="/update-post" element={<UpdatePost />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/delete-post" element={<DeletePost />} />
      </Routes>

    </>
  );
}

export default App;
