import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <header className="relative pt-24 pb-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_#06060a,_transparent_30%),linear-gradient(180deg,rgba(10,10,15,0.6),rgba(10,10,15,0.6))]" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Digital Writing Studio
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Welcome to a space where ideas converge, creativity flows, and every word matters. Join us on a journey through the art and craft of writing.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-gradient-primary shadow-lg transition-transform transform hover:-translate-y-1"
            >
              Explore Our Stories
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center px-4 py-3 rounded-md border border-border text-sm text-muted-foreground hover:border-purple-400 transition-colors"
            >
              View Demo
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500/80 shadow-2xl flex items-center justify-center text-white text-sm font-medium">
              Neural<br/>Network
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
