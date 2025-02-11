import classes from "./post-grid.module.css";
import PostsItem from "./post-item";

function PostsGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostsItem
          key={post.slug}
          slug={post.slug}
          date={post.date}
          image={post.image}
          title={post.title}
          excerpt={post.excerpt}
        />
      ))}
    </ul>
  );
}

export default PostsGrid;
