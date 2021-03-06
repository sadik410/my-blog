import * as React from 'react';
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import Index from "../../pages/index";

beforeAll(() => {
  useStaticQuery.mockImplementation(() => ({
      siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        home: {
          personalInfor: [
            {label: "Age", value: "30"},
            {label: "Residence", value: "belgium"},
            {label: "Address", value: "27 rue léopold, 1000 bruxelles"},
            {label: "e-mail", value: "sadikosad@gmail.com"},
            {label: "Phone", value: "0032492436675"},
            {label: "Freelance", value: "Available"},
          ],
        },
      },
      myPhoto: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            sizes: `100 200 300`,
            src: `pretend-i-am-a-base64-encoded-image`,
            srcSet: `asdfasdf`,
          },
        },
      },
      photoo: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            sizes: `100 200 300`,
            src: `pretend-i-am-a-base64-encoded-image`,
            srcSet: `asdfasdf`,
          },
        },
      }
    }));
});

afterAll(() => {
  useStaticQuery.mockRestore();
})

describe("Home", () => {
  it("renders correctly", () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
  });
  it("render an ", () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
  });
});
