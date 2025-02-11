import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDir);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const fileContent = fs.readFileSync(
    path.join(postsDir, `${postSlug}.md`),
    "utf-8"
  );
  const { data, content } = matter(fileContent);

  const postData = { slug: postSlug, ...data, content };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const posts = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = posts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturePosts() {
  return getAllPosts().filter((post) => post.isFeatured);
}
