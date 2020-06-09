import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { IoIosEye, IoIosPaper, IoIosChatbubbles } from "react-icons/io"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/" className="no-underline">
        <h1 className="logo">
          ANNA PICHUGINA —
        </h1>
      </Link>
      <span className="subtext">
        software engineer, architect, campfire enthusiast
      </span>
    </div>
    <nav
      style={{
        display: `flex`,
      }}
    >
      <Link className="icon no-underline" to="/projects">
        <IoIosEye />
        <span className="subtext">PROJECTS</span>
      </Link>
      <Link className="icon no-underline" to="/articles">
        <IoIosPaper />
        <span className="subtext">WRITINGS</span>
      </Link>
      <Link className="icon no-underline" to="/contact">
        <IoIosChatbubbles />
        <span className="subtext">CONTACT</span>
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// <div
//   style={{
//     margin: `0 auto`,
//     maxWidth: 960,
//     padding: `1.45rem 1.0875rem`,
//   }}
// >
//   <h1 style={{ margin: 0 }}>
//     <Link
//       to="/"
//       style={{
//         color: `white`,
//         textDecoration: `none`,
//       }}
//     >
//       {siteTitle}
//     </Link>
//   </h1>
// </div>
