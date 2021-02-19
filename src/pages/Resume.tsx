import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section/Section";
import ResumeItem from "../components/resume/ResumeItem";
import { myContext } from "../context/Provider";

const Resume = ({ data }) => {
  const { activeColor } = React.useContext(myContext);

  return (
    <Layout>
      {/*       <SEO title="Resume" />
       */}{" "}
      <Section title="Resume">
        <div className="container resume">
          <h1 className="title">
            Ex<span style={{ color: activeColor }}>perience</span>
          </h1>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                {data?.site?.siteMetadata?.resume?.experience.map(
                  ({
                    icon,
                    companyName,
                    duration,
                    role,
                    roleDescription,
                    task,
                  }) => (
                    <ResumeItem
                      key={icon}
                      icon={icon}
                      companyName={companyName}
                      duration={duration}
                      role={role}
                      roleDescription={roleDescription}
                      task={task}
                    />
                  )
                )}
              </div>
            </div>
            <div className="my_skills col-md-12">
              <h1 className="my_skills__title">
                My
                <span style={{ color: activeColor }}> Skills</span>
              </h1>
              <div>
                <ul className="container  row justify-content-between flex-wrap">
                  {data?.site?.siteMetadata?.resume?.mySkills.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Resume;

export const query = graphql`
  query ResumePageQuery {
    site {
      siteMetadata {
        resume {
          experience {
            icon
            companyName
            duration
            role
            roleDescription
            task
          }
          mySkills
        }
      }
    }
  }
`;
