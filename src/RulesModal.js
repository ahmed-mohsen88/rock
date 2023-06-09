import React from "react";
import imgRules from "./images/image-rules.svg";
import closeImg from "./images/icon-close.svg";

export default function Modal({ setModal }) {
  const handelClick = () => {
    setModal(false);
  };
  return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">RULES</h3>
                <button
                  className="p-1 ml-auto  border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handelClick}
                >
                  <img src={closeImg} alt="close" />
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div className="my-4 text-slate-500 text-lg leading-relaxed">
                  <img src={imgRules} alt="rules" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
  );
}
