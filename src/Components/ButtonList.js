import Button from "./Button";
import React from "react";

function ButtonList() {
  return (
    <div className="flex w-full justify-between">
      <Button name="All" />
      <Button name="Dat Structure" />
      <Button name="Live" />
      <Button name="Java Script" />
      <Button name="Mixes" />
      <Button name="Music" />
      <Button name="Satsang" />
      <Button name="Music Musicles" />
      <Button name="Bhajan Music" />
    </div>
  );
}

export default ButtonList;
