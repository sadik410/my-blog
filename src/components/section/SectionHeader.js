import React from "react";
import PropTypes from "prop-types";

const SectionHeader = ({ title }) => {
  return (
    <div className="section__header">
      <h2 className="section__title">{title}</h2>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

SectionHeader.defaultProps = { title: "" };

export default SectionHeader;
