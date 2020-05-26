import React from "react"
import {
  IoIosMail,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdSchool,
} from "react-icons/io"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <nav
        style={{
          display: `flex`,
          margin: `2em auto`,
          justifyContent: `center`,
        }}
      >
        <a
          href="https://www.linkedin.com/in/anna-pich/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/anya-pich" target="_blank" rel="noreferrer">
          <IoLogoGithub />
        </a>
        <a
          href="https://profiles.generalassemb.ly/anna-pich"
          target="_blank"
          rel="noreferrer"
        >
          <IoMdSchool />
        </a>
        <Link to="/contact">
          <IoIosMail />
        </Link>
      </nav>
      <div className="subtext" style={{ textAlign: `center` }}>
        © {new Date().getFullYear()}, Built with
        <a
          style={{ fontSize: `1em`, display: `inline` }}
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </a>
      </div>
    </footer>
  )
}

export default Footer
