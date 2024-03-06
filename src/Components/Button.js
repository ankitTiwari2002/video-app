import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-300 py-1 px-3 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
