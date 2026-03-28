import { ContactRail } from "@/components/portfolio/ContactRail";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { FeaturedWorkZ } from "@/components/portfolio/FeaturedWorkZ";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { InstitutionStrip } from "@/components/portfolio/InstitutionStrip";
import { MoreProjectsGrid } from "@/components/portfolio/MoreProjectsGrid";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { WritingAccordion } from "@/components/portfolio/WritingAccordion";
import { PortfolioData } from "@/types/portfolio";

type Props = {
  data: PortfolioData;
};

export function PortfolioPageClient({ data }: Props) {
  return (
    <div className="site">
      <ContactRail />
      <SiteHeader />
      <div className="site-shell">
        <HeroSection
          name={data.content.hero_name ?? "Jayita Sharma"}
          title={
            data.content.hero_title ??
            "I build products people trust, systems that scale, and growth that compounds."
          }
          summary={
            data.content.hero_summary ??
            "From marketplace platforms to AI automation — I work at the intersection of user insight and business impact."
          }
        />
        <InstitutionStrip />
        <AboutSection
          paragraphs={data.aboutParagraphs ?? []}
          fallbackBody={
            data.content.about ??
            "Jayita works across product strategy, discovery architecture, and growth systems."
          }
          closingLine={data.aboutClosingLine}
          tags={data.aboutTags}
        />
        <FeaturedWorkZ stories={data.featuredStories} projects={data.projects} />
        {data.moreProjects && data.moreProjects.length > 0 ? (
          <MoreProjectsGrid items={data.moreProjects} />
        ) : null}
        {data.skills?.categories && data.skills.categories.length > 0 ? (
          <SkillsSection data={data.skills} />
        ) : null}
        {data.certifications && data.certifications.length > 0 ? (
          <CertificationsSection items={data.certifications} />
        ) : null}
        {data.writingComingSoon || (data.writing && data.writing.length > 0) ? (
          <WritingAccordion groups={data.writing ?? []} comingSoon={!!data.writingComingSoon} />
        ) : null}
        <SiteFooter />
      </div>
    </div>
  );
}
