import React, { VFC } from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { BlogPostQuery } from "../types/graphql-type";
// import Img from "gatsby-image";

type DataProps = BlogPostQuery;

// FIXME: any
const Template: VFC<PageProps<DataProps>> = (props) => {
  const { markdownRemark } = props.data; // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark || {};
  if (
    frontmatter === null ||
    frontmatter === undefined ||
    html === null ||
    html === undefined ||
    excerpt === null ||
    excerpt === undefined
  )
    throw new Error("should be");

  const { title } = frontmatter;

  if (title === null || title === undefined) throw new Error("should be");

  return (
    <Layout>
      <Seo title={title} description={excerpt} />
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
};

export default Template;

export const pageQuery = graphql`
  query BlogPost($id: String!) {
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
