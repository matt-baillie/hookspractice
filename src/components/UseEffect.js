import React, { useEffect, useState } from "react";

// API Call example
export const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  //   can you have multiple use effects?
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then((response) => response.json())
    //   .then((json) => setItems(json));
    // console.log("render");

    console.log("resource changed");
    return () => {
      console.log("return from resource change");
    };
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

// Window Width Example
// export const UseEffect = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//         window.removeEventListener('resize', handleResize)
//     }
//   }, []);
//   return <div>{windowWidth}</div>;
// };
