import React from "react";
import PropTypes from "prop-types";

import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";

const Section = ({ children, title }) => {
  return (
    <section className="row flex-column section">
      <SectionHeader title={title} />
      <SectionBody>{children}</SectionBody>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {};

export default Section;
