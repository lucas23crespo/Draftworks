import { AuthorCard } from "@/components/blog/AuthorCard";
import { authors } from "@/data/authors";

export default function Authors() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-light text-white md:text-5xl">
            Our Authors
          </h1>
          <p className="text-xl text-white/60">
            Meet the talented writers behind our stories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
}
