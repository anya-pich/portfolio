import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const linkStyles = {
  margin: `0 0.5em`,
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `slategray`,
      marginBottom: `1.45rem`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      padding: `2em`,
    }}
  >
    <h1 style={{
      marginBottom: `0.3em`,
    }}>
      <Link
        to="/"
        style={linkStyles}
      >
        Anna Pichugina
      </Link>
    </h1>

    <nav style={{
      display: `flex`,
    }}>
      <Link to="/projects" style={linkStyles}>Projects</Link>
      <Link to="/articles" style={linkStyles}>Articles</Link>
      <Link to="/contact" style={linkStyles}>Say hi!</Link>
    </nav>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
