import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getSearchQuery, toggleMenue } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

function Head() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenueHandler = () => {
    dispatch(toggleMenue());
  };

  return (
    <div className="flex justify-between m-2 p-2 shadow-md">
      <div className="flex gap-5">
        <img
          onClick={() => toggleMenueHandler()}
          className="h-8 cursor-pointer"
          alt="menue"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8jHyAAAAD4+PgSCw3v7++5ubmvr6+AgICIh4idnJ11dHQPBwn19fX7+/vc29yWlZXPzs4YExSPjo7Ix8fCwcEwLS6mpqYdGxw8Ozs2NDVPTk5HRUYmIyMKBwZBQEC4cw/6AAABMklEQVR4nO3cS27CQBAFQBsbDMb4h4kJhOT+t4zYR1m10hGqusHTjHoW89RFAQAAAAAAAAAAQJp+afJcTqFZlnKTad4FZhneujJTXS5hWfp1k5qlLDdj2E077dPDHLdRYao2Pcw5bgZM1zk1yxw5AarmmjvN2sjh3E/tPs84xT40RV/l6WOjAAAAAAAAAK9nGg95xiXyV7Nq3uc6z3xbA7+bh0edW2qoX6oIFFc3eaki0D84mbiKVjHcumtmlvoxhWUp+t197vLMH01oeWZY2zzrpD0DAAAAAAAA/O60zRO82uB0OR/zHHZhlYbiud4kd4dGfQ5MM83J203quO0m1ZheNzkoAv2kb9LDhBaBctN0kUWgYrh/JtYaP78iszxXAu3yLMGvJgAAAAAAAAAAwF/6BpEnOMoPe9uNAAAAAElFTkSuQmCC"
        />
        <img
          className="h-8 w-20"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>

      <div>
        <div className="justify-center">
          <form
            className="flex justify-center"
            onClick={(e) => {
              e.preventDefault();
              dispatch(getSearchQuery(searchQuery));
              setSearchQuery("");
            }}
          >
            <input
              className="w-[32rem] h-10 rounded-l-full border border-gray-500 p-4"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="text-black bg-gray-300  px-4 border border-gray-500 rounded-r-full">
              <SearchIcon />
            </button>
          </form>

          {showSuggestions && (
            <div className="absolute rounded-xl z-20 bg-white p-5 w-[32rem] ">
              <ul className="w-full space-y-3 rounded-xl ">
                {suggestions.map((s, index) => (
                  <li
                    key={index}
                    className="space-x-1 hover:bg-gray-200  cursor-pointer"
                  >
                    <SearchIcon /> {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div>
        <img
          className="h-8 w-8"
          alt="user-icon"
          src="https://cdn.iconscout.com/icon/free/png-256/free-user-1493-459372.png"
        />
      </div>
    </div>
  );
}

export default Head;
