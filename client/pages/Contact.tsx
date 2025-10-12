import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h2>
            
            <p className="text-muted-foreground mb-6">
              We'd love to hear from you! Whether you have questions, suggestions, or just want to connect 
              with fellow writers, feel free to reach out.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:contact@digitalwritingstudio.com" 
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    contact@digitalwritingstudio.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-semibold mb-3">Follow us on social media</h3>
              <p className="text-sm text-muted-foreground">
                Stay updated with our latest posts, discussions, and writing tips across social platforms.
              </p>
            </div>
          </div>

          <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Send a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 text-center">
          <p className="text-muted-foreground">
            Your thoughts and feedback help shape this community. Don't hesitate to share your ideas, 
            ask questions, or simply say hello. Every conversation enriches our collective understanding 
            of the writing craft.
          </p>
        </div>
      </div>
    </div>
  );
}
