import React, { useRef } from "react";

const Ref = () => {
  const count = useRef(0);

  const inputRef = useRef(null);
  const handleIncrement = () => {
    count.current = count.current + 1;
  };
  // useRef Example

  console.log("Component re-rendered");

  console.log("Component re-rendered");
  return (
    <div>
      Ref
      <p>count: {count}</p>
      <button onClick={handleIncrement}>increment</button>
      <input ref={inputRef} />
      <button>UseRef</button>
    </div>
  );
};

export default Ref;

// By using a ref, you ensure that:

// You can store information between re-renders (unlike regular variables, which reset on every render).
// Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
// The information is local to each copy of your component (unlike the variables outside, which are shared).

//useRef is a React Hook that lets you reference a value that’s not needed for rendering.
