import React, { useState, createContext } from "react";

export const myContext = createContext({
  activeColor: "#2196F3",
  changeColor: (color: string) => {},
});

const Provider = (props) => {
  const [activeColor, setActiveColor] = useState("#2196F3");

  return (
    <myContext.Provider
      value={{
        activeColor,
        changeColor: (color) => setActiveColor(color),
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ({ children }) => <Provider>{children}</Provider>;
