import React, { useEffect, useState } from "react";
import LIveMessage from "./LIveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { createRandomString, generateRandomName } from "../Utils/helper";

const LIveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: createRandomString(20) + " 🙏",
        })
      );
    }, 1500);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="ml-2 border border-gray-400 bg-slate-100  rounded-xl p-2 h-[450px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <LIveMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-gray-400 rounded-xl"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ankit Tiwari",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="input"
          className="w-80 bg-slate-200 rounded-full p-2 px-4"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Chat..."
        />
        <button className="bg-green-200 ml-6 px-3 py-1 rounded-full">
          Send
        </button>
      </form>
    </>
  );
};

export default LIveChat;
