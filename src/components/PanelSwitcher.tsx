import React, { useState, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { myContext } from "../context/Provider";

const PanelSwitcher = () => {
  const [isactive, setActive] = useState(false);

  const { activeColor, changeColor } = useContext(myContext);

  const data = useStaticQuery(graphql`
    query PanelSwitcherQuery {
      site {
        siteMetadata {
          panelColors
        }
      }
    }
  `);

  return (
    <div className="panel">
      <button className="panel__switcher" onClick={() => setActive(!isactive)}>
        <i className="fa fa-gear" aria-hidden="true" />
      </button>
      <div className={`panel__body ${isactive ? "active" : ""}`}>
        <div className="panel__title">Main Color</div>
        {activeColor}
        <div className="panel__main-color d-flex justify-content-between flex-wrap">
          {data?.site?.siteMetadata?.panelColors.map((color) => (
            <button
              key={color}
              className={`preview ${activeColor === color ? "active" : ""}`}
              style={{ backgroundColor: `${color}` }}
              onClick={() => {
                changeColor(color);
              }}
            >
              <i className="fa fa-check"></i>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanelSwitcher;
