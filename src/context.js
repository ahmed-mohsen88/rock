import React, { useState } from "react";

const selectedContext = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    src: "",
    innerClass: "",
    bg: "",
    bottom: "",
    left: "",
    right: "",
    top: "",
    position: "",
    name: "",
    score: 0,
  });

  return (
    <selectedContext.Provider value={{ theme, setTheme }}>
      {children}
    </selectedContext.Provider>
  );
};

export { selectedContext, ContextProvider };
