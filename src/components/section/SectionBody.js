import React from "react";
import PropTypes from "prop-types";

const Section = ({ children }) => {
  return <div className="section__body">{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {};

export default Section;
