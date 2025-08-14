import React from "react";
import "./BluChatCubes.css";

const messages = [
  { user: "کاربر ۱", text: "سلام، امروز چطورید؟" },
  { user: "کاربر ۲", text: "خوبم، مرسی!" },
  { user: "کاربر ۳", text: "می‌خوام اطلاعات بیشتری بگیرم." },
];

function BluChatCubes() {
  return (
    <div className="cube-container overflow-hidden w-[100%] h-[200px] relative flex justify-center items-center">
      {messages.map((msg, idx) => (
        <div key={idx} className="cube w" >
          <div className="bg-white rounded-xl w-full p-2" >
            <div className="header ">
              <span className="user-tag">{msg.user}</span>
              <span className="time">الان</span>
            </div>
            <p>{msg.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BluChatCubes;
