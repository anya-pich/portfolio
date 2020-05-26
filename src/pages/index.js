import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"
import collage from "../images/collage.png"
import {
  IoIosEye,
  IoIosPaper,
  IoIosChatbubbles,
  IoIosMail,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdSchool,
} from "react-icons/io"

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <header
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: "flex-end",
        marginBottom: `2em`,
      }}
    >
      <div>
        <h1
          style={{
            fontFamily: `Oswald`,
            fontWeight: `bold`,
            fontSize: `60px`,
            letterSpacing: `-0.02em`,
            color: `#FFE552`,
            left: `120px`,
            margin: `50px 0 10px 0`,
          }}
        >
          ANNA PICHUGINA —
        </h1>
        <span className="subtext">
          software engineer, architect, campfire enthusiast
        </span>
      </div>
      <nav
        style={{
          display: `flex`,
        }}
      >
        <Link className="icon" to="/projects">
          <IoIosEye />
          <span className="subtext">PROJECTS</span>
        </Link>
        <Link className="icon" to="/articles">
          <IoIosPaper />
          <span className="subtext">WRITINGS</span>
        </Link>
        <Link className="icon" to="/contact">
          <IoIosChatbubbles />
          <span className="subtext">CONTACT</span>
        </Link>
      </nav>
    </header>
    <main
      style={{
        flex: 1,
      }}
    >
      <section // first section
        style={{
          marginTop: `1rem`,
        }}
      >
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
              flex: 1,
              fontFamily: `PT Sans`,
              lineHeight: `1.5rem`,
              flex: `1 300px`,
            }}
          >
            <p>Hello, thanks for stopping by!</p>
            <p>
              I'm building this website as a pretext to learn and play around
              with Gatsby and GraphQL - and in order to have a place to showcase
              my other coding projects and musings, of course.
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
    </main>
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
    </footer>
  </div>
)

export default IndexPage
