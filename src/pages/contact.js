import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"

const inputStyle = {
	// height: `60px`,
	borderRadius: `30px`,
	border: `1px solid slategray`,
	margin: `5px -20px 15px -20px`,
	padding: `15px 20px`,
}

const buttonStyle = {
	flex: 1,
	height: `60px`,
	borderRadius: `30px`,
	border: `1px solid slategray`,
	padding: `15px 20px`,
	margin: `0 1px`,
}

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <form
      method="post"
      action="https://formspree.io/anna.pich@outlook.com"
      style={{ display: `flex`, flexDirection: `column`}}
    >
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" style={inputStyle} />
      <label htmlFor="email">Email</label>
      <input type="email" name="_replyto" id="email" style={inputStyle} />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="5" style={inputStyle} />
      <input type="text" name="_gotcha" style={{ display: `none` }} />
			<div style={{display: `flex`, justifyItems: `stretch`, margin: `2em -20px`}}>
				<button type="submit" style={buttonStyle}>Send</button>
				<input type="reset" style={buttonStyle} value="Clear" />
			</div>
    </form>
  </Layout>
)

export default ContactPage
