import React, { useState, useEffect } from "react";
import ComposePost from "../Component/ComposePost"; // Import ComposePost component
import StoryPost from "../Component/StoryPost"; // Ensure StoryPost is correctly imported
import Button from "../Component/Button";
import { FaArrowLeft } from "react-icons/fa";

const MainPage = () => {
  const [userId, setUserId] = useState(null); // User ID state, will be fetched
  const [friends, setFriends] = useState([]); // To store the user's friends
  const [stories, setStories] = useState([]); // To store uploaded stories
  const [image, setImage] = useState(null); // For the selected image
  const [uploading, setUploading] = useState(false); // Track upload status
  const [error, setError] = useState(null); // To store any upload errors

  useEffect(() => {
    // Fetch the current user information, including userId and friends
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5004/api/V1/user", {
          method: "GET",
          credentials: "include", // Ensure cookies are included if necessary
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch user data");
        }

        const data = await response.json();
        setUserId(data.userId); // Set the userId from the fetched data
        setFriends(data.friends || []); // Set friends list
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err.message || "Something went wrong while fetching user data.");
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (!userId) return; // Don't fetch stories if userId is not available

    // Fetch stories for the user and their friends
    const fetchStories = async () => {
      try {
        const response = await fetch(`http://localhost:5004/api/V1/stories`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, friendIds: friends }), // Send userId and friendIds in the body
          credentials: "include",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch stories");
        }

        const data = await response.json();
        setStories(data.stories || []); // Set stories of user and friends
      } catch (err) {
        console.error("Error fetching stories:", err);
        setError(err.message || "Something went wrong while fetching stories.");
      }
    };

    fetchStories();
  }, [userId, friends]); // Re-fetch when userId or friends list changes

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

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("media", image); // Use 'media' to match backend field name
    formData.append("userId", userId); // Use dynamic user ID
    formData.append("content", "New story upload"); // Optional content

    setUploading(true);
    setError(null); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5004/api/V1/stories", {
        method: "POST",
        body: formData, // Pass FormData directly
        credentials: "include", // Include cookies if authentication is required
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to upload story");
      }

      const data = await response.json();
      if (data?.story?.mediaUrl) {
        setStories((prevStories) => [...prevStories, data.story]); // Add uploaded story
        setImage(null); // Reset image input
      } else {
        throw new Error("Invalid image URL returned");
      }
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
          <h1 className="text-primary font-bold text-[1.5rem] ml-[10px]">Home</h1>
        </div>

        {/* Post Story Section */}
        <div className="mb-6">
          <h2 className="text-primary font-bold text-[1.2rem]">Post a Story</h2>
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

          {/* Display Uploaded Stories */}
          <div className="flex flex-wrap gap-2">
            {stories.length > 0 ? (
              stories.map((story, index) => (
                <StoryPost key={index} image={story.mediaUrl} />
              ))
            ) : (
              <div>No stories available</div>
            )}
          </div>
        </div>

        {/* Compose Post Section */}
        <div className="mb-6">
          <h2 className="text-primary font-bold text-[1.2rem]">Compose a Post</h2>
          <ComposePost
            onPostSubmit={(formData) => console.log("Post Submitted:", formData)}
            onPostLater={(formData) => console.log("Post Scheduled:", formData)}
          />
        </div>

        {/* Show uploading state */}
        {uploading && (
          <div className="text-center mt-4 text-primary font-bold">Uploading...</div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
