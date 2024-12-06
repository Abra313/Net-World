import React, { useState } from "react";
import { Box, TextField, Button, Avatar, Typography, List, ListItem, ListItemText } from "@mui/material";

const SearchUsers = ({ friends = [], pendingRequests = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchUsers = async () => {
    if (!searchTerm.trim()) return;
    try {
      const response = await fetch(`http://localhost:5004/api/V1/users/search?q=${searchTerm}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setSearchResults(data || []);
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };

  const handleAddFriend = async (userId) => {
    // Get current user's ID from sessionStorage
    const user = JSON.parse(sessionStorage.getItem("user"));
  
    if (!user || !user.id) {
      console.error("Sender ID is missing.");
      return;
    }
  
    const senderId = user.id; // Ensure senderId is properly retrieved
  
    try {
      const response = await fetch("http://localhost:5004/api/V1/friend-requests/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ senderId, receiverId: userId }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error sending friend request:", errorData.message);
        return;
      }
  
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
  };
  

  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Search Users
      </Typography>
      <Box display="flex" mb={2}>
        <TextField
          fullWidth
          label="Search for users"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button variant="contained" color="primary" onClick={searchUsers} sx={{ ml: 2 }}>
          Search
        </Button>
      </Box>
      <List>
        {searchResults.map((user) => (
          <ListItem key={user._id}>
            <Avatar src={user.profilePicture || "/default-avatar.jpg"} alt={user.fullName} />
            <ListItemText
              primary={user.fullName}
              secondary={`@${user.userName}`}
              sx={{ ml: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddFriend(user._id)}
            >
              Add Friend
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SearchUsers;
