"use client";

import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="  text-center mt-10">
      <h1 className="text-2xl">Something went wrong...</h1>
      <button className= " text-black text-xl mt-7 bg-teal-400 p-2 m-2 rounded-md hover:text-amber-600" onClick={() => reset()}>Try Again</button>
    </div>
  );
}