import React, { useState } from "react";

const EventParctice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUserName = (e) => {
    setUsername(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const onClick = () => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <>
      <h1>이벤트연습</h1>
      <input
        placeholder="사용자명"
        value={username}
        onChange={onChangeUserName}
        onKeyPress={onKeyPress}
      />
      <input
        placeholder="message"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};
export default EventParctice;
