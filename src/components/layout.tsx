import React from "react";

import Header from "./header/header";
import "./layout.css";
import "../styles/layouts.scss";

import PanelSwitcher from "./PanelSwitcher";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="container">
      <PanelSwitcher />
      <Header />
      <div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
