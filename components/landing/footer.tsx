export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border pt-6">
      <p className="text-xs sm:text-sm text-muted-foreground text-nowrap">
        © {year} Florentin-Cristian Dumitrache. All rights reserved.
      </p>
    </footer>
  );
}
