import { FeaturedWorkInteractive } from "@/components/portfolio/FeaturedWorkInteractive";
import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { FeaturedStory, ProjectItem } from "@/types/portfolio";

type Props = {
  stories?: FeaturedStory[];
  projects: ProjectItem[];
};

function legacyStoriesFromProjects(projects: ProjectItem[]): FeaturedStory[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order)
    .map((p) => ({
      id: p.id,
      order: p.order,
      badge: p.subtitle,
      title: p.title,
      meta: "",
      paragraphs: [
        [{ text: p.problem }],
        [{ text: p.approach }],
        [{ text: p.impact, strong: false }],
      ],
      footerTags: p.tools ? p.tools.split(",").map((t) => t.trim()) : [],
      featuredImage: p.featuredImage,
      featuredImageAlt: p.featuredImageAlt ?? p.title,
    }));
}

export function FeaturedWorkZ({ stories, projects }: Props) {
  const list =
    stories && stories.length > 0 ? [...stories].sort((a, b) => a.order - b.order) : legacyStoriesFromProjects(projects);

  if (!list.length) return null;

  return (
    <section id="featured" className="featured-work">
      <SectionTitle line={false}>Featured Product Work</SectionTitle>
      <FeaturedWorkInteractive stories={list} />
    </section>
  );
}
