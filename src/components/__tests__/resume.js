import * as React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import Resume from "../../pages/Resume";

const mySkills = [
  "Javascript ES6",
  "reactJs",
  "react-native",
  " React-Native-Web",
  "Redux",
  "GIT",
  "storybook",
  "HTML",
  "CSS",
  "SASS",
  "LESS",
  "Styled Components",
];
beforeAll(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        resume: {
          experience: [
            {
              icon: "fa fa-mobile",
              companyName: "Little Big Smala",
              duration: "Jan 2020 – Dec 2021",
              role: "Front end developer",
              roleDescription:
                "integrator, React developer , React-Native et React-Native-Web",
              task:
                " Integrating html5 / css3 PSD mockups, Develop React, React-Native and React-Native-Web components, Creating generic components in Storybook",
            },
            {
              icon: "fa fa-rocket ",
              companyName: "Toolynk",
              duration: "AVR 2018 – Jan 2020",
              role: "Front end developer",
              roleDescription: "integrator, React developer , React-Native",
              task:
                "Integrating html5 / css3 PSD mockups,Develop React and React-Native components, Creating generic components",
            },
            {
              icon: "fa fa-briefcase",
              companyName: "3dfordeco",
              duration: "MARCH 2016 – MARCH 2018",
              role: "Integrator & web-Designer (2D ,3D)",
              roleDescription:
                "integrator, React developer , React-Native et React-Native-Web",
              task:
                "Creation UX/UI des maquettes PSD, Integrating html5 / css3 PSD mockups ,CMS administration,Creation 3D model with 3DS max",
            },
          ],
          mySkills,
        },
        panelColors: [],
      },
    }
  }));
});

afterAll(() => {
  useStaticQuery.mockRestore();
});

describe("Home", () => {
  it("renders correctly", () => {
    const { container } = render(<Resume />);
    expect(container).toMatchSnapshot();
  });
  it("render name correctly ", () => {
    const { getByText } = render(<Resume />);
    expect(
      getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "h1" &&
          element.textContent === "Experience"
        );
      })
    ).toBeInTheDocument();
  });

  /* it("render role correctly ", () => {
    const { getByText } = render(<Resume />);
    mySkills.forEach((item) => {
      const getTagLi = (content, element) => {
        return element.tagName.toLowerCase() === "li";
      };
      expect(getByText(getTagLi)).toBeInTheDocument();
    });
  }); */
});
