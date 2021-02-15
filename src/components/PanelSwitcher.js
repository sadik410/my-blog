import React, { useState } from "react";
import PropTypes from "prop-types";

const panelColors = [
  "#7e6df6",
  "#F44336",
  "#2196F3",
  "#FF5722",
  "#2eca7f",
  "#29B6F6",
  "#E91E63",
  "#A0F",
  "#FF9800",
  "#FBC02D",
  "#9dd100",
  "#26d9ac",
];
const PanelSwitcher = () => {
  const [isactive, setActive] = useState(false);
  const [activeColor, setActiveColor] = useState("#7e6df6");
  return (
    <div className="panel">
      <button className="panel__switcher" onClick={() => setActive(!isactive)}>
        <i className="fa fa-gear" aria-hidden="true" />
      </button>
      <div className={`panel__body ${isactive ? "active" : ""}`}>
        <div className="panel__title">Main Color</div>
        {activeColor}
        <div className="panel__main-color d-flex justify-content-between flex-wrap">
          {panelColors.map((color) => (
            <span
              key={color}
              className={`preview ${activeColor === color ? "active" : ""}`}
              style={{ backgroundColor: `${color}` }}
              onClick={() => {
                setActiveColor(color);
              }}
            >
              <i className="fa fa-check"></i>
            </span>
          ))}
          <span className="preview"></span>
        </div>
      </div>
    </div>
  );
};

PanelSwitcher.propTypes = {};

PanelSwitcher.defaultProps = {};

export default PanelSwitcher;
