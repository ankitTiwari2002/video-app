import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data?.json();
    //console.log(json.items);
    setVideos(json?.items);
  };
  return (
    <div className="flex flex-wrap justify-between">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCart key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;