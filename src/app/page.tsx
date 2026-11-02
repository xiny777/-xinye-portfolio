import Link from "next/link";

const strengths = [
  { num: "01", title: "Workflow automation", description: "Turning repetitive processes into structured, reproducible workflows." },
  { num: "02", title: "Data-minded problem solving", description: "Using records, metrics and validation to understand what a system does." },
  { num: "03", title: "Practical engineering", description: "Building small systems, documenting decisions and improving them iteratively." },
];

export default function Home() {
  return (
    <main>
      <section className="hero section" id="home">
        <div className="container">
          <div className="hero-topline"><span className="eyebrow"><span className="signal-dot"/> TECH / DATA / AUTOMATION</span><span className="location">Christchurch, New Zealand <span aria-hidden="true">↗</span></span></div>
          <div className="hero-grid">
            <div>
              <h1>Curious by nature.<br/><span className="headline-accent">Systematic by design.</span></h1>
              <p className="hero-description">I’m Xin. I build practical software and automation projects, and explore how data can make everyday decisions and workflows better.</p>
              <div className="hero-actions"><a href="#projects" className="primary-button">Explore projects <span aria-hidden="true">↗</span></a><a href="https://github.com/xiny777" className="text-link" target="_blank" rel="noopener noreferrer">View GitHub <span aria-hidden="true">↗</span></a></div>
            </div>
            <div className="hero-aside" aria-label="Focus areas"><div className="aside-top"><span>CURRENT FOCUS</span><span>001—003</span></div><div className="focus-line"><span>Automation</span><span>01 /</span></div><div className="focus-line"><span>Data analytics</span><span>02 /</span></div><div className="focus-line"><span>Software development</span><span>03 /</span></div><div className="aside-bottom">From an idea → a working system → measurable results.</div></div>
          </div>
          <div className="hero-bottom"><span>SELECTED WORK BELOW</span><span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
        </div>
      </section>
      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Projects<span className="title-dot">.</span></h2></div><p>Work in progress, clearly documented.<br/>Built to learn by doing.</p></div>
          <div className="project-list">
            <article className="project-card featured-project">
              <div className="project-visual visual-procurement" aria-hidden="true"><div className="visual-badge">PYTHON / WORKFLOW</div><div className="flow-stack"><span>REQUEST RECEIVED</span><i/><span>EXTRACT FIELDS</span><i/><span>CHECK INVENTORY</span><i/><span>RECOMMEND ACTION</span></div><div className="visual-counter">PROJECT — 001</div></div>
              <div className="project-info"><div className="project-meta"><span>01 / AUTOMATION</span><span className="status">Public repository</span></div><h3>AI Procurement<br/>Workflow</h3><p>A small Python workflow that interprets procurement requests, checks inventory data and returns a structured recommended action.</p><div className="tags"><span>Python</span><span>APIs</span><span>CSV data</span><span>Workflow design</span></div><div className="project-actions"><Link className="text-link strong" href="/projects/ai-procurement-workflow/">Read case study <span aria-hidden="true">↗</span></Link><a className="text-link subtle" target="_blank" rel="noopener noreferrer" href="https://github.com/xiny777/ai-procurement-workflow">Code ↗</a></div></div>
            </article>
            <article className="project-card">
              <div className="project-visual visual-content" aria-hidden="true"><div className="visual-badge">SCRIPTING / AUTOMATION</div><div className="script-panel"><div><span className="fake-dot"/><span className="fake-dot"/><span className="fake-dot"/></div><code>&gt; load config<br/>&gt; generate draft<br/>&gt; validate output<br/>&gt; write logs<span className="terminal-caret">_</span></code></div><div className="visual-counter">PROJECT — 002</div></div>
              <div className="project-info"><div className="project-meta"><span>02 / WORKFLOW AUTOMATION</span><span className="status draft">Case study in preparation</span></div><h3>AI Content<br/>Automation Pipeline</h3><p>An existing local automation workflow for content generation, with configuration, review stages and runtime logging. The public case study is being prepared.</p><div className="tags"><span>PowerShell</span><span>Batch scripts</span><span>AI workflows</span><span>Logging</span></div><div className="project-actions"><Link className="text-link strong" href="/projects/ai-content-automation/">Read project outline <span aria-hidden="true">↗</span></Link></div></div>
            </article>
          </div>
        </div>
      </section>
      <section className="section approach-section" id="about"><div className="container"><div className="section-heading"><div><p className="eyebrow">02 / HOW I WORK</p><h2>Make it useful<span className="title-dot">.</span></h2></div></div><div className="strength-grid">{strengths.map(s=><div className="strength-card" key={s.num}><span>{s.num}</span><h3>{s.title}</h3><p>{s.description}</p></div>)}</div><div className="about-bottom"><div><p className="eyebrow">A LITTLE CONTEXT</p><p>I’m based in Christchurch, New Zealand. My interests span software, practical automation, data analysis and the business problems that connect them.</p></div><a href="https://github.com/xiny777" className="circle-link" aria-label="Visit my GitHub" target="_blank" rel="noopener noreferrer">↗</a></div></div></section>
      <section className="section connect-section" id="contact"><div className="container connect-inner"><p className="eyebrow">03 / LET’S CONNECT</p><h2>Interested in what<br/>I’m building<span className="title-dot">?</span></h2><p>Explore the source code, follow the project updates or reach out through GitHub.</p><a href="https://github.com/xiny777" target="_blank" rel="noopener noreferrer" className="primary-button light-button">Find me on GitHub ↗</a></div></section>
    </main>
  );
}
