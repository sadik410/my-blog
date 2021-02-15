import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section/Section";
import ServiceItem from "../components/services/serviceItem";

const services = [
  {
    icon: " fa fa-globe ",

    title: "Web Development",
    subtitle: "we develop web applications with react JS",
  },
  {
    icon: " fa fa-mobile ",
    title: "Mobile Development",
    subtitle:
      " we develop mobile applications with react-native & react-native-web",
  },
  {
    icon: " fa fa-desktop ",
    title: "Web Design",
    subtitle: "we do the design for web and mobile applications",
  },
];
const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Section title="Services">
      <div className="container services">
        <h4 className="title">
          My
          <span
            style={{
              color: "#2196f3",
            }}
          >
            {" Services"}
          </span>
        </h4>
        <div className="row">
          {services.map(({ icon, title, subtitle }) => (
            <ServiceItem
              key={title}
              icon={icon}
              title={title}
              subtitle={subtitle}
            />
          ))}
        </div>
      </div>
    </Section>
  </Layout>
);

export default Services;
