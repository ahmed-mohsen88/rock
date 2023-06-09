import React from "react";
import paper from "./images/icon-paper.svg";
import rock from "./images/icon-rock.svg";
import scissor from "./images/icon-scissors.svg";
import triangle from "./images/bg-triangle.svg";
import Circle from "./Circle";

function Step1Content() {
  return (
    <div className="relative place-self-center flexCenter sm:mt-6 xs:pb-12 py-20 md:py-20 lg:py-16 w-full xs:mt-[3.8rem] sm:w-2/3 m-auto xl:-w-[80%] md-w-[50%]">
      <img
        src={triangle}
        alt="triangle"
        className="-z-1 px-5 md:w-[70%] lg:w-[50%] "
      />
      <Circle
        src={paper}
        innerClass={"shadow-outerShadowPaper"}
        bg={"bg-PaperGradient"}
        top="xs:top-10 lg:top-2"
        left="xs:left-0 md:left-[7%] lg:left-[25%]"
        name="paper"
      />

      <Circle
        src={scissor}
        innerClass={"shadow-outerShadowScissor"}
        bg={"bg-ScissorsGradient"}
        top="xs:top-10 lg:top-2"
        right="xs:right-0 md:right-[7%] lg:right-[25%]"
        name="scissor"
      />
      <Circle
        src={rock}
        innerClass={"shadow-outerShadowRock"}
        bg={"bg-RockGradient"}
        bottom="xs:bottom-14 sm:bottom-8 md:bottom-16 lg:bottom-16"
        name="rock"
      />
    </div>
  );
}

export default Step1Content;
