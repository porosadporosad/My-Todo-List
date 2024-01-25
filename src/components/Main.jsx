import React, { useState } from "react";
import MainInput from "./InputMain.jsx";
import CardMain from "./CardMain.jsx";

function Main() {
  const [arr, setArr] = useState([]);
  return (
    <>
      <MainInput setArr={setArr} />
      <CardMain arr={arr} setArr={setArr} bool={true} />
      <CardMain arr={arr} setArr={setArr} bool={false} />
    </>
  );
}

export default Main;
