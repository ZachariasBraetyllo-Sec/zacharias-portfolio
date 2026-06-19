const buildAreas = [
  {
    number: "01",
    title: "Technical Systems",
    description:
      "I work with the systems people rely on every day, from support operations and device workflows to the infrastructure behind a smooth user experience.",
  },
  {
    number: "02",
    title: "Security & Trust",
    description:
      "I approach security as a design responsibility: protect the user, reduce uncertainty, and make the safe path understandable.",
  },
  {
    number: "03",
    title: "AI Products",
    description:
      "I build AI-assisted tools that help people reason through complex information without hiding the evidence, limitations, or decisions underneath.",
  },
];

const currentProjects = [
  {
    number: "01",
    title: "Kestrel",
    status: "In Development",
    category: "AI Career Navigation",
    description:
      "An evidence-grounded platform that evaluates one professional profile against one opportunity and produces a traceable, requirement-level assessment.",
    focus: "Backend architecture, data models, and assessment logic",
  },
  {
    number: "02",
    title: "Prism",
    status: "Submission Ready",
    category: "AI Adaptation Studio",
    description:
      "A creative decision-support system designed to help teams examine how stories and ideas can be thoughtfully adapted across formats and audiences.",
    focus: "Submission materials, project documentation, and presentation",
  },
];

const workingPrinciples = [
  {
    number: "01",
    title: "Clarify the real problem",
    description:
      "Before reaching for a tool, I work to understand what is actually getting in the user’s way, what constraints matter, and what a useful outcome should look like.",
  },
  {
    number: "02",
    title: "Design for trust",
    description:
      "I make evidence, limitations, status, and uncertainty visible so people can understand what a system is doing instead of being asked to trust a black box.",
  },
  {
    number: "03",
    title: "Build deliberately",
    description:
      "I break complex work into manageable stages, test assumptions early, and keep the structure clean enough that the project can grow without becoming brittle.",
  },
  {
    number: "04",
    title: "Document the decisions",
    description:
      "I record why choices were made, what changed, and what remains unfinished so the work can be maintained, reviewed, and improved with confidence.",
  },
];

const experienceAreas = [
  "Technical support and endpoint systems",
  "Cybersecurity and responsible system design",
  "AI-assisted products and decision tools",
  "Documentation, troubleshooting, and user advocacy",
];

