import React, { useEffect, useState } from "react";
import { Button, List, ListItem, ListItemText, Box } from "@mui/material";

const FriendRequests = ({ setFriends, setFriendRequests }) => {
  const [friendRequests, setFriendRequestsState] = useState([]);

  // Get the logged-in user's ID from the cookie (you can use a cookie parsing library)
  const getUserIdFromCookie = () => {
    const match = document.cookie.match(/userId=([^;]+)/);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const userId = getUserIdFromCookie();

    if (userId) {
      // Fetch friend requests and friends list
      fetch(`http://localhost:5004/api/V1/friend-requests/${userId}`, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setFriendRequestsState(data.friendRequests);
          setFriends(data.friends);
        })
        .catch((error) => console.error("Error fetching friend requests:", error));
    }
  }, []);

  const handleAccept = async (requestId) => {
    const userId = getUserIdFromCookie();
    if (!userId) return;

    try {
      const response = await fetch("http://localhost:5004/api/V1/friend-requests/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ friendRequestId: requestId }),
      });

      if (!response.ok) throw new Error("Failed to accept friend request");

      const data = await response.json();

      // Update states
      setFriendRequestsState((prev) => prev.filter((req) => req._id !== requestId));
      setFriends((prev) => [...prev, data.newFriend]);
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  const handleReject = async (requestId) => {
    const userId = getUserIdFromCookie();
    if (!userId) return;

    try {
      await fetch("http://localhost:5004/api/V1/friend-requests/reject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ friendRequestId: requestId }),
      });

      // Update states
      setFriendRequestsState((prev) => prev.filter((req) => req._id !== requestId));
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
                onClick={() => handleAccept(req._id)}
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
