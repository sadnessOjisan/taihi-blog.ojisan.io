import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
// import Img from "gatsby-image";

// FIXME: any
export default function Template(props: any) {
  const { markdownRemark } = props.data; // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark;
  return (
    <Layout>
      <Seo title={frontmatter.title} description={excerpt} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        {/* <Img fluid={frontmatter.visual.childImageSharp.fluid} /> */}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
        visual {
          childImageSharp {
            fluid(maxWidth: 800) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
      excerpt(pruneLength: 140)
    }
  }
`;
