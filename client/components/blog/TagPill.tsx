import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface TagPillProps {
  tag: string;
  variant?: 'default' | 'outline';
  className?: string;
}

export function TagPill({ tag, variant = 'default', className }: TagPillProps) {
  return (
    <Link
      to={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
      className={cn(
        "inline-block rounded-full px-3 py-1 text-[11px] font-light uppercase tracking-[0.3em] transition-colors",
        variant === 'default' && "border border-white/15 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white",
        variant === 'outline' && "border border-white/10 text-white/60 hover:border-white/20 hover:text-white",
        className
      )}
    >
      {tag}
    </Link>
  );
}
