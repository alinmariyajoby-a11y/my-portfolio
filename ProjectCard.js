import Tag from "./Tag";

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-lg border border-line bg-panel p-6 md:p-8">
      <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
      <p className="mt-1 text-mute">{project.subtitle}</p>
      <dl className="mt-6 space-y-4">
        <div><dt className="font-medium text-signal">Problem</dt><dd className="mt-1">{project.problem}</dd></div>
        <div><dt className="font-medium text-signal">Solution</dt><dd className="mt-1">{project.solution}</dd></div>
        <div>
          <dt className="font-medium text-signal">What I built</dt>
          <dd className="mt-1">
            <ul className="list-disc space-y-1 pl-5">{project.contribution.map((c) => <li key={c}>{c}</li>)}</ul>
          </dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-2">{project.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
    </article>
  );
}
