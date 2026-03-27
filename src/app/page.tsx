import { PortfolioPageClient } from "@/components/PortfolioPageClient";
import { localPortfolioData } from "@/data/localPortfolio";

export default function HomePage() {
  return (
    <main className="page-root">
      <PortfolioPageClient data={localPortfolioData} />
    </main>
  );
}
