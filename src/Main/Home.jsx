import React, { useState } from "react";
import StoryPost from "../Component/StoryPost"; // Ensure StoryPost is correctly imported
import Button from "../Component/Button";
import { FaArrowLeft } from "react-icons/fa";

const MainPage = () => {
  const [image, setImage] = useState(null); // For the selected image
  const [stories, setStories] = useState([]); // To store uploaded stories
  const [uploading, setUploading] = useState(false); // Track upload status
  const [error, setError] = useState(null); // To store any upload errors

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type (accept only images)
      if (!file.type.startsWith("image/")) {
        setError("Please upload a valid image file.");
        return;
      }

      setError(null); // Clear any previous errors
      setImage(file);
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("media", image); // Use 'media' to match backend field name
    formData.append("userId", "67478e25cc56e881c485dc4c"); // Replace with dynamic user ID if needed
    formData.append("content", "New story upload"); // Optional content

    setUploading(true);
    setError(null); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5004/story", {
        method: "POST",
        body: formData, // Pass FormData directly
        credentials: "include", // Include cookies if authentication is required
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to upload story");
      }

      const data = await response.json();
      // Assuming `data.story.mediaUrl` contains the URL of the uploaded media
      setStories((prevStories) => [...prevStories, data.story.mediaUrl]);
      setImage(null); // Reset image input
    } catch (err) {
      console.error("Upload Error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="m-[0]">
      <div className="m-[10px] max-sm:mt-[20%]">
        {/* Header */}
        <div className="flex items-center gap-[45%] mb-[10px]">
          <FaArrowLeft
            className="text-primary font-bold text-[1.5rem] ml-[10px] cursor-pointer max-sm:hidden"
          />
          <h1 className="text-primary font-bold text-[1.5rem] ml-[10px]">
            Home
          </h1>
        </div>

        {/* Story upload section */}
        <div className="flex gap-[5px] w-[99%] m-[10px] overflow-y-auto max-sm:ml-[0]">
          {/* File input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="bg-primary text-white w-[80px] h-[90px] flex justify-center text-center font-bold rounded-[5px]"
          />

          {/* Selected image preview and upload button */}
          {image && (
            <div className="flex flex-col items-center gap-[5px]">
              <StoryPost image={URL.createObjectURL(image)} />
              <Button
                onClick={handleUpload}
                className={`w-[120px] ${uploading ? "bg-gray-500" : "bg-primary"}`}
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload Story"}
              </Button>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && <div className="text-red-500">{error}</div>}

        {/* Display uploaded stories */}
        <div className="flex flex-wrap gap-2">
          {stories.map((story, index) => (
            <StoryPost key={index} image={story} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
