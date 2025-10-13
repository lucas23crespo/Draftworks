export default function About() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-light text-white md:text-5xl">
          About Us
        </h1>

        <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-lg text-white/70 leading-relaxed">
            Welcome to Draftworks, a blog focused on writing, language, and
            craft. We publish essays, practical guides, and author interviews
            that help writers improve their work and think clearly about process.
          </p>

          <p className="text-lg text-white/70 leading-relaxed">
            Our posts focus on craft, revision, and practical techniques you can
            apply to your own writing. Whether you're drafting fiction, essays,
            or practical guides, you'll find clear advice and examples here.
          </p>

          <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="mb-2 text-xl font-light text-white">
                In-depth Essays
              </h3>
              <p className="text-white/60">
                Long-form essays and analysis focused on writing techniques and examples
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="mb-2 text-xl font-light text-white">
                Practical Tips
              </h3>
              <p className="text-white/60">
                Actionable advice and techniques for drafting, editing, and clarity
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="mb-2 text-xl font-light text-white">
                Writing Exercises
              </h3>
              <p className="text-white/60">
                Prompts, exercises, and revision techniques to build your skills
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl mb-3">🔗</div>
              <h3 className="mb-2 text-xl font-light text-white">
                Author Interviews
              </h3>
              <p className="text-white/60">
                Conversations with writers about process, routines, and advice
              </p>
            </div>
          </div>

          <p className="text-lg text-white/70 leading-relaxed">
            Draftworks aims to be a useful resource for writers—clear, practical,
            and grounded in examples. If you read something helpful, consider
            subscribing or sharing with other writers.
          </p>
        </div>
      </div>
    </div>
  );
}
