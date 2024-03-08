import React from "react";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-2 shadow-sm bg-gray-200 p-2 rounded-lg">
      <img
        className="w-8 h-8"
        alt="user-icon"
        src="https://cdn.iconscout.com/icon/free/png-256/free-user-1493-459372.png"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
