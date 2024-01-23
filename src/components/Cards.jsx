import React from "react";

function Cards({ arr, buttonText, item, setArr }) {
  // 삭제
  const onclickRemoveHandler = (id) => {
    const newCards = arr.filter((item) => item.id !== id);
    const delReal = window.confirm("정말 삭제하시겠습니까?");
    if (delReal) {
      setArr(newCards);
    } else {
      return false;
    }
  };

  // working done 분류
  const onclickCompleteHandler = (item) => {
    let findIndex = arr.findIndex((arr) => arr.id === item.id);
    let copiedItems = [...arr];
    if (!item.isDone) {
      copiedItems[findIndex].isDone = true;
    } else {
      copiedItems[findIndex].isDone = false;
    }
    setArr(copiedItems);
  };
  return (
    <div className="workingCard" key={item.id}>
      <h3 className="workingCardTitle">{item.title}</h3>
      <div className="workingCardTitle">{item.content}</div>
      <button
        className="cardDelBtn"
        onClick={() => onclickRemoveHandler(item.id)}
      >
        삭제하기
      </button>
      <button className="cardBtn" onClick={() => onclickCompleteHandler(item)}>
        {buttonText}
      </button>
    </div>
  );
}

export default Cards;
