import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  //   const { snippet, statistics } = info;
  //   const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="px-2 m-5 w-48 rounded-lg shadow-lg">
      <img alt="thumbnails" src={info?.snippet?.thumbnails?.high?.url} />
      <ul>
        <li>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
