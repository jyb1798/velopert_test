import React, { useState } from "react";

const Test = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage(alert("안녕하세요!"));
  const onClickLeave = () => setMessage(alert("안녕히가세요!"));

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
};

export default Test;
