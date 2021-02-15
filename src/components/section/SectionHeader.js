import React from "react";
import PropTypes from "prop-types";

const SectionHeader = ({ title, header }) => {
  return (
    <div className="section__header">
      {header ? header : <h2 className="section__title">{title}</h2>}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  header: PropTypes.any,
};

SectionHeader.defaultProps = { title: "" };

export default SectionHeader;
