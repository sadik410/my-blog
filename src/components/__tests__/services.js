import * as React from "react";
import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import Services from "../../pages/Services";

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
      "we develop mobile applications with react-native & react-native-web",
  },
  {
    icon: " fa fa-desktop ",
    title: "Web Design",
    subtitle: "we do the design for web and mobile applications",
  },
];
beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    siteMetadata: {
      title: `Gatsby Default Starter`,
      description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
      author: `@gatsbyjs`,
      services,
    },
  }));
});

afterAll(() => {
  useStaticQuery.mockRestore();
});

describe("Home", () => {
  it("renders correctly", () => {
    const { container } = render(<Services />);
    expect(container).toMatchSnapshot();
  });
  it("render My Services correctly ", () => {
    const { getByText } = render(<Services />);
    expect(
      getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "h4" &&
          element.textContent === "My Services"
        );
      })
    ).toBeInTheDocument();
  });

  /* it("render My Services correctly ", () => {
    const { getByText } = render(<Services />);
    screen.debug();
    expect(
      getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "h4" &&
          element.textContent === "Web Development"
        );
      })
    ).toBeInTheDocument();
  }); */
  /* it("render role correctly ", () => {
    const { getByText } = render(<Services />);
    mySkills.forEach((item) => {
      const getTagLi = (content, element) => {
        return element.tagName.toLowerCase() === "li";
      };
      expect(getByText(getTagLi)).toBeInTheDocument();
    });
  }); */
});
