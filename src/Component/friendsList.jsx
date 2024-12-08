// import React from "react";
// import { Box, Typography, List, ListItem, ListItemText, Avatar } from "@mui/material";

// const FriendsList = ({ friends }) => {
//   return (
//     <Box p={2}>
//       <Typography variant="h6" gutterBottom>
//         Your Friends
//       </Typography>
//       {friends.length ? (
//         <List>
//           {friends.map((friend) => (
//             <ListItem key={friend._id}>
//               <Avatar src={friend.profilePicture || "/default-avatar.jpg"} alt={friend.fullName} />
//               <ListItemText
//                 primary={friend.fullName}
//                 secondary={`@${friend.userName}`}
//                 sx={{ ml: 2 }}
//               />
//             </ListItem>
//           ))}
//         </List>
//       ) : (
//         <Typography>No friends found.</Typography>
//       )}
//     </Box>
//   );
// };

// export default FriendsList;
import React, { useState, useEffect } from "react";
import { Box, Typography, List, ListItem, ListItemText, Avatar } from "@mui/material";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve user data from session storage
    const userData = sessionStorage.getItem("user");
    let userId;

    try {
      const parsedData = JSON.parse(userData);
      userId = parsedData?.id; // Extract the user ID
    } catch (error) {
      console.error("Failed to parse user data from session storage:", error);
    }

    if (!userId) {
      console.error("User ID not found in session storage.");
      setLoading(false);
      return;
    }

    // Define the async function to fetch friends
    const fetchFriends = async () => {
      try {
        const response = await fetch(`/api/V1/friend-requests/${userId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setFriends(data.friends);
      } catch (error) {
        console.error("Error fetching friends:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends(); // Call the async function
  }, []); // Empty dependency array, fetches once when the component mounts

  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Your Friends
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : friends.length ? (
        <List>
          {friends.map((friend) => (
            <ListItem key={friend.id}>
              <Avatar src={friend.profilePicture || "/default-avatar.jpg"} alt={friend.FullName} />
              <ListItemText
                primary={friend.FullName}
                secondary={`@${friend.userName}`}
                sx={{ ml: 2 }}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No friends found.</Typography>
      )}
    </Box>
  );
};

export default FriendsList;
