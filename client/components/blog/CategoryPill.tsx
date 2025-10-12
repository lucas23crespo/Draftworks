import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryPillProps {
  category: string;
  className?: string;
}

export function CategoryPill({ category, className }: CategoryPillProps) {
  return (
    <Link
      to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
      className={cn(
        "inline-block px-3 py-1 text-xs font-semibold rounded-md bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-colors",
        className
      )}
    >
      {category}
    </Link>
  );
}
