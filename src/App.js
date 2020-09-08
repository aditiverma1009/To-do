import React, { useState, useEffect } from "react";
import "./App.scss";

const App = () => {
  let [counter, setCounter] = useState(0);
  let [lightIsOn, setLightIsOn] = useState(false);

  useEffect(() => {
    document.title = `Light is currently ${lightIsOn ? "on" : "off"}`;
  });

  const incrementCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <>
      <div className="counter">
        <div onClick={incrementCounter}>Click on me</div>
        <div>{counter}</div>
      </div>
      <div className="light">
        <div
          onClick={() => setLightIsOn((prevState) => !prevState)}
          className={lightIsOn ? "light-on" : "light-off"}
        ></div>
      </div>
    </>
  );
};

export default App;
