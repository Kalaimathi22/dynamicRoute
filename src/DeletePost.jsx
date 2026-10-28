
import { useState } from "react";

function DeletePost() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ]);

  const deletePost = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      // Remove the post from the React state/list
      setPosts((currentPosts) =>
        currentPosts.filter((post) => post.id !== id)
      );

      console.log(`Post ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Delete a Post</h2>

      {posts.length === 0 ? (
        <p>No posts remaining.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{ margin: "15px" }}>
            <span>
              {post.id}. {post.title}
            </span>{" "}
            <button onClick={() => deletePost(post.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default DeletePost;
