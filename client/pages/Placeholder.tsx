import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
          <h1 className="mb-4 text-4xl font-light text-white">
            {title}
          </h1>
          <p className="mb-8 text-xl text-white/60">
            {description}
          </p>
          <p className="text-white/60">
            This page is coming soon. Continue exploring our content or let us know if you'd like us to prioritize this feature!
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              to="/blog"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-light uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              Explore Blog
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-light uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
