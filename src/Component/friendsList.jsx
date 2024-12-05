import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Avatar } from "@mui/material";

const FriendsList = ({ friends }) => {
  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Your Friends
      </Typography>
      {friends.length ? (
        <List>
          {friends.map((friend) => (
            <ListItem key={friend._id}>
              <Avatar src={friend.profilePicture || "/default-avatar.jpg"} alt={friend.fullName} />
              <ListItemText
                primary={friend.fullName}
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
