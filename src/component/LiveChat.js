import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: "UnKnown",
          message: "Lorem ipsum Dolor Site Amet",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll">
      {chatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
