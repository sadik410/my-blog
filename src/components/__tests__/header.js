import React from "react";

import renderer from "react-test-renderer";

import { StaticQuery } from "gatsby";
import Header from "../header/Header";

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          header: {
            menus: [
              { link: "/", title: "Home" },
              { link: "/Resume", title: "Resume" },
              { link: "/Services", title: "Services" },
            ],
          },
        },
      },
    })
  );
});

describe("Header", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
