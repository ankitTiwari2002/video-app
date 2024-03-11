import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenue } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LIveChat from "./LIveChat";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenue());
  }, []);
  return (
    <div className="flex justify-center">
      <div className=" justify-center">
        <div className="flex">
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
          <div className="m-3 w-[27rem]">
            <LIveChat />
          </div>
        </div>
        <div>
          <CommentsContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
