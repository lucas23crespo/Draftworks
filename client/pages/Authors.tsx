import { AuthorCard } from '@/components/blog/AuthorCard';
import { authors } from '@/data/authors';

export default function Authors() {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Authors
          </h1>
          <p className="text-xl text-muted-foreground">
            Meet the talented writers behind our stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
}
