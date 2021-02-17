import React, { useState, createContext } from "react";

export type GlobalContent = {
  activeColor: string;
  changeColor: (color: string) => void;
};
export const myContext = createContext<GlobalContent>({
  activeColor: "#2196F3",
  changeColor: () => {},
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
