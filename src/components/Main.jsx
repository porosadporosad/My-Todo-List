import React from "react";
import Cards from "./Cards.jsx";

function Main({ arr, bool, setArr }) {
  return (
    <div className="mainCards">
      {bool ? "Working..🔥" : "Done..!🎉"}
      <div className={bool ? "Working" : "Done"}>
        {arr
          .filter((item) => {
            return item.isDone === !bool;
          })
          .map((item) => (
            <Cards
              arr={arr}
              setArr={setArr}
              item={item}
              key={item.id}
              buttonText={bool ? "완료" : "취소"}
            />
          ))}
      </div>
    </div>
  );
}

export default Main;
