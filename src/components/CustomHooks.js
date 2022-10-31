import React, { useState } from "react";

export const CustomHooks = () => {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};
