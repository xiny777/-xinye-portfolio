import Link from "next/link";
export default function NotFound() { return <main className="case-main"><div className="container"><p className="eyebrow">404 / NOT FOUND</p><h1>Page not found<span className="title-dot">.</span></h1><p className="hero-description">The page you requested isn’t here.</p><Link className="primary-button" href="/">Back home ↗</Link></div></main> }
