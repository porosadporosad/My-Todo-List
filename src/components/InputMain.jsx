import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function MainInput({ setArr }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
        id: uuidv4(),
        title: title,
        content: content,
        isDone: false,
      };
      setArr((prev) => [...prev, newCard]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="inputMain">
      <div>
        제목 <input value={title} onChange={onchangetitleHandler} />
        내용 <input value={content} onChange={onchangeContentHandler} />
      </div>
      <button onClick={onclickButtonHandler}>추가하기</button>
    </div>
  );
}

export default MainInput;
