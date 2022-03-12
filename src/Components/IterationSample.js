import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, title: "눈사람" },
    { id: 2, title: "눈" },
    { id: 3, title: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(4);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextName = names.concat({
      id: nextId,
      title: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextName);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.title}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>클릭</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
