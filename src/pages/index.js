import React from "react"

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
        <img
          src={collage}
          alt="anna pichugina collage"
          style={{
            margin: `-3rem 2rem -3rem -3rem`,
            maxWidth: `60%`,
            flex: `1 300px`,
          }}
        />
        <div
          style={{
            fontFamily: `PT Sans`,
            lineHeight: `1.5rem`,
            flex: `1 300px`,
          }}
        >
          <p>Thanks for stopping by!</p>
          <p>
            I'm building this website as a pretext to learn and play around with
            Gatsby and GraphQL - and in order to have a place to showcase my
            other coding projects and musings, of course.
          </p>
          <p>
            I'm a full-stack software engineer with a background in
            architecture, an eye for usability and a knack for creative
            solutions. Experienced at working on cross-functional teams to
            deliver complex projects in ever-changing environments. Driven
            learner, curious about emerging tech and really into elegant code
          </p>
        </div>
      </div>
    </section>
    <section></section>
  </Layout>
)

export default IndexPage
