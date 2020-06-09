import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import collage from "../images/collage.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section>
      <div
        style={{
          backgroundColor: `rgba(94, 117, 153, 0.3)`,
          display: `flex`,
          padding: `2rem`,
          justifyContent: `center`,
          flexWrap: `wrap`,
        }}
      >
        <img src={collage} alt="anna pichugina collage" class="collage" />
        <div
          style={{
            fontFamily: `PT Sans`,
            lineHeight: `1.5rem`,
            flex: `1 300px`,
          }}
        >
          <p>Thanks for stopping by!</p>
          <p>
            I'm a software engineer and front-end web developer with a
            background in architecture. This is where I keep my coding projects,
            musings and experimentations.
          </p>
          <p>
            I'm currently working on my first open source project contribution,
            so check back soon for a write-up on that experience.
          </p>
          <p>
            This website is also my first foray into using Gatsby to spin up a
            static website using React. This project also uses GraphQL, which is
            another technology I'm excited to be learning.
          </p>
          <p>
            If you have any questions or comments, reach out to me{" "}
            <Link to="/contact">here</Link> or on{" "}
            <a href="https://www.linkedin.com/in/anna-pich/">LinkedIn</a> - I'd
            love to hear from you.
          </p>
        </div>
      </div>
    </section>
    <section></section>
  </Layout>
)

export default IndexPage
