import React from "react";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { StaticQuery } from "gatsby";
import Index from "../../pages/index";

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          home: {
            personalInfor: [
              { label: "Age", value: "30" },
              { label: "Residence", value: "belgium" },
              { label: "Address", value: "27 rue léopold, 1000 bruxelles" },
              { label: "e-mail", value: "sadikosad@gmail.com" },
              { label: "Phone", value: "0032492436675" },
              { label: "Freelance", value: "Available" },
            ],
          },
        },
      },
    })
  );
});

describe("Home", () => {
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          home: {
            personalInfor: [
              { label: "Age", value: "30" },
              { label: "Residence", value: "belgium" },
              { label: "Address", value: "27 rue léopold, 1000 bruxelles" },
              { label: "e-mail", value: "sadikosad@gmail.com" },
              { label: "Phone", value: "0032492436675" },
              { label: "Freelance", value: "Available" },
            ],
          },
        },
      },
    };
    const component = renderer.create(<Index data={data} />).toJSON();
    expect(component).toMatchSnapshot();

    const { container, getByText } = render(<Index data={data} />);

    getByText((content, element) => {
      return console.log("getByTextgetByText", element.textContent);
    });

    /*     expect(getByText("Freelance")).toBeInTheDocument();
     */
  });
});
