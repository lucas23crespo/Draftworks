import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryPillProps {
  category: string;
  className?: string;
  asLink?: boolean;
}

export function CategoryPill({
  category,
  className,
  asLink = true,
}: CategoryPillProps) {
  const pillClasses = cn(
    "inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-light uppercase tracking-[0.18em] text-white/60 transition-colors hover:bg-white/10 hover:text-white",
    className,
  );

  if (!asLink) {
    return <span className={pillClasses}>{category}</span>;
  }

  return (
    <Link
      to={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
      className={pillClasses}
    >
      {category}
    </Link>
  );
}
