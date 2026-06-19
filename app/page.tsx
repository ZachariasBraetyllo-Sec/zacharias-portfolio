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
                href="#about"
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
    </main>
  );
}