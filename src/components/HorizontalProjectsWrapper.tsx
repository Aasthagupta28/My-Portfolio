import { getPosts } from "@/utils/utils";
import { HorizontalProjects } from "./HorizontalProjects";

export const HorizontalProjectsWrapper = () => {
  const projects = getPosts(["src", "app", "work", "projects"])
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .map((post) => ({
      slug: post.slug,
      metadata: {
        title: post.metadata.title,
        summary: post.metadata.summary,
        publishedAt: post.metadata.publishedAt,
        link: post.metadata.link,
      },
    }));

  return <HorizontalProjects projects={projects} />;
};


