import * as React from "react";
import { myContext } from "../../context/Provider";
import { SectionHeaderTypes } from "../../types";

const SectionHeader = ({ title = "", header }: SectionHeaderTypes) => {
  const { activeColor } = React.useContext(myContext);

  return (
    <div className="section__header" style={{ backgroundColor: activeColor }}>
      {header ? header : <h2 className="section__title">{title}</h2>}
    </div>
  );
};

export default SectionHeader;
