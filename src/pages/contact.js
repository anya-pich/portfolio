import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div
      style={{
        padding: `3rem`,
      }}
    >
      <form
        method="post"
        action="https://formspree.io/anna.pich@outlook.com"
        style={{ display: `flex`, flexDirection: `column` }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="inputField" />
        <label htmlFor="email">Email</label>
        <input type="email" name="_replyto" id="email" className="inputField" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="7" className="inputField" />
        <input type="text" name="_gotcha" style={{ display: `none` }} />
        <div
          style={{
            display: `flex`,
            justifyItems: `stretch`,
            margin: `2em -1rem`,
          }}
        >
          <button type="submit" className="button">
            Send
          </button>
          <input type="reset" className="button" value="Clear" />
        </div>
      </form>
    </div>
  </Layout>
)

export default ContactPage
