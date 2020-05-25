import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
		<form method="post" action="https://formspree.io/anna.pich@outlook.com">
			<label>
				Name
				<input type="text" name="name" id="name" />
			</label>
			<label>
				Email
				<input type="email" name="_replyto" id="email" />
			</label>
			<label>
				Subject
				<input type="text" name="subject" id="subject" />
			</label>
			<label>
				Message
				<textarea name="message" id="message" rows="5" />
			</label>
			<input type="text" name="_gotcha" style={{display: `none`}} />
			<button type="submit">Send</button>
			<input type="reset" value="Clear" />
		</form>
  </Layout>
)

export default ContactPage
