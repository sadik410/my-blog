import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import "../styles/layouts.scss";
import Section from "../components/section/Section";

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Home" />
    <Section title="Home">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/Resume/">Resume</Link> <br />
      <Link to="/Services/">Services</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Section>
  </Layout>
);

export default IndexPage;
