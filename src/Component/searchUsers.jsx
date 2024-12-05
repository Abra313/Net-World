// import React, { useState } from "react";

// const SearchUsers = ({ friends = [], pendingRequests = [] }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   // Get current user's ID from sessionStorage
//   const getCurrentUserId = () => {
//     const user = JSON.parse(sessionStorage.getItem("user"));
//     return user ? user.id : null;
//   };

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Perform user search
//   const searchUsers = async () => {
//     if (!searchTerm.trim()) return;
//     try {
//       const response = await fetch(`http://localhost:5004/api/V1/users/search?q=${searchTerm}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//       });
//       if (!response.ok) throw new Error(`Error: ${response.status}`);
//       const data = await response.json();
//       setSearchResults(data || []);
//     } catch (error) {
//       console.error("Error searching users:", error);
//     }
//   };

//   // Add friend request
//   const handleAddFriend = async (userId) => {
//     const user = JSON.parse(sessionStorage.getItem("user"));

//     if (!user || !user.id) {
//       console.error("Sender ID is missing.");
//       return;
//     }

//     const senderId = user.id;

//     try {
//       const response = await fetch("http://localhost:5004/api/V1/friend-requests/send", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify({ senderId, receiverId: userId }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Error sending friend request:", errorData.message);
//         return;
//       }

//       const data = await response.json();
//       console.log(data.message);

//       // Update UI to reflect the pending state
//       setSearchResults((prevResults) =>
//         prevResults.map((user) =>
//           user._id === userId ? { ...user, hasPendingRequest: true } : user
//         )
//       );
//     } catch (error) {
//       console.error("Error sending friend request:", error);
//     }
//   };

//   // Determine button text based on user relationship status
//   const getButtonText = (userId) => {
//     if (friends.some((friend) => friend._id === userId)) {
//       return "Already Friends";
//     }
//     if (pendingRequests.some((request) => request.senderId === userId || request.receiverId === userId)) {
//       return "Request Sent";
//     }
//     return "Add Friend";
//   };

//   return (
//     <div className="p-4">
//       <h2 className="font-bold text-lg mb-4">Search Users</h2>
//       <div className="flex mb-4">
//         <input
//           type="text"
//           placeholder="Search for users..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="flex-1 border px-3 py-2 rounded-l"
//         />
//         <button
//           onClick={searchUsers}
//           className="bg-blue-500 text-white px-4 py-2 rounded-r"
//         >
//           Search
//         </button>
//       </div>
//       <div>
//         {searchResults.length > 0 ? (
//           searchResults.map((user) => (
//             <div key={user._id} className="flex items-center gap-4 mb-4">
//               <img
//                 src={user.profilePicture || "/default-avatar.jpg"}
//                 alt={user.userName}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-bold">{user.FullName}</p>
//                 <p className="text-sm">@{user.userName}</p>
//               </div>
//               {getButtonText(user._id) === "Add Friend" ? (
//                 <button
//                   onClick={() => handleAddFriend(user._id)}
//                   className="px-3 py-1 bg-blue-500 text-white rounded"
//                 >
//                   {getButtonText(user._id)}
//                 </button>
//               ) : (
//                 <span className="text-gray-500 text-sm">{getButtonText(user._id)}</span>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No users found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchUsers;
