"use client";

import { useState } from "react";

export default function Home() {
  const [conter, setConter] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setConter(conter + 1);
          console.log(conter);
        }}
      >Click Me</button>
      <div className="text-3xl text-center">{conter}</div>
    </>
  );
}
