import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {description}
          </p>
          <p className="text-muted-foreground">
            This page is coming soon. Continue exploring our content or let us know if you'd like us to prioritize this feature!
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link 
              to="/blog"
              className="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Explore Blog
            </Link>
            <Link 
              to="/contact"
              className="px-6 py-3 border border-purple-500/50 text-purple-400 font-semibold rounded-lg transition-all duration-300 hover:bg-purple-500/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
