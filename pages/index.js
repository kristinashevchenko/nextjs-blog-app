import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturePosts } from "../lib/posts-util";

function HomePage({ posts = [] }) {
  return (
    <>
      <Head>
        <title>Krystsina blog</title>
        <meta name="description" content="I post about web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getFeaturePosts();

  return {
    props: {
      posts,
    },
    revalidate: 600,
  };
}

export default HomePage;
