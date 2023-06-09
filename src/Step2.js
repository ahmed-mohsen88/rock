import React, { useCallback, useContext, useState } from "react";
import { selectedContext } from "./context";
import LayOut from "./LayOut";
import paper from "./images/icon-paper.svg";
import rock from "./images/icon-rock.svg";
import scissor from "./images/icon-scissors.svg";
import { useEffect } from "react";
import CircleStep2 from "./CircleStep2";
import Result from "./Result";
import { useMediaQuery } from "react-responsive";

function Step2() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 500px)",
  });
  const { theme, setTheme } = useContext(selectedContext);
  const [houseCircle, setHouseCircle] = useState("");
  const [count, setCount] = useState(0);

  const [selected, setSelected] = useState({
    user: "",
    computer: "",
  });
  const [result, setResult] = useState(false);
  const [winLose, setWinlose] = useState("");

  const randomSelect = useCallback(() => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        setSelected({ user: theme.name, computer: "paper" });
        return setHouseCircle(
          <CircleStep2
            src={paper}
            innerClass={"shadow-outerShadowPaper"}
            bg={"bg-PaperGradient"}
            top="xs:top-14 md:top-11 lg:top-10 xl:top-5"
            left="xs:left-0 md:left-3 lg:left-16 xl:left-32"
            position=""
            name="paper"
          />
        );

      case 1:
        setSelected({ user: theme.name, computer: "scissor" });
        return setHouseCircle(
          <CircleStep2
            src={scissor}
            innerClass={"shadow-outerShadowScissor"}
            bg={"bg-ScissorsGradient"}
            top="xs:top-14 md:top-11 lg:top-10 xl:top-5"
            right="xs:right-0 md:right-3 lg:right-16 xl:right-32"
            position=""
            name="scissor"
          />
        );

      case 2:
        setSelected({ user: theme.name, computer: "rock" });
        return setHouseCircle(
          <CircleStep2
            src={rock}
            innerClass={"shadow-outerShadowRock"}
            bg={"bg-RockGradient"}
            bottom="xs:bottom-14 md:bottom-11 lg:bottom-10 xl:bottom-10"
            position=""
            name="rock"
          />
        );

      default:
        break;
    }
  }, [theme.name]);

  useEffect(() => {
    if (count < 10 && count !== 0) {
      console.log(count);
      const x = setInterval(() => {
        randomSelect();
      }, 200);
      setTimeout(() => {
        setCount(count + 1);
      }, 700);

      return () => {
        clearInterval(x);
        if (count === 9) {
          setResult(true);
        }
      };
    } else if (count === 0) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }
  }, [count, randomSelect]);

  useEffect(() => {
    if (result === true) {
      if (selected.user === selected.computer) {
        setWinlose("draw");
      } else if (
        (selected.user === "paper" && selected.computer === "rock") ||
        (selected.user === "rock" && selected.computer === "scissor") ||
        (selected.user === "scissor" && selected.computer === "paper")
      ) {
        setWinlose("win");
        const newTheme = { ...theme, score: theme.score + 1 };
        setTheme(newTheme);
      } else if (
        (selected.user === "paper" && selected.computer === "scissor") ||
        (selected.user === "rock" && selected.computer === "paper") ||
        (selected.user === "scissor" && selected.computer === "rock")
      ) {
        setWinlose("lose");
        const newTheme = { ...theme, score: theme.score - 1 };
        setTheme(newTheme);
      }
    }
  }, [result, selected.computer, selected.user]);

  return (
    <div>
      <LayOut>
        <div className="flex flexBetween h-full w-full m-auto relative xs:mt-16 sm:w-[90%] sm:min-w-[600px] sm:max-w-[700px]">
          {/* you pick */}
          <div className="flexCenter sm:flex-col gap-10 p-10 xs:flex-col-reverse xs:p-1 xs:gap-5">
            <h1 className="text-xl text-white xs:text-sm xs:w-fit tracking-[.1rem]">
              YOU PICKED
            </h1>
            <CircleStep2
              bg={theme.bg}
              src={theme.src}
              innerClass={theme.innerClass}
              bottom={theme.bottom}
              left={"0"}
              right={theme.right}
              top={theme.top}
              position={theme.position}
            />
          </div>
          {/* result */}
          {!isSmallScreen && (
            <div>
              {winLose === "win" && <Result message={"You win"} />}
              {winLose === "lose" && <Result message={"You lose"} />}
              {winLose === "draw" && <Result message={"You draw"} />}
            </div>
          )}
          {/* house */}
          <div className="flex items-center justify-start sm:flex-col gap-10 p-10 xs:flex-col-reverse xs:p-1 xs:gap-5">
            <h1 className="text-xl text-white xs:text-sm xs:w-fit tracking-[.1rem]">
              THE HOUSE PICKED
            </h1>

            {count <= 1 ? (
              <div
                className={`w-24 h-24 bg-DarkText -z-10 top-32 rounded-full `}
              ></div>
            ) : (
              houseCircle
            )}
          </div>
        </div>
        {isSmallScreen && (
          <div className="mt-10">
            {winLose === "win" && <Result message={"You win"} />}
            {winLose === "lose" && <Result message={"You lose"} />}
            {winLose === "draw" && <Result message={"You draw"} />}
          </div>
        )}
      </LayOut>
    </div>
  );
}

export default Step2;
