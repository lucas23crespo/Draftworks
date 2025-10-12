import { Link } from "react-router-dom";
import { categories } from "@/data/categories";
import { FileText } from "lucide-react";

export default function Categories() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-light text-white md:text-5xl">
            Categories
          </h1>
          <p className="text-xl text-white/60">Explore posts by category</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <FileText className="h-6 w-6 text-white/60" />
                </div>
                <div>
                  <h2 className="text-2xl font-light text-white">
                    {category.name}
                  </h2>
                  <p className="text-sm text-white/50">
                    {category.count} {category.count === 1 ? "post" : "posts"}
                  </p>
                </div>
              </div>
              <p className="text-sm text-white/50">
                View all posts in this category →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
