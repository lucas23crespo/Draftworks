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
        "inline-block px-3 py-1 text-xs font-medium rounded-full transition-colors",
        variant === 'default' && "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30",
        variant === 'outline' && "border border-purple-500/30 text-purple-400 hover:border-purple-500/50",
        className
      )}
    >
      {tag}
    </Link>
  );
}
