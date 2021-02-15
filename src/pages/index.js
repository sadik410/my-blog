import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import "../styles/layouts.scss";
import Section from "../components/section/Section";

const meTab = [
  { label: "Age", value: "30" },
  { label: "Residence", value: "belgium" },
  { label: "Address", value: "27 rue léopold, 1000 bruxelles" },
  { label: "e-mail", value: "sadikosad@gmail.com" },
  { label: "Phone", value: "0032492436675" },
  { label: "Freelance", value: "Available" },
];

const IndexPage = () => {
  const _header = (
    <div className=" home row align-items-center">
      <div className="col-sm-4 col-md-4 col-lg-4">
        <div className="photo">
          <img src="https://i.ibb.co/31BngXc/photo.png" alt="photo" />
        </div>
      </div>
      <div className="col-sm-8 col-md-8 col-lg-8 text-center">
        <div className="title_block"> Sadik Milliti</div>
        <div className="subtitle_block">frontend-developer</div>
        <div>
          <FontAwesomeIcon
            icon={["fab", "apple"]}
            style={{ width: "50px", height: "50px" }}
          />
          <button className="linkedin">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <Layout>
      <SEO title="Home" />
      <Section title="Home" header={_header}>
        <div className="home container  ">
          <div className="home__body row">
            <div className=" col-xs-12 col-sm-6 ">
              <h1 className="about_me">
                About
                <span> Me</span>
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
                {meTab.map(({ label, value }) => (
                  <li key={label}>
                    <span className="label">{label} </span>
                    <span className="value">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;
