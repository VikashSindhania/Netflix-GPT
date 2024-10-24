import React, { useState, useCallback } from "react";
import { TextButton } from "../GlowingButton";

// Child component that prints whenever it  renders
const ChildComponent = React.memo(({ caseNum, onClick }) => {
  console.log(
    `child component ${caseNum}called in callback Example`,

    onClick
  );
  return (
    <div>
      <h3> case {caseNum}: Child Component</h3>
      <TextButton onClick={onClick} name="Increment" />
    </div>
  );
});

//
const CallbackExample = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const incrementCase1 = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const incrementCase2 = useCallback(() => {
    setCount2((prevCount) => prevCount + 1);
  }, []);

  //Case 2: With useCallback (function is memoized and does not cahnge on re-renders)

  const buttonStyle =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";

  const divStyle = {
    border: "1px solid gray",
    marginBottom: "20px",
    padding: "10px",
  };
  return (
    <div>
      <h2>useCallback Examples</h2>

      {/* Case 1 : Without callback */}
      <div className="border border-gray-100 mb-20 p-10">
        <h3>Without Callback</h3>
        <p>count1: {count1}</p>

        {/* Passing incrementCase1 without useCallback */}
        <ChildComponent caseNum="1" onClick={incrementCase1} />
        <button
          className={buttonStyle}
          onClick={() => setOtherState(!otherState)}
        >
          Toggle Other State (Triggers re-render)
        </button>
      </div>

      {/* Case 2 : With useCallback */}
      <div style={divStyle}>
        <h3>Case 2: With useCallback</h3>
        <p>Count2: {count2}</p>
        {/* Passing incrementCase2 with useCallback */}

        <ChildComponent caseNum="2" onClick={incrementCase2} />

        <button onClick={() => setOtherState(!otherState)}>
          Toggle other State (Triggers re-render)
        </button>
      </div>
    </div>
  );
};
export default CallbackExample;

// Without useCallback: If the increment function is passed directly to the child component, it gets re-created on every render. This causes the child to re-render even when not needed.
// With useCallback: The increment function is memoized and stays the same across renders, preventing the child component from re-rendering unnecessarily.
// Result: The child component only renders when increment is initially passed. It does not re-render when the parent state (toggle) changes.
