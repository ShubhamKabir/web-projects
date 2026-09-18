import { notFound } from "next/navigation";
import AppShell from "@/components/app-shell";
import ProjectDetail from "@/components/project-detail";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    notFound();
  }

  return (
    <AppShell>
      <ProjectDetail project={project} />
    </AppShell>
  );
}
