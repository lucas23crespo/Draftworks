export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center text-xs font-light uppercase tracking-[0.3em] text-white/40">
          <p>&copy; {new Date().getFullYear()} Digital Writing Studio — Crafting Words, Building Communities</p>
        </div>
      </div>
    </footer>
  );
}
