import { allPosts } from "content-collections";

export default async function sitemap() {
  let blogs = allPosts.map((post) => ({
    url: `https://ikhwan-butcher.vercel.app/blog/${post.slug}`,
    lastModified: post.createdAt,
  }));

  let routes = ["", "/blog", "/contact"].map((route) => ({
    url: `https://ikhwan-butcher.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
