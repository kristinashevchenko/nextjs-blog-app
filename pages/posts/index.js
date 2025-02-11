import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage({ posts = [] }) {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 600,
  };
}

export default AllPostsPage;
