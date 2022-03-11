import React, { useState } from "react";

const EventParcticeForm = () => {
  const onClick = () => {};
  return (
    <div>
      <h1>이벤트연습</h1>
      <input type="text" name="username" placeholder="사용자명" />
      <input type="text" name="message" placeholder="메세지" />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventParcticeForm;
