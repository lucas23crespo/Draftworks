export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Digital Writing Studio | Crafting Words, Building Communities</p>
        </div>
      </div>
    </footer>
  );
}
