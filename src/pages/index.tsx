// If you don't want to use TypeScript you can delete this file!
import * as React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

type DataProps = {
  allMarkdownRemark: {
    nodes: {
      frontmatter: { title: string; path: string; created: string };
      html: string;
    }[];
  };
};

const UsingTypescript: React.FC<PageProps<DataProps>> = (props) => {
  return (
    <Layout>
      <Seo title="blog.ojisan.io" />
      <h1>本番が壊れた時の退避 環境</h1>
      {props.data.allMarkdownRemark.nodes.map((node) => (
        <Link key={node.frontmatter.path} to={node.frontmatter.path}>
          <div>{node.frontmatter.title}</div>
        </Link>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default UsingTypescript;

export const query = graphql`
  {
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
