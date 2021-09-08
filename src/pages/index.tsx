// If you don't want to use TypeScript you can delete this file!
import { graphql,Link, PageProps } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { BlogPostsQuery } from "../types/graphql-type";

type DataProps = BlogPostsQuery;

const UsingTypescript: React.FC<PageProps<DataProps>> = (props) => {
  const nodes = props.data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <Seo title="blog.ojisan.io" />
      <h1>This is 本番が壊れた時用の退避環境</h1>
      {nodes.map((node) => {
        const { path, title } = node.frontmatter || {};
        if (
          path === null ||
          path === undefined ||
          title === null ||
          title === undefined
        ) {
          throw new Error("should be");
        }
        return (
          <Link key={path} to={path}>
            <div style={{ margin: "10px 0px" }}>{title}</div>
          </Link>
        );
      })}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default UsingTypescript;

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          path
          created
        }
        html
      }
    }
  }
`;
