import { useLocation } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-2 text-5xl font-light text-white">404</h1>
        <p className="mb-6 text-white/60">Oops! Page not found.</p>
        <Link
          to="/"
          className="rounded-full border border-white/10 px-6 py-3 text-sm font-light uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
