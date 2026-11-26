import { profile } from "../data/content";

const lines = [
  ["input", "Wireshark .pcap capture"],
  ["watches for", "deauthentication and disassociation frames"],
  ["rule", "threshold-based detection"],
  ["logs", "timestamp, MAC address, packet count, channel"],
];

export default function Hero() {
  return (
    <header className="mx-auto grid max-w-5xl gap-12 px-6 pb-12 pt-20 md:grid-cols-[1.15fr_1fr] md:items-center md:pt-28">
      <div>
        <p className="text-mute">{profile.name}, {profile.title}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mute">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="rounded bg-signal px-5 py-3 font-medium text-ink transition hover:opacity-90">Email me</a>
          <a href="#projects" className="rounded border border-line px-5 py-3 font-medium transition hover:border-signal">See projects</a>
        </div>
      </div>
      <aside aria-label="How the Wi-Fi deauthentication detector reports" className="rounded-lg border border-line bg-panel p-5 font-mono text-sm">
        <p className="text-mute">wifi-deauth-detector</p>
        <ul className="mt-4 space-y-3">
          {lines.map(([k, v], i) => (
            <li key={k} className="logline" style={{ animationDelay: `${0.25 + i * 0.35}s` }}>
              <span className="text-signal">{k}</span>
              <span className="block text-body">{v}</span>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
}
