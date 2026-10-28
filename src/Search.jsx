
import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch posts using Axios with error handling
  const fetchPosts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError(
        "Failed to load data. Please check your internet connection."
      );
    } finally {
      setLoading(false);
    }
  };

  // Load posts when the component opens
  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Search Posts</h1>

      <input
        type="text"
        placeholder="Type here to search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          maxWidth: "90%",
          fontSize: "16px",
        }}
      />

      {loading && <p>Loading posts...</p>}

      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={fetchPosts} disabled={loading}>
            {loading ? "Retrying..." : "Retry"}
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <h3>Search Results: {filteredPosts.length}</h3>

          {filteredPosts.length === 0 ? (
            <p>No results found.</p>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  margin: "10px 0",
                }}
              >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
}

export default Search;
