import { client } from "@/sanity/client";
import { PostClient } from "./PostClient";
import { notFound } from "next/navigation";
import { getArticleJsonLd } from "@/app/seo/jsonld";
import { urlFor } from "@/sanity/image";

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
    `*[_type == "post" && slug.current == $slug][0]{ title, excerpt, date, author, image }`,
    { slug }
  );

  if (!post) {
    return {
      title: "Статья не найдена — traffic63",
    };
  }

  const imageUrl = post.image ? urlFor(post.image).width(1200).height(630).url() : undefined;

  return {
    title: `${post.title} — traffic63`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${slug}`,
      publishedTime: post.date,
      authors: post.author ? [post.author] : ["traffic63 Team"],
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
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

  const imageUrl = post.image ? urlFor(post.image).width(1200).height(630).url() : undefined;
  
  const jsonLd = getArticleJsonLd({
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    author: post.author,
    imageUrl: imageUrl,
    url: `https://traffic63.ru/blog/${slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostClient post={post} />
    </>
  );
}
