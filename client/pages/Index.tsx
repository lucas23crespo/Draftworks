import { Link } from 'react-router-dom';
import NeuralNetworkHero from '@/components/ui/neural-network-hero';
import { PostCard } from '@/components/blog/PostCard';
import { getFeaturedPosts, getLatestPosts } from '@/data/posts';

export default function Index() {
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts();

  return (
    <>
      <NeuralNetworkHero
        title="Where algorithms become art."
        description="A minimal hero with a neural canvas — crisp, elegant, and quietly expressive. Built with React, Three.js, and a custom CPPN shader."
        ctaButtons={[
          { text: 'Get started', href: '/blog', primary: true },
          { text: 'About us', href: '/about' },
        ]}
      />

      <div className="relative z-10 -mt-24 min-h-screen">
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Digital Writing Studio
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8">
              Welcome to a space where ideas converge, creativity flows, and every word matters.
              Join us on a journey through the art and craft of writing.
            </p>
            <Link
              to="/blog"
              className="inline-block rounded-full border border-white/15 px-8 py-4 text-sm font-light uppercase tracking-[0.18em] text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              Explore Our Stories
            </Link>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Featured Posts
              </h2>
              <Link
                to="/blog"
                className="text-white/50 hover:text-white transition-colors text-sm font-light tracking-tight"
              >
                View All →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} variant="featured" />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-12 text-center">
              Latest Posts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
              <h2 className="text-3xl font-light text-white mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-white/60 mb-8">
                Get the latest writing insights, tips, and stories delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg border border-white/15 text-sm font-light uppercase tracking-[0.18em] text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white font-sans text-center">
              About our community
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-3">✍️</div>
                <h3 className="text-xl font-light text-white mb-2">Thoughtful Analysis</h3>
                <p className="text-sm text-white/60">
                  Deep explorations of what writers say about their craft and storytelling
                </p>
              </div>
              
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-xl font-light text-white mb-2">Fresh Perspectives</h3>
                <p className="text-sm text-white/60">
                  Unique takes on language, rhetoric, and contemporary writing practices
                </p>
              </div>
              
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-xl font-light text-white mb-2">Continuous Learning</h3>
                <p className="text-sm text-white/60">
                  Reflections on growth, challenges, and discoveries in the writing journey
                </p>
              </div>
              
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-3">🔗</div>
                <h3 className="text-xl font-light text-white mb-2">Community Connection</h3>
                <p className="text-sm text-white/60">
                  Building bridges between writers, readers, and the ideas that inspire us
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
