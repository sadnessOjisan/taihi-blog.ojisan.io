const Root = () => {
  return (
    <div>
      <h1>blog.ojisan.io</h1>
      <div>TODO: contents</div>
    </div>
  );
};

export default Root;

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  //   const res = await fetch("https://.../posts");
  //   const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: [],
    },
  };
}
