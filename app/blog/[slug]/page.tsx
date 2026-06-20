import { client } from "@/sanity/client";
import { PostClient } from "./PostClient";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ title, excerpt }`,
    { slug }
  );

  if (!post) {
    return {
      title: "Статья не найдена — traffic63",
    };
  }

  return {
    title: `${post.title} — traffic63`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      slug,
      title,
      excerpt,
      date,
      readTime,
      category,
      author,
      image,
      content
    }`,
    { slug }
  );

  if (!post) {
    notFound();
  }

  return <PostClient post={post} />;
}
