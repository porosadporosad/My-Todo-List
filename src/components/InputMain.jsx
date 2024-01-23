import React, { useState } from "react";
import Input from "./Input.jsx";
import Main from "./Main.jsx";

function InputMain() {
  const [arr, setArr] = useState([]);
  return (
    <>
      <Input arr={arr} setArr={setArr} />
      <Main arr={arr} setArr={setArr} bool={true} />
      <Main arr={arr} setArr={setArr} bool={false} />
    </>
  );
}

export default InputMain;
