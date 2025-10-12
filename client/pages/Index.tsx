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
        badgeLabel="New"
        badgeText="Generative Surfaces"
        ctaButtons={[
          { text: 'Get started', href: '/blog', primary: true },
          { text: 'View showcase', href: '/demo' },
        ]}
      />

      <div className="relative z-10 -mt-24 min-h-screen">
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Digital Writing Studio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Welcome to a space where ideas converge, creativity flows, and every word matters. 
              Join us on a journey through the art and craft of writing.
            </p>
            <Link
              to="/blog"
              className="inline-block px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1"
            >
              Explore Our Stories
            </Link>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Featured Posts
              </h2>
              <Link 
                to="/blog" 
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
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

        <section className="py-20 px-6 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent text-center">
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
            <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Join Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest writing insights, tips, and stories delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent text-center">
              About Our Studio
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1">
                <div className="text-4xl mb-3">✍️</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Thoughtful Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Deep explorations of what writers say about their craft and storytelling
                </p>
              </div>
              
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Fresh Perspectives</h3>
                <p className="text-sm text-muted-foreground">
                  Unique takes on language, rhetoric, and contemporary writing practices
                </p>
              </div>
              
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Reflections on growth, challenges, and discoveries in the writing journey
                </p>
              </div>
              
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1">
                <div className="text-4xl mb-3">🔗</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Community Connection</h3>
                <p className="text-sm text-muted-foreground">
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
