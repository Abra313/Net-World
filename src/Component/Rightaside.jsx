import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import post1 from "../asset/images/post1.jpg";
import post2 from "../asset/images/post2.jpg";
import post3 from "../asset/images/post3.jpg";

const Rightaside = () => {
    const [query, setQuery] = useState(""); // Search query
    const [results, setResults] = useState([]); // Search results
    const [allResults, setAllResults] = useState([]); // Store all results for "See All" functionality
    const [showAll, setShowAll] = useState(false); // Track if "See All" is clicked
    const [suggestions, setSuggestions] = useState([
        {
            id: 1,
            name: "Abraham Olaoluwa",
            username: "AbrahamOlaoluwa",
            profilePicture: post1,
        },
        {
            id: 2,
            name: "Abraham Taiwo",
            username: "AbrahamTaiwo",
            profilePicture: post2,
        },
        {
            id: 3,
            name: "Abraham Kehinde",
            username: "AbrahamKehinde",
            profilePicture: post3,
        },
    ]);

    // Fetch search results from the backend API
    const searchUsers = async (query) => {
        if (query.length > 2) { // Only search if the query length is greater than 2 characters
            try {
                const response = await fetch(`http://localhost:5004/api/V1/users/search?q=${query}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include', // Ensure cookies are sent with the request
                });

                const data = await response.json();
                if (Array.isArray(data) && data.length > 0) {
                    setAllResults(data); // Store all results for "See All"
                    setResults(data.slice(0, 3)); // Display first 3 results
                } else {
                    setResults([]);
                    setAllResults([]);
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
                setResults([]);
                setAllResults([]);
            }
        } else {
            setResults([]);
            setAllResults([]);
        }
    };

    // Trigger search on input change
    useEffect(() => {
        if (query) {
            searchUsers(query);
        } else {
            setResults([]); // Clear results if the search query is empty
            setAllResults([]);
        }
    }, [query]);

    const handleSeeAll = () => {
        setShowAll(true); // Show all results
        setResults(allResults); // Display all results
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            // Trigger search when Enter key is pressed
            searchUsers(query);
        }
    };

    // Utility to get the first letter of the FullName if no profile picture
    const getProfileInitial = (fullName) => {
        return fullName ? fullName.charAt(0).toUpperCase() : "";
    };

    return (
        <div className="w-[18%] h-[100vh] border-l-[0] flex flex-col p-[10px] mt-[3.5%] fixed ml-[82%] max-sm:hidden">
            {/* Search Bar */}
            <div className="flex border-[1px] h-[51px] rounded-[4px] mt-[30px] items-center p-[10px] space-x-[4px]">
                <CiSearch />
                <input
                    type="text"
                    placeholder="Search"
                    className="outline-none border-0 w-full"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} // Set query on input change
                    onKeyDown={handleKeyDown} // Trigger search on Enter key press
                />
            </div>

            {/* Results Section */}
            <div className="mt-[10%] overflow-y-auto h-[50vh]">
                {results.length > 0 ? (
                    <div>
                        <h2 className="font-bold text-ashDark mt-[30px]">Results</h2>
                        <div className="flex flex-col gap-[20px] m-[10px]">
                            {results.map((user) => (
                                <div
                                    key={user._id}
                                    className="border-[1px] w-[302px] h-[100px] rounded-[5px] flex items-center p-[10px]"
                                >
                                    {user.profilePicture ? (
                                        <img
                                            src={user.profilePicture}
                                            alt={user.userName}
                                            className="w-[50px] h-[50px] rounded-full border-[2px]"
                                        />
                                    ) : (
                                        <div
                                            className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-300 text-white font-bold"
                                        >
                                            {getProfileInitial(user.FullName)}
                                        </div>
                                    )}
                                    <div className="ml-[10px]">
                                        <h3 className="font-bold text-[14px]">
                                            {user.FullName || ""}
                                        </h3>
                                        <p className="text-[12px]">@{user.userName}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Show "See All" if there are more than 3 results */}
                        {allResults.length > 3 && !showAll && (
                            <button
                                className="text-blue-500 mt-4"
                                onClick={handleSeeAll}
                            >
                                See All
                            </button>
                        )}
                    </div>
                ) : (
                    query && (
                        <p className="text-gray-500 mt-[20px]">
                            No results found for "<span className="font-bold">{query}</span>"
                        </p>
                    )
                )}

                {/* Suggestions Section */}
                {!query && (
                    <div>
                        <h2 className="font-bold text-ashDark mt-[30px]">Suggestions</h2>
                        <div className="flex flex-col gap-[20px] m-[10px]">
                            {suggestions.map((suggestion) => (
                                <div
                                    key={suggestion.id}
                                    className="border-[1px] w-[302px] h-[100px] rounded-[5px] flex items-center p-[10px]"
                                >
                                    <img
                                        src={suggestion.profilePicture}
                                        alt={suggestion.username}
                                        className="w-[50px] h-[50px] rounded-full border-[2px]"
                                    />
                                    <div className="ml-[10px]">
                                        <h3 className="font-bold text-[14px]">{suggestion.name}</h3>
                                        <p className="text-[12px]">@{suggestion.username}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rightaside;
