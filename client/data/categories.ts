import { Category } from "@/types/blog";

export const categories: Category[] = [
  {
    id: "craft",
    name: "Craft",
    slug: "craft",
    count: 3,
  },
  {
    id: "technique",
    name: "Technique",
    slug: "technique",
    count: 2,
  },
  {
    id: "process",
    name: "Process",
    slug: "process",
    count: 2,
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
