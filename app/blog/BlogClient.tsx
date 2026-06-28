"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import { CursorTrail } from "@/components/CursorTrail";
import { useReveal } from "@/hooks/useReveal";
import { urlFor } from "@/sanity/image";

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
}

export function formatRussianDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).replace(' г.', '');
}

export function BlogClient({ posts }: { posts: BlogPost[] }) {
  useReveal();

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="relative min-h-screen bg-paper overflow-x-clip font-body">
      <CursorTrail />

      <Header />

      <main className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-5 md:px-10">
          
          {/* ── Page Header ── */}
          <div className="max-w-3xl mb-16 reveal">
            <span className="font-heading text-[10px] font-extrabold tracking-widest text-coral uppercase mb-6 block select-none">
              ✦ Инсайты и маркетинг
            </span>

            <h1 className="font-heading text-4xl sm:text-7xl lg:text-[110px] font-black leading-[0.95] text-ink-dark tracking-tighter uppercase select-none mb-12">
              Наш <br />
              <span className="font-serif italic text-coral lowercase font-normal tracking-normal">блог.</span>
            </h1>

            {/* Description Row (border-t separated) */}
            <div className="border-t border-line-blue pt-10 text-left">
              <p className="font-body text-lg md:text-xl lg:text-[22px] text-pencil leading-relaxed font-medium max-w-[720px]">
                Делимся практическим опытом, кейсами автоматизации и секретами performance-маркетинга. Всё, что помогает вашему бизнесу расти быстрее.
              </p>
            </div>
          </div>

          {/* ── FEATURED POST ── */}
          {featuredPost && (
            <div className="reveal mb-16 md:mb-20">
              <Link 
                href={`/blog/${featuredPost.slug.current}`}
                className="group flex flex-col lg:flex-row bg-paper-dark border border-line-blue/60 rounded-[32px] overflow-hidden hover:shadow-lg hover:-translate-y-1.5 transition-all duration-500 relative"
                style={{ textDecoration: "none" }}
              >
                {/* SVG Blueprint Grid Background */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="featured-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--line-blue)" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#featured-grid)" />
                </svg>

                {/* Left Side: Text Details */}
                <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="font-heading text-[10px] font-bold tracking-wider text-coral uppercase bg-coral-light/10 border border-coral/10 px-3 py-1 rounded-full">
                        🔥 Главная статья / {featuredPost.category || 'Блог'}
                      </span>
                      <span className="text-xs text-pencil font-medium">
                        {formatRussianDate(featuredPost.date || '')} • {featuredPost.readTime || '5 мин'} чтения
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-ink-dark leading-tight group-hover:text-coral transition-colors duration-300 mb-6">
                      {featuredPost.title}
                    </h2>

                    <p className="font-body text-pencil text-base leading-relaxed mb-8 max-w-xl">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-line-blue/60 pt-6">
                    <span className="text-xs text-pencil font-semibold">
                      {featuredPost.author || 'traffic63 Team'}
                    </span>
                    <div className="inline-flex items-center gap-2 text-ink-blue font-bold text-xs uppercase tracking-widest group-hover:text-coral transition-colors duration-300">
                      Читать статью
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Side: Image/Illustration */}
                <div className="lg:w-2/5 min-h-[280px] bg-paper-dark border-t lg:border-t-0 lg:border-l border-line-blue/60 flex items-center justify-center p-8 relative z-10 overflow-hidden">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-750">
                    {featuredPost.image ? (
                      <Image
                        src={urlFor(featuredPost.image).width(400).url()}
                        alt={featuredPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-contain dark-theme-image"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full bg-line-blue/10 rounded-2xl" />
                    )}
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ── REGULAR POSTS GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20">
            {regularPosts.map((post, idx) => (
              <div 
                key={idx}
                className="reveal flex"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group w-full bg-paper-dark border border-line-blue/60 rounded-[32px] overflow-hidden flex flex-col justify-between hover:shadow-lg hover:-translate-y-1.5 transition-all duration-500 relative"
                  style={{ textDecoration: "none" }}
                >
                  {/* SVG Blueprint Grid Background */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`grid-${idx}`} width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--line-blue)" strokeWidth="0.8" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${idx})`} />
                  </svg>

                  <div className="p-8 md:p-10 flex flex-col justify-between flex-grow relative z-10">
                    <div>
                      {/* Category + Meta details */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <span className="font-heading text-[9px] font-extrabold tracking-widest text-coral uppercase bg-coral-light/10 border border-coral/10 px-2.5 py-0.5 rounded-full">
                          {post.category || 'Блог'}
                        </span>
                        <span className="text-[10px] text-pencil font-medium">
                          {formatRussianDate(post.date || '')} • {post.readTime || '5 мин'}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-ink-dark leading-tight group-hover:text-coral transition-colors duration-300 mb-4">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-body text-pencil text-sm leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div className="border-t border-line-blue/60 pt-5 flex items-center justify-between gap-4 mt-auto">
                      <span className="text-xs text-pencil font-semibold">
                        {post.author || 'traffic63 Team'}
                      </span>
                      <div className="inline-flex items-center gap-1.5 text-ink-blue font-bold text-xs uppercase tracking-widest group-hover:text-coral transition-colors duration-300">
                        Читать
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
