import { ContactRail } from "@/components/portfolio/ContactRail";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { FeaturedWorkZ } from "@/components/portfolio/FeaturedWorkZ";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ImpactStrip } from "@/components/portfolio/ImpactStrip";
import { MoreProjectsGrid } from "@/components/portfolio/MoreProjectsGrid";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { WritingAccordion } from "@/components/portfolio/WritingAccordion";
import { PortfolioData } from "@/types/portfolio";

type Props = {
  data: PortfolioData;
};

export function PortfolioPageClient({ data }: Props) {
  const highlights = [
    data.content.highlight_1 ?? "",
    data.content.highlight_2 ?? "",
    data.content.highlight_3 ?? "",
    data.content.highlight_4 ?? "",
  ].filter(Boolean);

  return (
    <div className="site">
      <ContactRail />
      <SiteHeader />
      <div className="site-shell">
        <HeroSection
          name={data.content.hero_name ?? "Jayita Sharma"}
          title={data.content.hero_title ?? "Product & Growth"}
          summary={
            data.content.hero_summary ??
            "Product and growth specialist building marketplace and AI automation products."
          }
        />
        <ImpactStrip items={highlights} />
        <AboutSection
          body={
            data.content.about ??
            "Jayita works across product strategy, discovery architecture, and growth systems."
          }
        />
        <FeaturedWorkZ projects={data.projects} />
        {data.moreProjects && data.moreProjects.length > 0 ? (
          <MoreProjectsGrid items={data.moreProjects} />
        ) : null}
        <ExperienceSection items={data.experience} />
        {data.writing && data.writing.length > 0 ? (
          <WritingAccordion items={data.writing} />
        ) : null}
        <SiteFooter />
      </div>
    </div>
  );
}
