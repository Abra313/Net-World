import React, { useState } from "react";
import { FaImage, FaCalendarAlt, FaSmile, FaVideo, FaPoll } from "react-icons/fa"; // Import necessary icons

const ComposePost = ({ onPostSubmit, onPostLater }) => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Handle post submission
  const handlePostSubmit = () => {
    if (!text && !file) return alert("Post content cannot be empty!");

    // Prepare post data
    const formData = new FormData();
    formData.append("text", text);
    if (file) {
      formData.append("file", file);
    }

    // Call the parent's onPostSubmit function
    onPostSubmit(formData);

    // Reset fields
    setText("");
    setFile(null);
  };

  // Handle "Post Later" action
  const handlePostLater = () => {
    if (!text && !file) return alert("Post content cannot be empty!");

    // Prepare post data
    const formData = new FormData();
    formData.append("text", text);
    if (file) {
      formData.append("file", file);
    }

    // Call the parent's onPostLater function
    onPostLater(formData);

    // Reset fields
    setText("");
    setFile(null);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {/* Textarea for post content */}
      <textarea
        className="w-full p-2 border rounded-md focus:outline-primary"
        placeholder="Compose new post"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Action buttons */}
      <div className="flex items-center justify-between mt-4">
        {/* Icons Section */}
        <div className="flex items-center gap-4">
          {/* Image Upload Icon */}
          <label className="cursor-pointer">
            <FaImage className="text-gray-600 text-xl hover:text-primary" />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Video Icon */}
          <button className="cursor-pointer">
            <FaVideo className="text-gray-600 text-xl hover:text-primary" />
          </button>

          {/* Poll Icon */}
          <button className="cursor-pointer">
            <FaPoll className="text-gray-600 text-xl hover:text-primary" />
          </button>

          {/* Emoji/Smile Icon */}
          <button className="cursor-pointer">
            <FaSmile className="text-gray-600 text-xl hover:text-primary" />
          </button>

          {/* Calendar Icon for Post Later */}
          <button onClick={handlePostLater} className="cursor-pointer">
            <FaCalendarAlt className="text-gray-600 text-xl hover:text-primary" />
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={handlePostSubmit}
          className="px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary-dark"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default ComposePost;
