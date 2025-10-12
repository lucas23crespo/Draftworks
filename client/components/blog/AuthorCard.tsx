import { Link } from 'react-router-dom';
import { Author } from '@/types/blog';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Link
      to={`/authors/${author.id}`}
      className="group block"
    >
      <div className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-500/30"
          />
          
          <div className="flex-1">
            <h3 className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
              {author.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{author.role}</p>
            <p className="text-sm text-muted-foreground line-clamp-2">{author.bio}</p>
            
            {author.social && (
              <div className="flex gap-3 mt-3">
                {author.social.twitter && (
                  <a href={author.social.twitter} className="text-muted-foreground hover:text-purple-500 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {author.social.github && (
                  <a href={author.social.github} className="text-muted-foreground hover:text-purple-500 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {author.social.linkedin && (
                  <a href={author.social.linkedin} className="text-muted-foreground hover:text-purple-500 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
