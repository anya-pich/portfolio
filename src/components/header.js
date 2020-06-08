import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { IoIosEye, IoIosPaper, IoIosChatbubbles } from "react-icons/io"

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo-container">
      <Link to="/">
        <h1 className="logo-text">
          ANNA PICHUGINA —
        </h1>
      </Link>
      <span className="logo-subtitle">
        software engineer, architect, campfire enthusiast
      </span>
    </div>
    <nav
      style={{
        // display: `flex`,
      }}
    >
      <Link className="nav-set" to="/projects">
        <IoIosEye className="nav-icon" />
        <span className="nav-label">PROJECTS</span>
      </Link>
      <Link className="nav-set" to="/articles">
        <IoIosPaper className="nav-icon" />
        <span className="nav-label">WRITINGS</span>
      </Link>
      <Link className="nav-set" to="/contact">
        <IoIosChatbubbles className="nav-icon" />
        <span className="nav-label">CONTACT</span>
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
