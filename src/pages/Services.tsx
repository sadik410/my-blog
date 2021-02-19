import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section/Section";
import ServiceItem from "../components/services/serviceItem";
import { myContext } from "../context/Provider";

const Services = ({ data }) => {
  const { activeColor } = React.useContext(myContext);
  return (
    <Layout>
      {/*       <SEO title="Services" />
       */}
      <Section title="Services">
        <div className="container services">
          <h4 className="title">
            My
            <span
              style={{
                color: activeColor,
              }}
            >
              {" Services"}
            </span>
          </h4>
          <div className="row">
            {data?.site?.siteMetadata?.services.map(
              ({ icon, title, subtitle }) => (
                <ServiceItem
                  key={title}
                  icon={icon}
                  title={title}
                  subtitle={subtitle}
                />
              )
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;

export const query = graphql`
  query ServicesPageQuery {
    site {
      siteMetadata {
        services {
          icon
          title
          subtitle
        }
      }
    }
  }
`;
