import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

const Post = (props) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
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
        title: frontmatter.path.replace("/", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params: { title } }) => {
  const dirs = fs.readdirSync(path.join("src", "contents"));
  const fileContents = dirs.map((dir) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "contents", dir, "index.md"),
      "utf-8"
    );
    const fileContent = matter(markdownWithMeta);
    return fileContent;
  });
  const fileContent = fileContents.find((fc) => fc.data.path === `/${title}`);
  if (fileContent === undefined) {
    console.info("title", title);
    throw new Error("no content");
  }
  const rerender = new marked.Renderer();
  rerender.image = (href) => {
    return `<img src=${
      require("/src/contents/20200610-1st-blog-stack/visual.png").default
    }} />`;
  };
  return {
    props: {
      frontmatter: fileContent.data,
      content: marked(fileContent.content, {
        renderer: rerender,
      }),
    },
  };
};
