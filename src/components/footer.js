import React from "react"
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai"
import {Link} from 'gatsby'
import GAicon from '../images/GAwhite.png'

const Footer = () => {
	
	const iconStyles = {
		margin: `0 0.3em`,
		fontSize: `23px`,
		color: `white`,
	}

  return (
    <footer
      style={{
        textAlign: `center`,
        background: `slateGray`,
        padding: `2em 0`,
        marginTop: `30px`,
      }}
    >
			<nav>
				<a style={iconStyles} href="https://www.linkedin.com/in/anna-pich/" target="_blank" rel="noreferrer">
					<AiFillLinkedin />
				</a>
				<a style={iconStyles} href="https://github.com/anya-pich" target="_blank" rel="noreferrer">
					<AiFillGithub />
				</a>
				<a style={iconStyles} href="https://profiles.generalassemb.ly/anna-pich" target="_blank" rel="noreferrer">
					<img style={{marginBottom: 0}} src={GAicon} alt="general assembly" />
				</a>
				<Link to="/contact" style={iconStyles}>
					<AiFillMail />
				</Link>
			</nav>
      {/* © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> */}
    </footer>
  )
}

export default Footer
