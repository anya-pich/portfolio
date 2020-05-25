import React from 'react'

const Footer = () => {
	return (
		<footer style={{
			textAlign: `center`,
			background: `slateGray`,
			padding: `2em 0`,
			marginTop: `30px`,
		}}>
			<p>Hi there!</p>
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.org">Gatsby</a>
		</footer>
	)
}

export default Footer