const contactLinks = [
  {
    number: "01",
    label: "LinkedIn",
    detail: "Professional experience and updates",
    href: "https://www.linkedin.com/in/zachariasbraetyllo",
  },
  {
    number: "02",
    label: "GitHub",
    detail: "Repositories, builds, and technical work",
    href: "https://github.com/ZachariasBraetyllo-Sec",
  },
  {
    number: "03",
    label: "Email",
    detail: "Direct inquiries and conversation",
    href: "mailto:zbraetyllo@outlook.com",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-border pb-5">
          <a
            href="#top"
            className="font-mono text-sm font-semibold uppercase tracking-[0.18em]"
          >
            Zacharias Braetyllo
          </a>

          <nav aria-label="Primary navigation">
            <a
              href="#about"
              className="font-mono text-xs uppercase tracking-[0.16em] text-muted hover:text-foreground"
            >
              About
            </a>
          </nav>
        </header>

        <div
          id="top"
          className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.35fr_0.65fr] lg:py-24"
        >
          <div>
            <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Builder · Systems Thinker · Human-Centered Technologist
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Zacharias
              <br />
              Braetyllo
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              I build practical, thoughtful tools across technology, security,
              and AI, with a focus on making complex systems clearer and more
              useful for the people inside them.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center bg-accent px-5 py-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-white hover:-translate-y-0.5"
              >
                Explore My Work
              </a>

              <a
                href="#process"
                className="inline-flex items-center justify-center border border-foreground px-5 py-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
              >
                About How I Build
              </a>
            </div>
          </div>

          <aside className="border-l-2 border-accent pl-6 lg:pl-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Current Focus
            </p>

            <p className="mt-4 text-2xl font-medium leading-snug">
              Designing systems that help people make better decisions with
              greater clarity and trust.
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Working Across
              </p>

              <p className="mt-3 leading-7">
                Technical support, cybersecurity, AI products, and product
                thinking.
              </p>
            </div>
          </aside>
        </div>

        <footer className="flex items-center justify-between border-t border-border pt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          <span>Chicago, Illinois</span>
          <span>Building thoughtfully</span>
        </footer>
      </section>

      <section
        id="work"
        className="border-y border-border bg-surface px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                What I Build
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Systems shaped around real people.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
              My work crosses support, security, and emerging technology, but
              the goal stays consistent: understand the problem clearly, make
              the system easier to trust, and leave the user better supported.
            </p>
          </div>

          <div className="mt-14 grid border-t border-border lg:grid-cols-3">
            {buildAreas.map((area) => (
              <article
                key={area.number}
                className="border-b border-border py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <p className="font-mono text-xs font-semibold tracking-[0.18em] text-accent-warm">
                  {area.number}
                </p>

                <h3 className="mt-5 text-2xl font-semibold">{area.title}</h3>

                <p className="mt-4 leading-7 text-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Currently Building
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Work in motion.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
              These projects are still evolving. Their status is shown openly
              because the process, decisions, and systems behind the work matter
              just as much as the final release.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {currentProjects.map((project) => (
              <article
                key={project.title}
                className="group flex min-h-[28rem] flex-col border border-border bg-surface p-7 transition-transform duration-200 hover:-translate-y-1 sm:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="font-mono text-xs font-semibold tracking-[0.18em] text-accent-warm">
                    PROJECT {project.number}
                  </p>

                  <span className="border border-accent px-3 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    {project.status}
                  </span>
                </div>

                <div className="mt-16">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto border-t border-border pt-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    Current Focus
                  </p>

                  <p className="mt-3 leading-7">{project.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="border-y border-border bg-surface-strong px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                How I Work
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Thoughtful systems begin with thoughtful choices.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
              I care about what gets built, but also about how it gets built:
              with clear reasoning, visible tradeoffs, and enough structure for
              the work to remain useful after the first version ships.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {workingPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="min-h-[19rem] bg-surface-strong p-7 sm:p-9"
              >
                <p className="font-mono text-xs font-semibold tracking-[0.18em] text-accent-warm">
                  PRINCIPLE {principle.number}
                </p>

                <h3 className="mt-8 text-2xl font-semibold">
                  {principle.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              About
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              I build from the intersection of systems and people.
            </h2>

            <div className="mt-10 border-l-2 border-accent-warm pl-6">
              <p className="text-xl leading-8">
                The strongest technology does more than function correctly. It
                helps people understand what is happening, what they can do
                next, and why the system deserves their trust.
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                My foundation is in hands-on technical support, where every
                problem arrives with both a system behind it and a person
                affected by it. That experience taught me to investigate
                carefully, communicate clearly, and treat usability as part of
                the technical solution rather than an afterthought.
              </p>

              <p>
                From there, my work expanded into cybersecurity, software
                development, and AI-assisted product design. Across those areas,
                I am most interested in building tools that reduce confusion,
                expose meaningful evidence, and help users make decisions with
                greater confidence.
              </p>

              <p>
                I am still growing across disciplines, but the thread connecting
                the work is already clear: I like understanding complicated
                systems, finding where people struggle inside them, and building
                something more useful in response.
              </p>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Experience Across
              </p>

              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {experienceAreas.map((area) => (
                  <li
                    key={area}
                    className="border-l border-border pl-4 leading-7"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-border bg-surface px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Contact
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Let’s build something useful.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                I am open to conversations about technical roles,
                collaborative projects, and thoughtful products that improve
                how people work with technology.
              </p>
            </div>

            <div className="border-t border-border">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  className="group grid gap-4 border-b border-border py-7 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6"
                >
                  <span className="font-mono text-xs font-semibold tracking-[0.18em] text-accent-warm">
                    {link.number}
                  </span>

                  <span>
                    <span className="block text-2xl font-semibold">
                      {link.label}
                    </span>

                    <span className="mt-1 block leading-7 text-muted">
                      {link.detail}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="font-mono text-xl text-accent transition-transform duration-200 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Zacharias Braetyllo</span>

          <a href="#top" className="hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}