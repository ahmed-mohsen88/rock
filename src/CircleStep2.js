function CircleStep2({
  src,
  innerClass,
  bg,
  bottom = "",
  left = "",
  right = "",
  top = "",
  position = "absolute",
}) {
  return (
    <div
      className={`activeC ${bg} rounded-full flexCenter ${position} ${innerClass} ${
        top + " " + bottom + " " + left + " " + right
      } cursor-pointer transition-all ease-linear xs:w-[120px] xs:h-[120px] md:w-[180px] md:h-[180px]  `}
    >
      <div
        className={`w-3/4 h-3/4 bg-circleBg rounded-full flexCenter shadow-innerShadow `}
      >
        <img src={src} alt="circle" className="rounded-full w-3/4 xs:w-[45%]" />
      </div>
    </div>
  );
}

export default CircleStep2;
