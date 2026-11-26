export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
