import React, { useEffect, useState } from "react";
import { SEARCH_LIST_API_KEY, YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

import ShimmerVideoCardList from "./ShimmerVideoCartList";
import { useSelector } from "react-redux";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  const queryVideos = useSelector((store) => store.app.query);

  useEffect(() => {
    getQueryVideoData();
  }, [queryVideos]);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data?.json();
    //console.log(json.items);
    setVideos(json?.items);
  };

  const getQueryVideoData = async () => {
    const data = await fetch(SEARCH_LIST_API_KEY + queryVideos);
    const json = await data?.json();
    console.log(json.items);
    setVideos(json?.items || []);
  };

  if (videos.length === 0) {
    return <ShimmerVideoCardList />;
  }
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
