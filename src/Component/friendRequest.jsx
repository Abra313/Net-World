import React from "react";
import { Button, List, ListItem, ListItemText, Box } from "@mui/material";

const FriendRequests = ({ friendRequests = [], setFriends, setFriendRequests }) => {
  const handleAccept = async (requestId, senderId) => {
    try {
      const response = await fetch("http://localhost:5004/api/V1/friend-requests/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ requestId }),
      });
      if (!response.ok) throw new Error("Failed to accept friend request");
      const data = await response.json();

      // Update states
      setFriends((prev) => [...prev, data.newFriend]);
      setFriendRequests((prev) => prev.filter((req) => req._id !== requestId));
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  const handleReject = async (requestId) => {
    try {
      await fetch("http://localhost:5004/api/V1/friend-requests/reject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ requestId }),
      });

      // Update states
      setFriendRequests((prev) => prev.filter((req) => req._id !== requestId));
    } catch (error) {
      console.error("Error rejecting friend request:", error);
    }
  };

  return (
    <Box>
      <List>
        {friendRequests.length > 0 ? (
          friendRequests.map((req) => (
            <ListItem key={req._id}>
              <ListItemText primary={req.senderName} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAccept(req._id, req.senderId)}
              >
                Accept
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleReject(req._id)}
              >
                Reject
              </Button>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No friend requests" />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default FriendRequests;
