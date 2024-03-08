import React from "react";

const LIveMessage = ({ name, message }) => {
  return (
    <div className="flex gap-2 py-2 hover:bg-gray-300 rounded-lg cursor-pointer">
      <img
        className="h-8 w-8"
        alt="user-icon"
        src="https://cdn.iconscout.com/icon/free/png-256/free-user-1493-459372.png"
      />
      <span className="font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default LIveMessage;
