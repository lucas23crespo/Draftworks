import { useState, useMemo } from 'react';
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
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            All Posts
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our collection of writing insights and stories
          </p>
        </div>

        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Categories:</span>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  !selectedCategory 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-card/60 text-muted-foreground hover:bg-card'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    selectedCategory === cat.name
                      ? 'bg-indigo-500 text-white'
                      : 'bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground font-medium self-center">Tags:</span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                !selectedTag
                  ? 'bg-purple-500 text-white'
                  : 'border border-purple-500/30 text-purple-400 hover:border-purple-500/50'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  selectedTag === tag
                    ? 'bg-purple-500 text-white'
                    : 'border border-purple-500/30 text-purple-400 hover:border-purple-500/50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No posts found matching your criteria.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              Showing {filteredPosts.length} of {posts.length} posts
            </div>
          </>
        )}
      </div>
    </div>
  );
}
