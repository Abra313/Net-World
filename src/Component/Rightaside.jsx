import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import post1 from "../asset/images/post1.jpg";
import post2 from "../asset/images/post2.jpg";
import post3 from "../asset/images/post3.jpg";

const Rightaside = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
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

    const handleSearch = async (e) => {
        if (e.key === "Enter") {
            const token = localStorage.getItem("authToken");  // Retrieve token from localStorage (or sessionStorage)
            if (!token) {
                console.error("No token found");
                return;
            }

            try {
                const response = await fetch(`http://localhost:5004/api/V1/auth/search?q=${query}&page=1&limit=10`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer $ 746783tr8yrg826trgyg8jkbqeioidlmnasldkljvmkjdsncvmjo38988nmnmncxnmncyqeku747yewgfy8477tr2873t8rfgf8t4rtfehjbjiqehfhgiuwfgwugefwu2`,  // Include Bearer token for authorization
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch search results");
                }
                const data = await response.json();
                setResults(data.users); // Assuming the API returns a `users` array
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }
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
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </div>

            {/* Results Section */}
            <div className="mt-[10%] overflow-y-auto h-[50vh]">
                {results.length > 0 ? (
                    <div>
                        <h2 className="font-bold text-ashDark mt-[30px]">Results</h2>
                        <div className="flex flex-col gap-[20px] m-[10px]">
                            {results.map((user) => (
                                <div key={user._id} className="border-[1px] w-[302px] h-[100px] rounded-[5px] flex items-center p-[10px]">
                                    <img
                                        src={user.profilePicture || "default-profile.png"}
                                        alt={user.username}
                                        className="w-[50px] h-[50px] rounded-full border-[2px]"
                                    />
                                    <div className="ml-[10px]">
                                        <h3 className="font-bold text-[14px]">{user.fullName || "No Name"}</h3>
                                        <p className="text-[12px]">@{user.userName}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                                <div key={suggestion.id} className="border-[1px] w-[302px] h-[100px] rounded-[5px] flex items-center p-[10px]">
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
