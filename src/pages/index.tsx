import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { VFC } from "react";

type Props = {
  posts: {
    slug: string;
    frontmatter: {
      [key: string]: any;
    };
  }[];
};

const Root: VFC<Props> = (props) => {
  return (
    <div>
      <h1>blog.ojisan.io</h1>
      <div>
        {props.posts.map((p) => (
          <div>
            <a href={p.slug}>
              <div>
                <p>{JSON.stringify(p.frontmatter)}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Root;

export const getStaticProps: GetStaticProps<Props> = () => {
  const files = fs.readdirSync(path.join("src/contents"));
  const posts = files.map((slug) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "contents", slug, "index.md"),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
};
