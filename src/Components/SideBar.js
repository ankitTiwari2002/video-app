import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import HistoryIcon from "@mui/icons-material/History";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const isMenueOpen = useSelector((store) => store.app.isMenueOpen);
  if (!isMenueOpen) return null;
  return (
    <div className="w-60 px-4 py-5 text-lg font-normal">
      <ul className="space-y-4">
        <li className="flex gap-4">
          <Link to={"/"}>
            <HomeIcon /> Home
          </Link>
        </li>
        <li className="flex gap-4">
          <OndemandVideoIcon /> Video
        </li>
        <li className="flex gap-4">
          <SubscriptionsIcon /> Subscription
        </li>
      </ul>
      <ul className="pt-7 space-y-4 space-x-4">
        <h1 className="font-bold flex gap-1">
          You <ChevronRightIcon />
        </h1>
        <li className="flex gap-4">
          <PermContactCalendarIcon /> Your channel
        </li>
        <li className="flex gap-4">
          <HistoryIcon /> History
        </li>
        <li className="flex gap-4">
          <VideoSettingsIcon /> Your Videos
        </li>
        <li className="flex gap-4">
          <WatchLaterIcon /> Watch Latter
        </li>
        <li className="flex gap-4">
          <DownloadIcon /> Downloads
        </li>
        <li className="flex gap-4">
          <KeyboardArrowDownIcon /> Show more
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
