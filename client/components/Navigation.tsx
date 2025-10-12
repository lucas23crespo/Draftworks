import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <div className="flex items-center gap-6 rounded-full border border-white/10 bg-black/60 px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <Link to="/" className="flex items-center gap-1 pr-4 text-sm font-medium text-white/70">
          <span className="grid h-6 w-6 grid-cols-2 gap-1 rounded-full border border-white/10 p-1">
            <span className="h-full w-full rounded-full bg-white/40" />
            <span className="h-full w-full rounded-full bg-white/20" />
            <span className="h-full w-full rounded-full bg-white/20" />
            <span className="h-full w-full rounded-full bg-white/10" />
          </span>
          Draftworks
        </Link>

        <div className="flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-light tracking-tight text-white/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30',
                  isActive ? 'bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.15)]' : 'hover:bg-white/5 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
