import { PortfolioPageClient } from "@/components/PortfolioPageClient";
import { localPortfolioData } from "@/data/localPortfolio";

export default function HomePage() {
  return (
    <main className="container">
      <header className="top-nav">
        <div>
          <strong>Jayita Sharma</strong>
          <p className="muted" style={{ margin: 0 }}>
            Product & Growth Portfolio
          </p>
        </div>
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#impact">Impact</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <PortfolioPageClient data={localPortfolioData} />
    </main>
  );
}
