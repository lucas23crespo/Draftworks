import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Post } from '@/types/blog';
import { TagPill } from './TagPill';
import { CategoryPill } from './CategoryPill';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured';
}

export function PostCard({ post, variant = 'default' }: PostCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block h-full"
    >
      <article className="h-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <CategoryPill category={post.category} />
            <div className="flex items-center gap-4 text-xs text-white/40">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              {post.readingTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime} min read
                </span>
              )}
            </div>
          </div>
          
          <h3 className={`font-light text-white mb-3 tracking-tight line-clamp-2 ${variant === 'featured' ? 'text-2xl' : 'text-xl'}`}>
            {post.title}
          </h3>
          
          <p className="mb-6 line-clamp-3 text-sm text-white/60">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <TagPill key={tag} tag={tag} variant="outline" />
              ))}
            </div>
            
            <span className="text-sm text-white/40">
              by {post.author}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
