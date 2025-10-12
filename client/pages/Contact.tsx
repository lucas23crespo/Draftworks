import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-light text-white md:text-5xl">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-6 text-2xl font-light text-white">Contact Information</h2>

            <p className="mb-6 text-white/60">
              We'd love to hear from you! Whether you have questions, suggestions, or just want to connect 
              with fellow writers, feel free to reach out.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Mail className="h-5 w-5 text-white/60" />
                </div>
                <div>
                  <p className="text-xs font-light uppercase tracking-[0.3em] text-white/40">Email</p>
                  <a
                    href="mailto:contact@digitalwritingstudio.com"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    contact@digitalwritingstudio.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <h3 className="mb-3 text-sm font-light text-white/70">Follow us on social media</h3>
              <p className="text-sm text-white/50">
                Stay updated with our latest posts, discussions, and writing tips across social platforms.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-6 text-2xl font-light text-white">Send a Message</h2>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-light uppercase tracking-[0.3em] text-white/40">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-light uppercase tracking-[0.3em] text-white/40">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-light uppercase tracking-[0.3em] text-white/40">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-light uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-white/60">
            Your thoughts and feedback help shape this community. Don't hesitate to share your ideas, 
            ask questions, or simply say hello. Every conversation enriches our collective understanding 
            of the writing craft.
          </p>
        </div>
      </div>
    </div>
  );
}
