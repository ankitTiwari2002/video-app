import React from "react";

const VideoCart = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 shadow-lg space-y-0 w-60">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul className="py-2 w-60">
        <li className="text-lg font-medium">{title}</li>
        <li className="font-medium text-gray-500">{channelTitle}</li>
        <li className="font-medium text-gray-500">
          {statistics.viewCount} views
        </li>
      </ul>
    </div>
  );
};
export default VideoCart;
