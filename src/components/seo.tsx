import { graphql,useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

import { SeoSiteQuery } from "../types/graphql-type";

type Props = {
  description?: string;
  title: string;
};

const Seo: React.VFC<Props> = ({ description, title }) => {
  const { site } = useStaticQuery<SeoSiteQuery>(
    graphql`
      query SeoSite {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const {
    title: gqlTitle,
    description: gqlDescription,
    author: gqlAuthor,
  } = site?.siteMetadata || {};

  const metaDescription = description || gqlDescription;
  const defaultTitle = gqlTitle;

  if (
    metaDescription === undefined ||
    metaDescription === null ||
    defaultTitle === undefined ||
    defaultTitle === null ||
    gqlAuthor === undefined ||
    gqlAuthor === null
  ) {
    throw new Error();
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: gqlAuthor,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

export default Seo;
