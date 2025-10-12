import { Link } from 'react-router-dom';
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
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
        <div className="flex items-start gap-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-16 w-16 rounded-full object-cover ring-2 ring-white/20"
          />
          
          <div className="flex-1">
            <h3 className="text-lg font-light text-white">
              {author.name}
            </h3>
            <p className="text-sm text-white/50 mb-2">{author.role}</p>
            <p className="text-sm text-white/60 line-clamp-2">{author.bio}</p>
            
            {author.social && (
              <div className="flex gap-3 mt-3">
                {author.social.twitter && (
                  <a href={author.social.twitter} className="text-white/50 transition-colors hover:text-white">
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {author.social.github && (
                  <a href={author.social.github} className="text-white/50 transition-colors hover:text-white">
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {author.social.linkedin && (
                  <a href={author.social.linkedin} className="text-white/50 transition-colors hover:text-white">
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
