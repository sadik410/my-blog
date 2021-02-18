import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { myContext } from "../../context/Provider";

const Header = () => {
  const { activeColor } = React.useContext(myContext);

  const data = useStaticQuery(graphql`
    query HeaderMenuQuery {
      site {
        siteMetadata {
          header {
            menus {
              link
              title
            }
          }
        }
      }
    }
  `);

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
          <span style={{ color: activeColor }}> Milliti</span>
        </h1>
        <nav>
          <ul className="">
            {data?.site?.siteMetadata?.header?.menus.map(({ title, link }) => (
              <li key={title}>
                <Link
                  activeClassName="active"
                  className="link"
                  to={link}
                  state={{ title }}
                  activeStyle={{ borderColor: activeColor }}
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

export default Header;
