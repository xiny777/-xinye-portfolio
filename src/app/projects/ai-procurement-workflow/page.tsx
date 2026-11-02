import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "AI Procurement Workflow" };
export default function ProcurementProject() { return <main className="case-main"><div className="container"><Link className="back-link" href="/#projects">← Back to projects</Link><div className="case-header"><p className="eyebrow">CASE STUDY / 001</p><h1>AI Procurement<br/><span className="headline-accent">Workflow.</span></h1><p>Automating the transition from an unstructured procurement request to a structured inventory decision.</p><div className="tags"><span>Python</span><span>Workflow automation</span><span>CSV</span><span>API example</span></div></div><div className="case-callout"><span>PROJECT STATUS</span><strong>Public repository</strong><a href="https://github.com/xiny777/ai-procurement-workflow" target="_blank" rel="noopener noreferrer">Explore source code ↗</a></div><div className="case-content"><aside><span className="eyebrow">OVERVIEW</span><p>This case study summarizes the existing project documentation. It is a small demonstration workflow, not a production procurement system.</p></aside><div className="case-article"><section><h2>The problem</h2><p>Procurement requests often arrive as free-form language. Staff must interpret the request, check stock and decide what action to take. Repeating these checks manually is slow and prone to inconsistencies.</p></section><section><h2>How it works</h2><ol className="step-list"><li><strong>Receive request</strong><span>Accept a natural-language procurement message.</span></li><li><strong>Extract information</strong><span>Identify requested item, quantity and location.</span></li><li><strong>Check inventory</strong><span>Compare the request against structured inventory records.</span></li><li><strong>Recommend an action</strong><span>Return a structured result, such as fulfil from stock or find a supplier.</span></li></ol></section><section><h2>Example API interface</h2><pre className="code-sample">{`POST /run-workflow
{
  "message": "Need 500kg fertiliser for Canterbury farm next Wednesday"
}

// Example response from the README
{
  "item": "fertiliser",
  "quantity": 500,
  "location": "Canterbury",
  "inventory_status": "available",
  "recommended_action": "fulfill_from_inventory"
}`}</pre><p className="small-note">The example is taken from the project README and is illustrative rather than a live API response.</p></section><section><h2>What I would improve next</h2><p>Introduce automated tests, more robust extraction validation, structured error handling and execution metrics. These are improvement opportunities, not features claimed to be complete.</p></section><div className="case-actions"><a className="primary-button" href="https://github.com/xiny777/ai-procurement-workflow" target="_blank" rel="noopener noreferrer">View repository ↗</a><Link href="/#projects" className="text-link">All projects ↗</Link></div></div></div></div></main> }
