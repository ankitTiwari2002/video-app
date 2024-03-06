import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenue } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenue());
  }, []);
  return (
    <div className="pl-24 w-full">
      <iframe
        className="rounded-xl"
        width="700"
        height="400"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
