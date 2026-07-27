"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import { CursorTrail } from "@/components/CursorTrail";
import { useReveal } from "@/hooks/useReveal";
import { urlFor } from "@/sanity/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import { formatRussianDate } from "../BlogClient";

interface BlogPost {
  slug: { current: string };
  title: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  category?: string;
  author?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[];
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-body text-base sm:text-lg text-pencil leading-relaxed mb-6">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink-dark mt-10 mb-4 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink-dark mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 p-6 md:p-8 bg-yellow-light/20 border-l-4 border-yellow rounded-r-2xl font-body italic text-base sm:text-lg text-ink-dark shadow-sm rotate-[0.5deg]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="flex flex-col gap-3.5 my-6 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="flex flex-col gap-3.5 my-6 pl-6 list-decimal">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-base text-ink-dark font-medium">
        <span className="w-5 h-5 rounded-full bg-coral/10 text-coral flex items-center justify-center shrink-0 mt-0.5">
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
              d="M1 4L3.5 6.5L9 1.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="leading-relaxed">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-base text-ink-dark font-medium leading-relaxed">
        {children}
      </li>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value) return null;
      return (
        <div className="my-8 relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-line-blue/40 bg-paper-dark">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      );
    }
  }
};

export function PostClient({ post }: { post: BlogPost }) {
  useReveal();

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip font-body">
      <CursorTrail />

      <Header />

      <main className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-5 md:px-10">
          
          {/* ── Back button ── */}
          <div className="mb-10 reveal">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ink-dark hover:text-coral transition-colors font-heading text-xs font-extrabold uppercase tracking-widest group"
              style={{ textDecoration: "none" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1">
                <path
                  d="M13 8H3M7 12L3 8l4-4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Назад к статьям
            </Link>
          </div>

          <article className="max-w-4xl mx-auto">
            {/* ── Article Header ── */}
            <div className="mb-12 reveal">
              {/* Category + Meta details */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-heading text-[10px] font-bold tracking-wider text-coral uppercase bg-coral-light/10 border border-coral/10 px-3.5 py-1 rounded-full">
                  {post.category || 'Блог'}
                </span>
                <span className="text-sm text-pencil font-medium">
                  {post.date ? (
                    <time dateTime={post.date}>{formatRussianDate(post.date)}</time>
                  ) : (
                    <span>{formatRussianDate('')}</span>
                  )}
                  {" • "}{post.readTime || '5 мин'} чтения
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-ink-dark tracking-tight mb-8">
                {post.title}
              </h1>

              {/* Author & Info */}
              <div className="flex items-center gap-4 border-y border-line-blue/60 py-5">
                <div className="w-10 h-10 rounded-full bg-coral-light/25 border border-coral-light/20 flex items-center justify-center font-heading text-xs font-black text-coral select-none">
                  {post.author ? post.author.slice(0, 1) : 'T'}
                </div>
                <div>
                  <span className="block text-sm font-bold text-ink-dark leading-none">
                    {post.author || 'traffic63 Team'}
                  </span>
                  <span className="text-xs text-pencil mt-1 block">
                    Редакция
                  </span>
                </div>
              </div>
            </div>

            {/* ── Featured Image Illustration ── */}
            <div className="reveal relative w-full aspect-[16/9] bg-paper-dark border border-line-blue/60 rounded-[32px] overflow-hidden flex items-center justify-center mb-12 group">
              {/* SVG Blueprint Grid Background */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="post-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--line-blue)" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#post-grid)" />
              </svg>

              {post.image ? (
                <>
                  {/* Premium Ambient Blur Background */}
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                    <Image
                      src={urlFor(post.image).width(200).url()}
                      alt="blur background"
                      fill
                      className="object-cover blur-3xl scale-125 opacity-40 transition-all duration-700 ease-out group-hover:scale-150 group-hover:opacity-60"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Main Foreground Image */}
                  <div className="relative w-full h-full z-20 p-4 sm:p-8 flex items-center justify-center">
                    <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                      <Image
                        src={urlFor(post.image).width(1200).url()}
                        alt={post.title}
                        fill
                        sizes="(max-width: 992px) 100vw, 80vw"
                        className="object-contain drop-shadow-2xl dark-theme-image"
                        priority
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative z-20 w-full h-full p-8">
                  <div className="w-full h-full bg-line-blue/10 rounded-2xl" />
                </div>
              )}
            </div>

            {/* ── Article Content ── */}
            <div className="reveal prose max-w-none mb-16">
              <PortableText value={post.content || []} components={portableTextComponents} />
            </div>
          </article>

          {/* ── Share / Navigation Footer ── */}
          <div className="max-w-4xl mx-auto border-t border-line-blue/60 pt-8 flex items-center justify-between reveal">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-pencil hover:text-coral transition-colors font-heading text-xs font-extrabold uppercase tracking-widest group"
              style={{ textDecoration: "none" }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
                <path
                  d="M13 8H3M7 12L3 8l4-4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Ко всем статьям
            </Link>
          </div>

        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
