import ProjectDetails from "@/components/project-details-page/main-page";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <ProjectDetails slug={slug} />
    </main>
  );
}
