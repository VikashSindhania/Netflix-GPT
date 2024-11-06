import React, { useState, useMemo } from "react";

//UseMemo Concept
function MemoComponent() {
  const [render, setRender] = useState(false);
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
    console.log(number); // Output here is 1. but it return 0. why? --> Next Line
    //Because Here comes the Javascript related to synchronous & Asynchronous function. setNumber behaves here like Asynchronous function.
  };

  console.log("Parent Component");

  const handleRender = () => {
    setRender(!render);
  };
  return (
    <div>
      <ChildComponent number={number} />
      <button onClick={handleIncrement}>Parent INCREMENT Button</button>
      <button onClick={handleRender}>Render Button</button>
    </div>
  );
}
export default MemoComponent;

function ChildComponent({ number }) {
  function sum(number) {
    console.log(number + number);
    return number + number;
  }

  console.log("child Component");
  let result = useMemo(() => sum(number), [number]);
  console.log("result", result);

  return (
    <div>
      Hello Child
      <h2>
        SumResult: {result} , Number Passed: {number}
      </h2>
    </div>
  );
}

//UseMemory --> useMemo
//useMemo is a React Hook that lets you cache the result of a calculation between re-renders.