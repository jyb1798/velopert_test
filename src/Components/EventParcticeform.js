import React, { useState } from "react";

const EventParcticeForm = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.value]: e.target.value,
    };
    setForm(nextForm);
    console.log("하이");
  };

  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };

  return (
    <div>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지"
        value={message}
        onChange={onChange}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventParcticeForm;
