import React, { useState } from "react";

function Input({ arr, setArr }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [count, setCount] = useState(0);

  // 제목 input 제한
  const onchangetitleHandler = (event) => {
    if (event.target.value.length < 15) {
      setTitle(event.target.value);
    } else {
      alert("길어요");
    }
  };

  // 내용 input 제한
  const onchangeContentHandler = (event) => {
    if (event.target.value.length < 20) {
      setContent(event.target.value);
    } else {
      alert("길어요");
    }
  };

  //추가
  const onclickButtonHandler = () => {
    if (title.length === 0 || content.length === 0) {
      alert("비어있는 곳이 있군요");
      return false;
    } else {
      const newCard = {
        id: count,
        title: title,
        content: content,
        isDone: false,
      };
      setArr([...arr, newCard]);
      setTitle("");
      setContent("");
      setCount(count + 1);
    }
  };

  return (
    <div className="inputMain">
      <div>
        제목 &nbsp; &nbsp; &nbsp;
        <input value={title} onChange={onchangetitleHandler} /> &nbsp; &nbsp;
        &nbsp; 내용 &nbsp; &nbsp; &nbsp;
        <input value={content} onChange={onchangeContentHandler} />
      </div>
      <button onClick={onclickButtonHandler}>추가하기</button>
    </div>
  );
}

export default Input;
