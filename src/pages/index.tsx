import React, { useContext } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Section from "../components/section/Section";
import { myContext } from "../context/Provider";

const IndexPage = ({ data }) => {
  const { activeColor } = useContext(myContext);
  const _header = (
    <div className=" home row align-items-center">
      <div className="col-sm-4 col-md-4 col-lg-4">
        <div className="photo">
          <Image name="myPhoto" />
        </div>
      </div>
      <div className="col-sm-8 col-md-8 col-lg-8 text-center">
        <div className="title_block"> Sadik Milliti</div>
        <div className="subtitle_block">frontend-developer</div>

        <button className="linkedin">
          <i className="fa fa-linkedin" aria-hidden="true" />
        </button>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <Section title="Home" header={_header}>
        <div className="home container  ">
          <div className="home__body row">
            <div className=" col-xs-12 col-sm-6 ">
              <h1 className="about_me">
                About
                <span style={{ color: activeColor }}> Me</span>
              </h1>
              <p>
                Always passionate about computers and new technologies, the
                world of the web is my favorite field, I master ui / ux and
                development, I am very versatile, curious and rigorous and I
                adapt to any circumstance. Sense of responsibility,
                perseverance, discernment and management of priorities.
              </p>
            </div>
            <div className=" col-xs-12 col-sm-6  ">
              <ul>
                {data?.site?.siteMetadata?.home?.personalInfor.map(
                  ({ label, value }) => (
                    <li key={label}>
                      <span className="label">{label} </span>
                      <span className="value">{value}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        home {
          personalInfor {
            label
            value
          }
        }
      }
    }
  }
`;
