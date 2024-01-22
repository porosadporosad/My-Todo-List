import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

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

  // 삭제
  const onclickRemoveHandler = (id) => {
    const newCards = arr.filter((item) => item.id !== id);
    setArr(newCards);
  };

  // true 필터
  const arrFilterTrue = arr.filter((item) => {
    return item.isDone === true;
  });

  // false 필터
  const arrFilterFalse = arr.filter((item) => {
    return item.isDone === false;
  });

  // working done 분류
  const onclickCompleteHandler = (item) => {
    if (!item.isDone) {
      let findIndex = arr.findIndex((arr) => arr.id === item.id);
      let copiedItems = [...arr];
      copiedItems[findIndex].isDone = true;
      setArr(copiedItems);
    } else {
      let findIndex = arr.findIndex((arr) => arr.id === item.id);
      let copiedItems = [...arr];
      copiedItems[findIndex].isDone = false;
      setArr(copiedItems);
    }
  };

  return (
    <>
      <div className="topMainOne"></div>
      <div className="topMainTwo">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="inputMain">
        <div>
          제목 &nbsp; &nbsp; &nbsp;
          <input value={title} onChange={onchangetitleHandler} /> &nbsp; &nbsp;
          &nbsp; 내용 &nbsp; &nbsp; &nbsp;
          <input value={content} onChange={onchangeContentHandler} />
        </div>
        <button onClick={onclickButtonHandler}>추가하기</button>
      </div>
      <div className="mainCards">
        Working..🔥
        <div className="Working">
          {arrFilterFalse.map((item) => {
            return (
              <Cards
                item={item}
                key={item.id}
                onclickRemoveHandler={onclickRemoveHandler}
                onclickCompleteHandler={onclickCompleteHandler}
                buttonText="완료"
              />
            );
          })}
        </div>
        Done..!🎉
        <div className="Done">
          {arrFilterTrue.map((item) => {
            return (
              <Cards
                item={item}
                key={item.id}
                onclickRemoveHandler={onclickRemoveHandler}
                onclickCompleteHandler={onclickCompleteHandler}
                buttonText="취소"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
