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
    </main>
  );
}