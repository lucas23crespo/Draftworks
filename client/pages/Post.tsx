import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getPostBySlug, posts } from "@/data/posts";
import { getAuthorById } from "@/data/authors";
import { TagPill } from "@/components/blog/TagPill";
import { CategoryPill } from "@/components/blog/CategoryPill";
import { PostCard } from "@/components/blog/PostCard";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;
  const author = post
    ? getAuthorById(post.author.toLowerCase().replace(/\s+/g, "-"))
    : null;
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen px-6 pt-24 pb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-light text-white">
            Post Not Found
          </h1>
          <Link
            to="/blog"
            className="text-white/60 transition-colors hover:text-white"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = posts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category ||
          p.tags.some((tag) => post.tags.includes(tag))),
    )
    .slice(0, 3);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-50 h-1 bg-white/30 transition-all duration-200"
        style={{ width: `${readProgress}%` }}
      />

      <div className="pt-24 pb-20 px-6 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <article>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CategoryPill category={post.category} />
                <div className="flex items-center gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  {post.readingTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readingTime} min read
                    </span>
                  )}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-white/60 mb-8">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {author && (
                    <>
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="h-12 w-12 rounded-full ring-2 ring-white/20"
                      />
                      <div>
                        <Link
                          to={`/authors/${author.id}`}
                          className="text-sm font-light tracking-tight text-white transition-colors hover:text-white"
                        >
                          {author.name}
                        </Link>
                        <p className="text-sm text-white/50">{author.role}</p>
                      </div>
                    </>
                  )}
                </div>

                <button className="rounded-lg border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {post.cover && (
              <div className="mb-12 overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full aspect-video object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                {post.content?.split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h1
                        key={i}
                        className="mb-6 text-3xl font-light text-white"
                      >
                        {paragraph.replace("# ", "")}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="mt-8 mb-4 text-2xl font-light text-white"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n");
                    return (
                      <ul
                        key={i}
                        className="mb-6 list-disc list-inside space-y-2 text-white/60"
                      >
                        {items.map((item, j) => (
                          <li key={j}>{item.replace("- ", "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (/^\d+\./.test(paragraph)) {
                    const items = paragraph.split("\n");
                    return (
                      <ol
                        key={i}
                        className="mb-6 list-decimal list-inside space-y-2 text-white/60"
                      >
                        {items.map((item, j) => (
                          <li key={j}>{item.replace(/^\d+\.\s/, "")}</li>
                        ))}
                      </ol>
                    );
                  }
                  return (
                    <p key={i} className="mb-6 leading-relaxed text-white/70">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="mb-12 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>

            {author && (
              <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="mb-4 text-lg font-light text-white">
                  About the Author
                </h3>
                <div className="flex items-start gap-4">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="h-20 w-20 rounded-full ring-2 ring-white/20"
                  />
                  <div className="flex-1">
                    <Link
                      to={`/authors/${author.id}`}
                      className="text-xl font-light text-white transition-opacity hover:opacity-80"
                    >
                      {author.name}
                    </Link>
                    <p className="text-sm text-white/50 mb-2">{author.role}</p>
                    <p className="text-sm text-white/60">{author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </article>

          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h2 className="mb-8 text-3xl font-light text-white">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <PostCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
