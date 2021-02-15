import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const menus = [
  { link: "/", title: "Home" },
  { link: "/Resume", title: "Resume" },
  { link: "/Services", title: "Services" },
];
const Header = () => {
  /*  const currentPage = window.location.href.slice(
    window.location.href.lastIndexOf("/") + 1
  );
 */
  /* const iscurrentPage = ({ title, currentPage }) => {
    currentPage = currentPage === "" ? "Home" : currentPage;
    return currentPage === title ? "active" : "";
  }; */
  return (
    <header
      style={{
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div className="header row justify-content-between">
        <h1 className="name">
          Sadik
          <span> Milliti</span>
        </h1>
        <nav>
          <ul className="">
            {menus.map(({ title, link }) => (
              <li key={title}>
                <Link
                  activeClassName="active"
                  className="link"
                  to={link}
                  state={{ title }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
