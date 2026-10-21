import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
 title:"Prospectus | Zacharias Braetyllo",
 description:"Prospectus: a multi-agent sales intelligence research application with source-backed briefings, deterministic validation, and document exports.",
};

const stages=[
 {n:"01",label:"GATHER",title:"Research the account",detail:"Start with public company research. Expand into competitor pages and selected hiring signals; use SEC filings when they are available."},
 {n:"02",label:"ROUTE",title:"Give every agent context",detail:"Each specialist gets the evidence it needs. The context router keeps unrelated research out of the prompt."},
 {n:"03",label:"SYNTHESIZE",title:"Connect the findings",detail:"Specialist results feed a final briefing agent that creates a structured, source-referenced account assessment."},
 {n:"04",label:"VERIFY",title:"Check the evidence",detail:"Deterministic rules check required sections and citations without spending another model call."},
 {n:"05",label:"DELIVER",title:"Make it usable",detail:"Generate reusable documents from the finished briefing. An optional watch lets users manually check public sources for changes."}
];
const features=[
 {num:"01",title:"Research with receipts",text:"Stable source IDs distinguish available evidence from failed retrievals. The briefing cites records in that registry rather than unsupported claims."},
 {num:"02",title:"Specialists, not a single giant prompt",text:"Instead of asking one model to do everything, Prospectus divides the research into focused roles. Each agent works with a deliberately limited set of sources."},
 {num:"03",title:"Deterministic by design",text:"The model doesn't need to run again just to check a citation or generate a document. Even monitoring a source for changes happens without another AI call."},
];
export default function ProspectusPage(){
 return <main className={styles.page}>
  <header className={styles.nav}><Link href="/" className={styles.logo}>ZB<span>.</span></Link><Link href="/#work">← BACK TO WORK</Link><a href="https://github.com/ZachariasBraetyllo-Sec/Prospectus" target="_blank" rel="noreferrer">SOURCE CODE ↗</a></header>
  <section className={styles.hero}>
   <div className={styles.heroTop}><span>CASE STUDY / 001</span><span>INTELLIGENCE / AUTOMATION / RESEARCH</span></div>
   <div className={styles.heroCopy}><p className={styles.eyebrow}><span className={styles.pulse}/> RESEARCH ENGINE / PYTHON + STREAMLIT</p><h1>PROSPECTUS<span>.</span></h1><div className={styles.heroBottom}><p>Better research.<br/><em>Stronger decisions.</em></p><div className={styles.heroTag}>A MULTI-AGENT<br/>SALES INTELLIGENCE<br/>PROTOTYPE</div></div></div>
   <div className={styles.visual} aria-label="Illustrative research briefing interface">
    <div className={styles.visualBar}><b>PROSPECTUS / BRIEFING SYSTEM</b><span>DEMONSTRATION VISUAL / NOT APP SCREENSHOT</span></div>
    <div className={styles.visualCols}><div className={styles.visualSidebar}><span>01 / INTAKE</span><span>02 / RESEARCH</span><span>03 / ANALYSIS</span><span>04 / BRIEFING</span></div><div className={styles.visualContent}><small>ACCOUNT INTELLIGENCE / SOURCE-BACKED OUTPUT</small><strong>From scattered evidence<br/>to clear opportunity.</strong><div className={styles.fakeRows}><i/><i/><i/></div><div className={styles.sourcePills}><span>SRC-001</span><span>SRC-002</span><span>VALIDATED ✓</span></div></div></div>
   </div>
   <div className={styles.heroFoot}><span>OPENAI RESPONSES API / SEC EDGAR / PYDANTIC</span><span>SCROLL ↓</span></div>
  </section>
  <section className={styles.intro}><div className={styles.marker}>[ 01 / THE PROBLEM ]</div><div><h2>Too much information.<br/><em>Not enough clarity.</em></h2><p>Good account research rarely lives in one place. You might find a clue on a careers page, then need an annual filing to understand its significance. Prospectus brings that research together without hiding where each finding came from.</p></div></section>
  <section className={styles.pipeline}><div className={styles.sectionHead}><span>[ 02 / UNDER THE HOOD ]</span><h2>Evidence in.<br/><em>Intelligence out.</em></h2></div><div className={styles.stageList}>{stages.map(s=><article key={s.n}><span>{s.n} / {s.label}</span><h3>{s.title}</h3><p>{s.detail}</p><b aria-hidden="true">↗</b></article>)}</div></section>
  <section className={styles.principles}><div className={styles.sectionHead}><span>[ 03 / DESIGN DECISIONS ]</span><h2>Useful AI needs<br/><em>guardrails.</em></h2></div><div className={styles.featureGrid}>{features.map(f=><article key={f.num}><span>{f.num} / PRINCIPLE</span><h3>{f.title}</h3><p>{f.text}</p></article>)}</div></section>
  <section className={styles.output}><div><span className={styles.marker}>[ 04 / FROM RESEARCH TO DELIVERABLES ]</span><h2>One briefing.<br/><em>Many ways to use it.</em></h2></div><div className={styles.outputGrid}><div><strong>PDF</strong><span>01 / DOCUMENT</span></div><div><strong>MD</strong><span>02 / PORTABLE TEXT</span></div><div><strong>PPTX</strong><span>03 / PRESENTATION</span></div></div><p>Exports reuse the completed analysis without invoking the model again. Optional alert watches can manually re-check public sources for keyword changes; scheduled background monitoring is not part of this prototype.</p></section>
  <section className={styles.notes}><div className={styles.marker}>[ 05 / THE ENGINEERING REALITY ]</div><div><h2>A prototype that<br/><em>knows its limits.</em></h2><p>Prospectus is a local Streamlit application, not a hosted enterprise research service. It keeps its working state in Streamlit sessions rather than a database. There's no login system or scheduled background processing yet. The citation validator can catch broken source references, but it cannot independently prove that every interpretation is correct.</p><div className={styles.stack}>PYTHON 3.12 <span>/</span> STREAMLIT <span>/</span> OPENAI <span>/</span> SEC EDGAR <span>/</span> UV <span>/</span> PYTEST</div></div></section>
  <section className={styles.closing}><span>[ 06 / EXPLORE THE BUILD ]</span><h2>Make the work<br/><em>make sense.</em></h2><div><a href="https://github.com/ZachariasBraetyllo-Sec/Prospectus" target="_blank" rel="noreferrer">EXPLORE PROSPECTUS ON GITHUB ↗</a><Link href="/#work">← BACK TO PORTFOLIO</Link></div></section>
  <footer className={styles.footer}><span>© 2026 ZACHARIAS BRAETYLLO</span><Link href="/">FORM / FUNCTION ↑</Link></footer>
 </main>
}
