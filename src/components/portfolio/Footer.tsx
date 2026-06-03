const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-background/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-display text-base text-foreground">Sahil Hashmi</div>
          <div className="text-xs text-muted-foreground">Full Stack Developer · Remote · Available for work</div>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-muted-foreground transition hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} — Crafted with care.</div>
      </div>
    </footer>
  );
}