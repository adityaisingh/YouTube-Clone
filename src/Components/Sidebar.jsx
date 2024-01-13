import React from "react";
import { useSelector } from "react-redux";
import homeIcon from "../assets/home-icon.png";
import shortsIcon from "../assets/news-icon.png";
import liveIcon from "../assets/live-icon.png";
import subscriptionIcon from "../assets/subscription-icon.png";
import musicIcon from "../assets/music-icon.png";
import movieIcon from "../assets/movies-icon.png";
import gamingIcon from "../assets/games-icon.png";
import newsIcon from "../assets/news-icon.png";
import Youtube from "../assets/youtube.png";
import Youtubekids from "../assets/youtubekids.png";
import Youtubemusics from "../assets/youtubemusic.png";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return  pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 col-span-1   w-48 shadow-lg pl-4 h-[100vh] z-30 bg-white pb-2  overflow-scroll">
      <div className="flex flex-col gap-3 pt-1">
        <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
          <img src={homeIcon} alt="home-icon" className="w-5" />
          <h1 className="font-bold">
            <Link>Home</Link>
          </h1>
        </div>

        <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
          <img src={shortsIcon} alt="shorts-icon" className="w-5" />
          <h1 className="font-bold">Shorts</h1>
        </div>

        <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
          <img src={liveIcon} alt="live-icon" className="w-5" />
          <h1 className="font-bold">Live</h1>
        </div>

        <div className=" flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
          <img src={subscriptionIcon} alt="subscription-icon" className="w-5" />
          <h1 className="font-bold">Subscriptions</h1>
        </div>

        <div className="h-0.5 flex justify-center items-center bg-gray-600 w-30"></div>

        <div>
          <ul className="flex flex-col gap-1.5">
            <div className="flex justify-start items-center gap-5 pb-3">
              <h1 className="font-bold ">Explore</h1>
            </div>

            <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
              <img src={musicIcon} alt="music-icon" className="w-5" />
              <li>Music</li>
            </div>

            <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
              <img src={movieIcon} alt="movie-icon" className="w-5" />
              <li>Movies</li>
            </div>

            <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
              <img src={gamingIcon} alt="gaming-icon" className="w-5" />
              <li>Gaming</li>
            </div>

            <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
              <img src={newsIcon} alt="news-icon" className="w-5" />
              <li>News</li>
            </div>
          </ul>
          <br></br>
          <div className="h-0.5 flex justify-center items-center bg-gray-600 w-30"></div>
          <br></br>
          <div>
            <ul className="flex flex-col gap-1.5">
              <div className="flex justify-start items-center gap-5 pb-3">
                {/* <img src={exploreIcon} alt="explore-icon" className="w-5" /> */}
                <h1 className="font-bold ">More from YT</h1>
              </div>
              <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
                <img src={Youtube} alt="Youtube-icon" className="w-5" />
                <li>Youtube</li>
              </div>
              <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
                <img src={Youtubekids} alt="Youtubekids-icon" className="w-5" />
                <li>Youtubekids</li>
              </div>
              <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
                <img
                  src={Youtubemusics}
                  alt="Youtubemusics-icon"
                  className="w-5"
                />
                <li>Youtubemusics</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
