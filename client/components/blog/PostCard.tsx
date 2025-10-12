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
      <article className="h-full bg-card/60 backdrop-blur-sm border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
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
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
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
          
          <h3 className={`font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent line-clamp-2 ${variant === 'featured' ? 'text-2xl' : 'text-xl'}`}>
            {post.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <TagPill key={tag} tag={tag} variant="outline" />
              ))}
            </div>
            
            <span className="text-sm text-muted-foreground">
              by {post.author}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
