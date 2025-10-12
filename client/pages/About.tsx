export default function About() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-light text-white md:text-5xl">
          About Us
        </h1>

        <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-lg text-white/70 leading-relaxed">
            Welcome to our Digital Writing Studio, a space dedicated to exploring the intricate world of writing, 
            language, and rhetoric. This blog is more than just a collection of posts—it's a living, breathing 
            conversation about what it means to write in the modern age.
          </p>

          <p className="text-lg text-white/70 leading-relaxed">
            Here, we dive deep into the perspectives of established writers, analyze their approaches to language, 
            and reflect on the craft that binds us all together. Each post is carefully crafted to share insights, 
            spark discussions, and engage with the vibrant community of writers and thinkers.
          </p>

          <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="mb-2 text-xl font-light text-white">Thoughtful Analysis</h3>
            <p className="text-white/60">
                Deep explorations of what writers say about their craft and the art of storytelling
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="mb-2 text-xl font-light text-white">Fresh Perspectives</h3>
            <p className="text-white/60">
                Unique takes on language, rhetoric, and contemporary writing practices
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="mb-2 text-xl font-light text-white">Continuous Learning</h3>
            <p className="text-white/60">
                Reflections on growth, challenges, and discoveries in the writing journey
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl mb-3">🔗</div>
              <h3 className="mb-2 text-xl font-light text-white">Community Connection</h3>
            <p className="text-white/60">
                Building bridges between writers, readers, and the ideas that inspire us
              </p>
            </div>
          </div>

          <p className="text-lg text-white/70 leading-relaxed">
            We believe that writing is both deeply personal and inherently communal—a dialogue between past and 
            present, writer and reader. This studio embodies that philosophy, providing a platform for exploration, 
            learning, and meaningful exchange.
          </p>
        </div>
      </div>
    </div>
  );
}
