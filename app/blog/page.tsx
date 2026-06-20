import { client } from "@/sanity/client";
import { BlogClient } from "./BlogClient";

export const metadata = {
  title: "Блог — traffic63",
  description: "Делимся практическим опытом, кейсами автоматизации и секретами performance-маркетинга. Всё, что помогает вашему бизнесу расти быстрее.",
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(date desc) {
      slug,
      title,
      excerpt,
      date,
      readTime,
      category,
      author,
      image
    }`
  );

  return <BlogClient posts={posts} />;
}
