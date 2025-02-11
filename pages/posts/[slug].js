import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export async function getStaticProps(ctx) {
  const slug = ctx.params.slug;
  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const slugs = getPostsFiles().map((file) => file.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostPage;
