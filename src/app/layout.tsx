import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Xin Ye — Tech & Data Portfolio", template: "%s | Xin Ye" },
  description: "Projects in automation, software development and applied data analytics. Based in Christchurch, New Zealand.",
  metadataBase: new URL("https://xinye.co.nz"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Xin Ye — Tech & Data Portfolio",
    description: "Projects in automation, software development and applied data analytics.",
    url: "https://xinye.co.nz",
    siteName: "Xin Ye",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="container nav-inner">
              <Link className="wordmark" href="/" aria-label="Xin Ye home"><span className="brand-mark">xy<span className="brand-dot">.</span></span><span className="wordmark-caption">Portfolio / 2026</span></Link>
              <nav aria-label="Main navigation" className="nav-links">
                <Link href="/#projects">Projects</Link>
                <Link href="/#about">About</Link>
                <a href="https://github.com/xiny777" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              </nav>
            </div>
          </header>
          {children}
          <footer className="site-footer">
            <div className="container footer-inner">
              <div><strong>Xin Ye</strong><span>Building useful things with code and data.</span></div>
              <div className="footer-right"><a href="https://github.com/xiny777" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="/#projects">Projects ↑</a><span>© {new Date().getFullYear()} Xin Ye</span></div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
