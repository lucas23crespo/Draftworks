import { useMemo, useState } from 'react';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { PostCard } from '@/components/blog/PostCard';
import { TagPill } from '@/components/blog/TagPill';
import { CategoryPill } from '@/components/blog/CategoryPill';
import { posts } from '@/data/posts';
import { categories } from '@/data/categories';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  return (
    <div className="min-h-screen px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-light text-white md:text-5xl">
            All Posts
          </h1>
          <p className="text-xl text-white/60">
            Explore our collection of writing insights and stories
          </p>
        </div>

        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-4 text-sm text-white/70 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-light uppercase tracking-[0.3em] text-white/40">Categories</span>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`rounded-full px-4 py-2 text-[11px] font-light uppercase tracking-[0.25em] transition-colors ${
                  !selectedCategory
                    ? 'bg-white/10 text-white'
                    : 'border border-white/10 text-white/50 hover:bg-white/5'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`rounded-full px-4 py-2 text-[11px] font-light uppercase tracking-[0.25em] transition-colors ${
                    selectedCategory === cat.name
                      ? 'bg-white/10 text-white'
                      : 'border border-white/10 text-white/50 hover:bg-white/5'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="self-center text-xs font-light uppercase tracking-[0.3em] text-white/40">Tags</span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`rounded-full px-3 py-1 text-[11px] font-light uppercase tracking-[0.25em] transition-colors ${
                !selectedTag
                  ? 'bg-white/10 text-white'
                  : 'border border-white/10 text-white/50 hover:bg-white/5'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full px-3 py-1 text-[11px] font-light uppercase tracking-[0.25em] transition-colors ${
                  selectedTag === tag
                    ? 'bg-white/10 text-white'
                    : 'border border-white/10 text-white/50 hover:bg-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-xl text-white/60">No posts found matching your criteria.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-white/40">
              Showing {filteredPosts.length} of {posts.length} posts
            </div>
          </>
        )}
      </div>
    </div>
  );
}
