const projects = [
  {
    number: "01",
    name: "Prospectus",
    type: "MULTI-AGENT RESEARCH / PYTHON + STREAMLIT",
    description: "Turning scattered public-company evidence into structured, source-backed sales intelligence.",
    detail: "Specialized agents. Evidence routing. Source validation. Report exports.",
    href: "/projects/prospectus",
    className: "project-prospectus",
    motif: "P",
  },
  {
    number: "02",
    name: "VANTAGE",
    type: "MISSION INTELLIGENCE / REACT + TYPESCRIPT + IBM GRANITE",
    description: "A spacecraft mission decision-support interface built to make complex telemetry understandable.",
    detail: "Deterministic simulations. Structured analysis. Human-in-the-loop decisions.",
    href: "/projects/vantage",
    className: "project-vantage",
    motif: "V",
  },
];

const moreProjects = [
  { title: "AI-Powered SOC Assistant", category: "SECURITY INTELLIGENCE", href: "https://github.com/ZachariasBraetyllo-Sec/soc-assistant-ai" },
  { title: "Nightshift Job Tracker", category: "FULL-STACK APPLICATION", href: "https://github.com/ZachariasBraetyllo-Sec/nightshift-job-tracker" },
  { title: "Financial LLM Evaluation", category: "MODEL EVALUATION", href: "https://github.com/ZachariasBraetyllo-Sec/SBA_930_Zacharias_Braetyllo" },
];

