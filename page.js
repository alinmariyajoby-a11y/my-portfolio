import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Tag from "../components/Tag";
import { profile, featured, otherWork, experience, skills, education, certifications, languages } from "../data/content";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Section id="about" title="About">
          <p className="max-w-2xl text-lg">
            I am finishing a B.Tech in Computer Science and Engineering (Cyber Security). My projects focus on two
            things: assessing web applications against the OWASP Top 10, and detecting attacks in Wi-Fi packet captures.
            I have also interned in Python/Django development, data analytics with Power BI, and at a cyber crime police station.
          </p>
        </Section>

        <Section id="projects" title="Featured projects">
          <div className="grid gap-6 lg:grid-cols-2">{featured.map((p) => <ProjectCard key={p.name} project={p} />)}</div>
          <h3 className="mt-14 font-display text-xl font-semibold">Other work</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {otherWork.map((w) => (
              <li key={w.name} className="py-4">
                <p className="font-medium">{w.name}</p>
                <p className="mt-1 text-mute">{w.text}</p>
                <p className="mt-1 text-sm text-mute">{w.tech}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Internships">
          <ol className="space-y-8 border-l border-line pl-6">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-signal" aria-hidden="true" />
                <h3 className="font-medium">{e.role}</h3>
                <p className="text-mute">{e.org}</p>
                <p className="mt-2 max-w-2xl">{e.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="font-medium">{s.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">{s.items.map((i) => <Tag key={i}>{i}</Tag>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education and certifications">
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.title}>
                <p className="font-medium">{e.title}</p>
                <p className="text-mute">{e.place}</p>
                <p className="text-sm text-mute">{e.meta}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-medium">Certifications</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
          <p className="mt-8 text-mute">Languages: {languages}</p>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-xl text-lg">I am looking for an entry-level role. The fastest way to reach me is email.</p>
          <ul className="mt-6 space-y-2">
            <li><a className="text-signal underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a className="text-signal underline underline-offset-4" href={`tel:${profile.phone}`}>{profile.phone}</a></li>
            <li><a className="text-signal underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a></li>
            <li className="text-mute">{profile.location}</li>
          </ul>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mute">{profile.name}</footer>
    </>
  );
}
