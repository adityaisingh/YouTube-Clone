import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    getSearchSuggestions();
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API);
    const json = await data.json();
    console.log(json);
    setSuggestion(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2   h-12 md:h-16  shadow-lg  w-[360px]    md:w-full overflow-hidden">
      <div className="flex flex-row col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        <img
          className="h-8 mx-2 cursor-pointer"
          alt="Youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>

      {/* Search Bar */}
      <div className="col-span-10">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 rounded-l-2xl py-1 px-3 border border-gray-700"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          // onFocus={() => setShowSuggestions(true)}
          // onBlur={() => setShowSuggestions(false)}
        />

        <button className=" p-1 rounded-r-lg">Search</button>
      </div>

      <div>
        <img
          className="h-8 col-span-1"
          alt="user icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
