import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Root = (props) => {
  console.log(props);
  return (
    <div>
      <h1>blog.ojisan.io</h1>
      <div>TODO: contents</div>
    </div>
  );
};

export default Root;

export async function getStaticProps() {
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
}
