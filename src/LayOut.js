import React, { useContext, useState } from "react";
import RulesModal from "./RulesModal";
import { selectedContext } from "./context";
import logoImage from "./images/logo.svg";

function LayOut({ children }) {
  const { theme } = useContext(selectedContext);
  const [modal, setModal] = useState(false);
  const handelClick = () => {
    setModal(!modal);
  };
  return (
    <div className="block p-10 relative min-w-[360px] h-[100vh]">
      <div className="m-auto  relative">
        {/* top section */}
        <div className="p-5 flexBetween border w-full place-self-center border-white rounded px-3 mainDiv sm:m-auto sm:w-2/3 ">
          <div className="flex flex-col text-white w-20 sm:w-32 lg:w-32">
            <img src={logoImage} alt="logo" />
          </div>
          <div className="flex flex-col bg-gray-300 rounded justify-center items-center w-16 h-18 py-1 sm:w-[8rem] sm:h-[6rem] lg:w-[7rem] lg:h-[5rem]">
            <span className="text-ScoreText text-[.6rem] w-fit sm:text-xl">
              SCORE
            </span>
            <h1 className="text-4xl sm:text-5xl w-fit">{theme.score}</h1>
          </div>
        </div>
        {/* play center section */}
        {children}
      </div>
      {/* rules */}
      <div className="xs:static sm:absolute sm:mt[-10px] sm:mt-16 block m-auto absolute right-20 bottom-5">
        <button
          type="button"
          className="border text-slate-200 px-9 py-2 rounded m-auto block text-center mt-10 rules"
          onClick={handelClick}
        >
          RULES
        </button>
      </div>
      {modal && <RulesModal setModal={setModal} />}
    </div>
  );
}

export default LayOut;
