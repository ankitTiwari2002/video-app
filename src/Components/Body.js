import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="flex gap-5 pt-5">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Body;
