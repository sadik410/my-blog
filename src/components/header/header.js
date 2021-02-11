import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const menus = [
  { link: "/", title: "Home" },
  { link: "/Resume", title: "Resume" },
  { link: "/Services", title: "Services" },
]
const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav>
        <ul className="md-3">
        {menus.map(menu => (
          <li>
            <Link
              className="link"
              to={menu.link}
              
            >
              {menu.title}
            </Link>
          </li>
        ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
