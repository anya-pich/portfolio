import React from "react"
import {
  IoIosMail,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdSchool,
} from "react-icons/io"
import {Link} from 'gatsby'

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
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
