// import React from "react";
// import { Button, List, ListItem, ListItemText, Box } from "@mui/material";

// const FriendRequests = ({ friendRequests = [], setFriends, setFriendRequests }) => {
//   const handleAccept = async (requestId, senderId) => {
//     try {
//       const response = await fetch("http://localhost:5004/api/V1/friend-requests/accept", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ requestId }),
//       });
//       if (!response.ok) throw new Error("Failed to accept friend request");
//       const data = await response.json();

//       // Update states
//       setFriends((prev) => [...prev, data.newFriend]);
//       setFriendRequests((prev) => prev.filter((req) => req._id !== requestId));
//     } catch (error) {
//       console.error("Error accepting friend request:", error);
//     }
//   };

//   const handleReject = async (requestId) => {
//     try {
//       await fetch("http://localhost:5004/api/V1/friend-requests/reject", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ requestId }),
//       });

//       // Update states
//       setFriendRequests((prev) => prev.filter((req) => req._id !== requestId));
//     } catch (error) {
//       console.error("Error rejecting friend request:", error);
//     }
//   };

//   return (
//     <Box>
//       <List>
//         {friendRequests.length > 0 ? (
//           friendRequests.map((req) => (
//             <ListItem key={req._id}>
//               <ListItemText primary={req.senderName} />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleAccept(req._id, req.senderId)}
//               >
//                 Accept
//               </Button>
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 onClick={() => handleReject(req._id)}
//               >
//                 Reject
//               </Button>
//             </ListItem>
//           ))
//         ) : (
//           <ListItem>
//             <ListItemText primary="No friend requests" />
//           </ListItem>
//         )}
//       </List>
//     </Box>
//   );
// };

// export default FriendRequests;

import React, { useState, useEffect } from "react";
import { Button, List, ListItem, ListItemText, Box, Typography } from "@mui/material";

const FriendRequests = () => {
  // Define state for friend requests, friends list, and loading state
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch friend requests and friends list
  const fetchData = async () => {
    const userData = sessionStorage.getItem("user");
    let userId;

    try {
      const parsedData = JSON.parse(userData);
      userId = parsedData?.id;
    } catch (error) {
      console.error("Failed to parse user data from session storage:", error);
      return;
    }

    if (!userId) {
      console.error("User ID not found in session storage.");
      return;
    }

    try {
      // Fetch friend requests
      const friendRequestsResponse = await fetch(`http://localhost:5004/api/V1/friend-requests/${userId}`);
      if (!friendRequestsResponse.ok) throw new Error("Failed to fetch friend requests");
      const friendRequestsData = await friendRequestsResponse.json();
      setFriendRequests(friendRequestsData.friendRequests);

  //     // Fetch friends list
      // const friendsResponse = await fetch(`http://localhost:5004/api/V1/friend-requests/${userId}/friends`);
      // if (!friendsResponse.ok) throw new Error("Failed to fetch friends list");
      // const friendsData = await friendsResponse.json();
      // setFriends(friendsData.friends);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle accept friend request
  const handleAccept = async (requestId) => {
    try {
      const response = await fetch("http://localhost:5004/api/V1/friend-requests/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ friendRequestId: requestId }),
      });
      if (!response.ok) throw new Error("Failed to accept friend request");

      // Refetch data to reflect the changes
      await fetchData();
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  // Handle reject friend request
  const handleReject = async (requestId) => {
    try {
      const response = await fetch("http://localhost:5004/api/V1/friend-requests/reject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ friendRequestId: requestId }),
      });
      if (!response.ok) throw new Error("Failed to reject friend request");

      // Refetch data to reflect the changes
      await fetchData();
    } catch (error) {
      console.error("Error rejecting friend request:", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Friend Requests
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : friendRequests.length > 0 ? (
        <List>
          {friendRequests.map((req) => (
            <ListItem key={req.id}>
              <ListItemText primary={req.senderName} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAccept(req.id)}
              >
                Accept
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleReject(req.id)}
              >
                Reject
              </Button>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No friend requests</Typography>
      )}

      {/* Render friends list */}
      {/* <Typography variant="h6" gutterBottom>
        Your Friends
      </Typography> */}
      {/* {friends.length > 0 ? (
        <List>
          {friends.map((friend) => (
            <ListItem key={friend.id}>
              <ListItemText primary={`${friend.FullName} (@${friend.userName})`} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No friends yet</Typography>
      )} */}
    </Box>
  );
};

export default FriendRequests;
