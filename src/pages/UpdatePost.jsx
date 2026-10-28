
import { useState } from "react";

function UpdatePost() {
  const [title, setTitle] = useState("Updated Post Title");
  const [body, setBody] = useState("This post has been updated!");

  const updatePost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            title: title,
            body: body,
            userId: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update post");
      }

      const data = await response.json();
      console.log("Updated Post:", data);
      alert("Post updated successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Update Existing Post</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      <br /><br />

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter post body"
      />

      <br /><br />

      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}

export default UpdatePost;
