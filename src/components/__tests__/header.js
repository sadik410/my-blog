import * as React from 'react';
import { render, screen } from "@testing-library/react";

import { useStaticQuery } from "gatsby";
import Header from "../header/Header";

const links = [
  { link: "/", title: "Home" },
  { link: "/Resume", title: "Resume" },
  { link: "/Services", title: "Services" },
];

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
      site: {
        siteMetadata: {
          header: {
            menus: links,
          },
        },
      },
    })
  );
});

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
  it("renders a title with my name", () => {
    const { getByText } = render(<Header />);
    expect(getByText((content, element) => {
        return element.tagName.toLowerCase() === 'h1' && element.textContent === 'Sadik Milliti'
    })).toBeInTheDocument();
  });
  it("renders the links in the gatsbyConf", () => {
    const { getByText } = render(<Header />);
    links.forEach(item => {
      const getLink = (content, element) => {
        return element.tagName.toLowerCase() === 'a' && element.textContent === item.title
      }
      expect(getByText(getLink)).toBeInTheDocument();
      expect(getByText(getLink).getAttribute('href')).toEqual(item.link);
    })
  });
});
