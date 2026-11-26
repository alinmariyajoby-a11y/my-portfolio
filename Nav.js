const links = [["About", "#about"], ["Projects", "#projects"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Nav() {
  return (
    <nav aria-label="Primary" className="sticky top-0 z-10 border-b border-line bg-ink/90 backdrop-blur">
      <ul className="mx-auto flex max-w-5xl gap-5 overflow-x-auto px-6 py-4 text-sm">
        {links.map(([l, h]) => (
          <li key={h}><a href={h} className="whitespace-nowrap text-mute transition hover:text-signal">{l}</a></li>
        ))}
      </ul>
    </nav>
  );
}
