import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  //   const { snippet, statistics } = info;
  //   const { channelTitle, title, thumbnails } = snippet;

  const formatViews = (views) => {
    // If views are in millions, convert to 'M' format
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    }
    // If views are in thousands, convert to 'K' format
    else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
    // For views less than 1000, display as is
    else {
      return views.toString();
    }
  };

  return (
    <div className=" w-[200px] p-2 mx-2 md:w-80  rounded-lg shadow-lg">
      <img alt="thumbnails" src={info?.snippet?.thumbnails?.high?.url} />
      <ul>
        <li className="font-bold text-0.5sm">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{formatViews(info?.statistics?.viewCount)} views ​</li>
      </ul>
    </div>
  );
};

export default VideoCard;
