import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "VANTAGE | Zacharias Braetyllo",
  description: "A case study of VANTAGE, an AI-assisted spacecraft mission decision-support prototype built using React, TypeScript, and IBM Granite.",
};

const scenarios = [
  { number: "01", label: "NOMINAL", title: "Steady operations", detail: "A stable baseline for mission telemetry and operational status." },
  { number: "02", label: "SOLAR EVENT", title: "Radiation exposure", detail: "A solar particle event threatens the mission's planned EVA." },
  { number: "03", label: "THERMAL", title: "Heat rejection", detail: "Radiator degradation produces rising thermal readings." },
  { number: "04", label: "ATTITUDE / COMMS", title: "Signal degradation", detail: "Spacecraft attitude drift affects antenna alignment." },
];

export default function VantageCaseStudy() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>ZB<span>.</span></Link>
        <Link href="/#work" className={styles.back}>← BACK TO SELECTED WORK</Link>
        <a href="https://github.com/ZachariasBraetyllo-Sec/vantage-ai-mission-intelligence" target="_blank" rel="noreferrer" className={styles.topLink}>SOURCE CODE ↗</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroTop}><span>CASE STUDY / 002</span><span>AI / DECISION SUPPORT / SPACEFLIGHT</span></div>
        <p className={styles.kicker}><span className={styles.signal} /> ASTERIA-1 / MISSION OPERATIONS</p>
        <h1>VANTAGE<span className={styles.period}>.</span></h1>
        <div className={styles.heroBottom}><p>When every signal matters,<br /><strong>context is everything.</strong></p><span className={styles.heroCode}>FLIGHT SYSTEMS / INTELLIGENCE LAYER<br />HUMAN AUTHORITY / ALWAYS</span></div>
        <div className={styles.orbital} aria-hidden="true"><div className={styles.orbitalRing}><div className={styles.orbitalCore}/></div><span className={styles.orbitLabel}>ASTERIA-1 / LUNAR ORBIT</span><span className={styles.orbitCross}>+</span></div>
        <div className={styles.heroFoot}><span>REACT / TYPESCRIPT / EXPRESS / IBM GRANITE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className={styles.intro}>
        <p className={styles.marker}>[ 01 / THE CHALLENGE ]</p>
        <div><h2>Data is constant.<br /><em>Clarity isn't.</em></h2><p>Spacecraft operations produce continuous streams of telemetry. When something goes wrong, the challenge is not simply detecting a changing number. It is understanding how signals across multiple subsystems relate, what those changes could mean, and what an operator should examine next.</p></div>
      </section>

      <section className={styles.panelSection}>
        <div className={styles.sectionHead}><p>[ 02 / THE SYSTEM ]</p><h2>Built for the<br /><em>decision-maker.</em></h2></div>
        <div className={styles.controlPanel}>
          <div className={styles.panelTop}><span>VANTAGE / ASTERIA-1</span><span>ILLUSTRATIVE INTERFACE / NOT LIVE DATA</span></div>
          <div className={styles.panelGrid}>
            <div className={styles.panelOrbit}><span className={styles.orbitInner}/><span className={styles.panelCross}>+</span><span className={styles.panelCaption}>MISSION ORBITAL REFERENCE</span></div>
            <div className={styles.panelReadings}><span className={styles.readingHeading}>DETERMINISTIC TELEMETRY</span>{[["POWER","NOMINAL"],["THERMAL","NOMINAL"],["COMMS","NOMINAL"],["GUIDANCE","NOMINAL"]].map(([k,v])=><div key={k}><span>{k}</span><strong>{v}</strong></div>)}<span className={styles.readingNote}>ACTUAL VALUES COME FROM THE SIMULATION ENGINE</span></div>
          </div>
          <div className={styles.panelBottom}><span>MONITOR → DETECT → CORRELATE</span><span>MISSION STATUS / DEMONSTRATION</span></div>
        </div>
        <p className={styles.visualNote}>This custom visual explains the project's design direction. It is not a screenshot of the running VANTAGE application.</p>
      </section>

      <section className={styles.architecture}>
        <p className={styles.marker}>[ 03 / HOW IT WORKS ]</p>
        <div className={styles.archHead}><h2>Intelligence,<br />with <em>boundaries.</em></h2><p>VANTAGE separates generated interpretation from source telemetry. The application controls what was actually observed; the model provides structured decision support based on those observations.</p></div>
        <div className={styles.pipeline}>{[
          ["01","SIMULATE","Seeded telemetry advances in deterministic two-second ticks."],
          ["02","DETECT","Scenario state and signal changes determine when analysis is appropriate."],
          ["03","ANALYZE","A mock provider or IBM Granite interprets the mission context."],
          ["04","VALIDATE","Server-side checks enforce the structure of model-produced assessments."],
          ["05","PRESENT","Operators see grounded evidence, correlations, and recommended actions."],
        ].map(([num,name,detail])=><div className={styles.pipelineStep} key={num}><span>{num} /</span><h3>{name}</h3><p>{detail}</p></div>)}</div>
      </section>

      <section className={styles.scenarios}>
        <div className={styles.sectionHead}><p>[ 04 / SCENARIO ENGINE ]</p><h2>Four situations.<br /><em>One system.</em></h2></div>
        <div className={styles.scenarioGrid}>{scenarios.map((s)=><article key={s.number}><span>{s.number} / {s.label}</span><h3>{s.title}</h3><p>{s.detail}</p></article>)}</div>
      </section>

      <section className={styles.constraints}>
        <p className={styles.marker}>[ 05 / ENGINEERING DECISIONS ]</p>
        <div className={styles.constraintsGrid}><h2>Trust is<br /><em>designed in.</em></h2><div><h3>Grounded, not invented.</h3><p>Authoritative telemetry frames are attached by application code, never accepted from the model response. Structured validation rejects malformed outputs.</p><h3>Bounded model calls.</h3><p>Granite is used only at analysis boundaries, with caching and a maximum of four calls per session. The deterministic mock provider supports an offline demonstration.</p><h3>Operator in control.</h3><p>This is a decision-support prototype. It does not autonomously control a spacecraft and does not claim production flight readiness.</p></div></div>
      </section>

      <section className={styles.closing}><p>[ 06 / THE TAKEAWAY ]</p><h2>The useful part of AI isn't the spectacle.<br /><em>It's the judgment it helps inform.</em></h2><div><a href="https://github.com/ZachariasBraetyllo-Sec/vantage-ai-mission-intelligence" target="_blank" rel="noreferrer">EXPLORE VANTAGE ON GITHUB ↗</a><Link href="/#work">← RETURN TO PORTFOLIO</Link></div></section>
      <footer className={styles.footer}><span>© 2026 ZACHARIAS BRAETYLLO</span><Link href="/">FORM / FUNCTION ↑</Link></footer>
    </main>
  );
}
