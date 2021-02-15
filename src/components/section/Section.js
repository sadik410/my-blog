import React from "react";
import PropTypes from "prop-types";

import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";

const Section = ({ children, title, header }) => {
  return (
    <section className=" flex-column section">
      <SectionHeader title={title} header={header} />
      <SectionBody>{children}</SectionBody>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {};

export default Section;
