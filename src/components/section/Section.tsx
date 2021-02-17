import React from "react";

import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import { SectionHeaderTypes } from "../../types";

interface SectionProps extends SectionHeaderTypes {
  children: any;
}
const Section = ({ children, title, header }: SectionProps) => {
  return (
    <section className=" flex-column section">
      <SectionHeader title={title} header={header} />
      <SectionBody>{children}</SectionBody>
    </section>
  );
};

export default Section;
