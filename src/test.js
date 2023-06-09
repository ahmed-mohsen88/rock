import React from "react";
import imgRules from "./images/image-rules.svg";
import closeImg from "./images/icon-close.svg";

function RulesModal({ setModal }) {
  const handelClick = () => {
    setModal(false);
  };
  return (
    <div className="grid grid-cols-1 gridCenter h-96 absolute top-32 sm:top-[-5%] min-w-full xs:h-full xs:w-full xs:top-0 xs:left-0 lg:w-[30%]">
      <div className="flex flex-col bg-slate-200 sm:h-1/6 p-5 gap-4 rounded xs:w-full xs:h-full xs:relative sm:p-8  sm:min-h-[321px] sm:w-[48.5%] md:min-h-[440px] lg:min-w-[34%] lg:min-h-[600px]">
        <div className="flexBetween w-3/4 self-center sm:w-full ">
          <h1 className="DarkText text-3xl xs:self-center text-center xs:w-full xs:mt-16 sm:mt-0 sm:w-fit">
            RULES
          </h1>
          {/* close button */}
          <div className="w-4 xs:absolute xs:bottom-10 xs:left-[48%] sm:bottom-[84%] sm:left-[85%] ">
            <button type="button" onClick={handelClick}>
              <img src={closeImg} alt="close" />
            </button>
          </div>
        </div>

        <div className="flexCenter mt-[10%]">
          <img src={imgRules} alt="rules" className="w-3/4" />
        </div>
      </div>
    </div>
  );
}

export default RulesModal;
