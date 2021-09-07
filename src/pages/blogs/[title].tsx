import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Post = (props) => {
  console.log(props);
  return <div>hello</div>;
};

export default Post;

export const getStaticPaths = () => {
  const dirs = fs.readdirSync(path.join("src", "contents"));

  const paths = dirs.map((dir) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "contents", dir, "index.md"),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
      params: {
        slug: dir,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params: { title } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "contents", title, "index.md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      title,
      content,
    },
  };
};
