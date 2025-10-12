export default function About() {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          About Us
        </h1>

        <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to our Digital Writing Studio, a space dedicated to exploring the intricate world of writing, 
            language, and rhetoric. This blog is more than just a collection of posts—it's a living, breathing 
            conversation about what it means to write in the modern age.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Here, we dive deep into the perspectives of established writers, analyze their approaches to language, 
            and reflect on the craft that binds us all together. Each post is carefully crafted to share insights, 
            spark discussions, and engage with the vibrant community of writers and thinkers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Thoughtful Analysis</h3>
              <p className="text-muted-foreground">
                Deep explorations of what writers say about their craft and the art of storytelling
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Fresh Perspectives</h3>
              <p className="text-muted-foreground">
                Unique takes on language, rhetoric, and contemporary writing practices
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Reflections on growth, challenges, and discoveries in the writing journey
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <div className="text-4xl mb-3">🔗</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Community Connection</h3>
              <p className="text-muted-foreground">
                Building bridges between writers, readers, and the ideas that inspire us
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that writing is both deeply personal and inherently communal—a dialogue between past and 
            present, writer and reader. This studio embodies that philosophy, providing a platform for exploration, 
            learning, and meaningful exchange.
          </p>
        </div>
      </div>
    </div>
  );
}
