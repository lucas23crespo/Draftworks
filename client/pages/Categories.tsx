import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';
import { FileText } from 'lucide-react';

export default function Categories() {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Categories
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore posts by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.slug}`}
              className="group block bg-card/60 backdrop-blur-sm border border-border rounded-xl p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {category.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {category.count} {category.count === 1 ? 'post' : 'posts'}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                View all posts in this category →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