function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zacharias Braetyllo, home">ZB<span className="brand-dot">.</span></a>
        <nav aria-label="Primary navigation" className="nav-links">
          <a href="#work">WORK</a>
          <a href="#approach">APPROACH</a>
          <a href="#about">ABOUT</a>
        </nav>
        <a className="nav-contact" href="mailto:zbraetyllo@outlook.com">LET’S TALK <Arrow /></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-topline"><span><i className="live-dot" /> INDEPENDENT BUILDER / CHICAGO, IL</span><span>PORTFOLIO <span className="dim">/</span> 2026</span></div>
        <div className="hero-center">
          <p className="eyebrow hero-kicker"><span className="bar" /> SOFTWARE ENGINEERING · AI APPLICATIONS · SYSTEMS THINKING</p>
          <h1 id="hero-title">Making<br /><span className="hero-indent">complexity</span><br /><em>useful<span className="blue-dot">.</span></em></h1>
          <div className="hero-bottom">
            <p>I build practical software and intelligent tools that turn difficult problems into clearer decisions.</p>
            <a href="#work" className="round-arrow" aria-label="Explore selected work"><span>↓</span></a>
          </div>
        </div>
        <div className="hero-side" aria-hidden="true"><span>FORM</span><span className="slash">/</span><span>FUNCTION</span></div>
        <div className="hero-foot"><span>ENGINEERING WITH INTENTION.</span><span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
      </section>

      <section className="manifesto" id="approach" aria-labelledby="manifesto-title">
        <div className="section-index">[ 01 / PHILOSOPHY ]</div>
        <div className="manifesto-main">
          <p className="eyebrow dark-eyebrow">BEYOND THE BUZZWORDS</p>
          <h2 id="manifesto-title">Good technology<br />should <span className="accent-under">make sense.</span></h2>
          <div className="manifesto-low"><span className="asterisk" aria-hidden="true">✳</span><p>Years spent troubleshooting systems for real people changed how I approach software. I want users to understand what a tool is doing and have good reasons to trust it.</p></div>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="work-head"><div><p className="eyebrow">[ 02 / SELECTED WORK ]</p><h2 id="work-title">Proof of <em>work.</em></h2></div><p>Things I've built to answer a question, test an idea, or make someone's work easier.</p></div>
        <div className="feature-list">
          {projects.map((project) => (
            <article className={`feature ${project.className}`} key={project.name}>
              <div className="feature-meta"><span>FEATURE / {project.number}</span><span>{project.type}</span></div>
              <a className="feature-art" href={project.href} target={(project.name === "VANTAGE" || project.name === "Prospectus") ? undefined : "_blank"} rel={(project.name === "VANTAGE" || project.name === "Prospectus") ? undefined : "noreferrer"} aria-label={`Explore ${project.name} ${(project.name === "VANTAGE" || project.name === "Prospectus") ? "case study" : "on GitHub"}`}>
                <span className="art-grid" aria-hidden="true" />
                <span className="art-motif" aria-hidden="true">{project.motif}</span>
                <span className="art-corner art-corner-one" aria-hidden="true">+</span>
                <span className="art-corner art-corner-two" aria-hidden="true">+</span>
                <span className="art-artifact" aria-hidden="true">
                  {project.name === "Prospectus" ? (
                    <><span className="artifact-top">PROSPECTUS / RESEARCH ENGINE <span>● ● ●</span></span><span className="artifact-title">Account intelligence</span><span className="artifact-rule" /><span className="artifact-lines"><i/><i/><i/></span><span className="artifact-pill">EVIDENCE VERIFIED <b>↗</b></span></>
                  ) : (
                    <><span className="artifact-top">VANTAGE / ASTERIA-1 <span>● LIVE</span></span><span className="artifact-title">MISSION OPERATIONS</span><span className="orbit"><span className="orbit-core" /></span><span className="telemetry">SYS 01 <b>98.4%</b><br/>SYS 02 <b>STABLE</b><br/>SYS 03 <b>NOMINAL</b></span></>
                  )}
                </span>
                <span className="art-tag">OPEN SOURCE <Arrow /></span>
              </a>
              <div className="feature-content">
                <div className="feature-copy"><h3>{project.name}</h3><p>{project.description}</p><span className="feature-detail">{project.detail}</span></div>
                <a className="feature-link" href={project.href} target={(project.name === "VANTAGE" || project.name === "Prospectus") ? undefined : "_blank"} rel={(project.name === "VANTAGE" || project.name === "Prospectus") ? undefined : "noreferrer"}>{(project.name === "VANTAGE" || project.name === "Prospectus") ? "VIEW CASE STUDY" : "EXPLORE REPOSITORY"} <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="more-work"><div><span className="eyebrow">THE INDEX / OTHER BUILDS</span><h3>More from the workshop<span className="blue-dot">.</span></h3></div><div className="project-index">{moreProjects.map((p, i) => <a key={p.title} href={p.href} target="_blank" rel="noreferrer"><span className="index-num">0{i+3}</span><span className="index-name">{p.title}</span><span className="index-category">{p.category}</span><span className="index-arrow"><Arrow /></span></a>)}</div></div>
      </section>

      <section className="about" id="about"><span className="eyebrow">[ 03 / THE PERSON BEHIND THE WORK ]</span><div className="about-layout"><h2>Curious by nature.<br /><em>Deliberate</em> by design.</h2><div className="about-copy"><p>I'm Zacharias Braetyllo, a Chicago-based technologist who started on the support side of IT. These days I'm turning that experience into software, especially tools that put AI to practical use.</p><p>I want people to understand the tools they rely on. That means asking difficult questions during development, then making the answers visible in the finished product.</p><a href="https://github.com/ZachariasBraetyllo-Sec" target="_blank" rel="noreferrer">MORE ON GITHUB <Arrow /></a></div></div></section>
      <footer className="footer" id="contact"><div className="footer-top"><span>[ 04 / WHAT'S NEXT? ]</span><span>OPEN TO CONVERSATION</span></div><a className="footer-cta" href="mailto:zbraetyllo@outlook.com">Let's make<br /><em>something matter.</em><Arrow /></a><div className="footer-bottom"><span>© 2026 ZACHARIAS BRAETYLLO</span><div><a href="https://github.com/ZachariasBraetyllo-Sec" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/zachariasbraetyllo" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="#top">BACK TO TOP ↑</a></div></div></footer>
    </main>
  );
}
