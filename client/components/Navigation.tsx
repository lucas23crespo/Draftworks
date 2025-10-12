import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Navigation() {
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/authors', label: 'Authors' },
    { href: '/categories', label: 'Categories' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Digital Writing Studio
          </Link>
          
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors hover:text-purple-500",
                  location.pathname === link.href
                    ? "text-purple-500"
                    : "text-foreground"
                )}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
