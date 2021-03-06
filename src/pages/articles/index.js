import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"

export default function Article({ data }) {
  // console.log(data)
  return (
    <Layout>
      <div className="container">
        <h4>{data.allMarkdownRemark.totalCount} Articles</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            style={{
              margin: `3rem 0`,
            }}
            key={node.id}
          >
            <Link
              to={node.fields.slug}
              style={{
                textDecoration: `none`,
                color: `inherit`,
              }}
            >
              <h3
                style={{
                  marginBottom: "5px",
                }}
              >
                {node.frontmatter.title}{" "}
                <span style={{ color: `#bbb` }}>— {node.frontmatter.date}</span>
              </h3>
              <p
                style={{
                  fontFamily: `PT Sans`,
                  fontSize: `1rem`,
                  lineHeight: `1.7rem`,
                }}
              >
                {node.excerpt}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { posttype: { eq: "article" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            posttype
            date(formatString: "MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
