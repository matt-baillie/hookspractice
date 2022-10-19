import React, { useState, useRef, useEffect } from "react";

//
export const UseRef = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name=""
        id=""
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};
// Render Count example
// export const UseRef = () => {
//   const [name, setName] = useState("");
//   const renderCount = useRef(1);

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   });
//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         name=""
//         id=""
//       />
//       <div>My name is {name}</div>
//       <div>I rendered {renderCount.current} times</div>
//     </>
//   );
// };
