import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { selectedContext } from "./context";

function Circle({
  src,
  innerClass,
  bg,
  bottom = "",
  left = "",
  right = "",
  top = "",
  position = "absolute",
  name,
}) {
  const { theme, setTheme } = useContext(selectedContext);

  const navigate = useNavigate();
  const handelCircleClick = () => {
    navigate("/step2");
    setTheme({
      src: src,
      innerClass: innerClass,
      bg: bg,
      bottom: bottom,
      left: left,
      right: right,
      top: top,
      position: "",
      name: name,
      score: theme.score,
    });
  };
  return (
    <div
      className={`activeC ${bg} rounded-full flexCenter ${position} ${innerClass} ${
        top + " " + bottom + " " + left + " " + right
      } cursor-pointer transition-all ease-linear xs:w-[120px] xs:h-[120px] md:h-[150px] md:w-[150px] `}
      onClick={handelCircleClick}
    >
      <div
        className={`w-3/4 h-3/4 bg-circleBg rounded-full flexCenter shadow-innerShadow `}
      >
        <img src={src} alt="circle" className="rounded-full w-3/4 xs:w-[45%]" />
      </div>
    </div>
  );
}

export default Circle;
