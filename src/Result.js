import React from "react";
import { useNavigate } from "react-router-dom";

function Result({ message }) {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/");
  };
  return (
    <div className="flexCenter flex-col gap-5 ">
      <h1 className="text-2xl text-white xs:text-5xl">{message}</h1>
      <button
        className="bg-white p-3 rounded xs:py-2 xs:w-[60%] tracking-[.2rem] xs:text-sm sm:min-w-full"
        onClick={handelClick}
      >
        PLAY AGAIN
      </button>
    </div>
  );
}

export default Result;
