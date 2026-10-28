
import { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();

      console.log("Server response:", data);
      alert("Form submitted successfully!");

      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Submit a Post</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Post Title:</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />
        </div>

        <br />

        <div>
          <label>Post Description:</label>
          <br />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post description"
            required
          />
        </div>

        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Post"}
        </button>
      </form>
    </div>
  );
}

export default PostForm;
