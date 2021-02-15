import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section/Section";

const Resume = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <Section title="Resume">
        <div className="container resume">
          <h4 className="title">Experience</h4>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline">
                  <div className="timeline-icon">
                    <i className="fa fa-mobile" />
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">
                      Little Big Smala <span>Jan 2020 – Dec 2021</span>
                    </h3>
                    <p className="description">
                      <p>
                        <span>Front end developer: </span>integrator, React
                        developer , React-Native et React-Native-Web
                      </p>
                      <span>task:</span> Integrating html5 / css3 PSD mockups,
                      Develop React, React-Native and React-Native-Web
                      components, Creating generic components in Storybook
                    </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-icon">
                    <i className="fa fa-rocket"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">
                      Little Big Smala <span>Jan 2020 – Dec 2021</span>
                    </h3>
                    <p className="description">
                      <p>
                        <span>Front end web developer: </span>integrator, React
                        developer , React-Native et React-Native-Web
                      </p>
                      <span>task:</span> Integrating html5 / css3 PSD mockups,
                      Develop React and React-Native components, Creating
                      generic components
                    </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-icon">
                    <i className="fa fa-briefcase"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">
                      3dfordeco <span>Jan 2020 – Dec 2021</span>
                    </h3>
                    <p className="description">
                      <p>
                        <span>Integrator & web-Designer (2D ,3D) : </span>
                        integrator, React developer , React-Native et
                        React-Native-Web
                      </p>
                      <span>task:</span> Creation UX/UI des maquettes PSD,
                      Integrating html5 / css3 PSD mockups ,CMS
                      administration,Creation 3D model with 3DS max
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Resume;
