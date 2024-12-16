import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from '@mui/material';

import FriendsList from "../../Component/friendsList";
import FriendRequests from "../../Component/friendRequest";
import SearchUsers from "../../Component/searchUser";

const FriendsPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const friends = []; // Mock friends list
  const pendingRequests = []; // Mock pending requests

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Friends" />
        <Tab label="Friend Requests" />
        <Tab label="Search" />
      </Tabs>
      <Box p={2}>
        {tabIndex === 0 && <FriendsList friends={friends} />}
        {tabIndex === 1 && (
          <FriendRequests
            pendingRequests={pendingRequests}
            onAccept={(id) => console.log(`Accepted request ${id}`)}
            onReject={(id) => console.log(`Rejected request ${id}`)}
          />
        )}
        {tabIndex === 2 && <SearchUsers />}
      </Box>
    </Box>
  );
};

export default FriendsPage;
