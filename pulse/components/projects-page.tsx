"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  LayoutGrid,
  List,
  Plus,
  Search,
} from "lucide-react";
import { members, projects } from "@/lib/data";

type Filter = "All" | "On Track" | "At Risk" | "Completed";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = filter === "All" || project.status === filter;

      const query = search.toLowerCase();

      const matchesSearch =
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="space-y-7">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#747980]">
            Workspace
          </p>

          <h1 className="text-3xl font-semibold tracking-[-0.03em]">
            Projects
          </h1>

          <p className="mt-2 text-sm text-[#747980]">
            Keep track of progress across your active work.
          </p>
        </div>

        <button className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#247c78] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1e6b67]">
          <Plus size={17} />
          New project
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 rounded-xl border border-[#e1e3e6] bg-white p-3 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-2 rounded-lg border border-[#e1e3e6] px-3 py-2 md:w-[300px]">
          <Search size={16} className="shrink-0 text-[#92969c]" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#a1a5aa]"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex overflow-x-auto rounded-lg border border-[#e1e3e6]">
            {(["All", "On Track", "At Risk", "Completed"] as Filter[]).map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={[
                    "whitespace-nowrap px-3 py-2 text-xs font-medium transition",
                    filter === item
                      ? "bg-[#17191c] text-white"
                      : "text-[#747980] hover:bg-[#f4f5f7]",
                  ].join(" ")}
                >
                  {item}
                </button>
              ),
            )}
          </div>

          <div className="hidden items-center rounded-lg border border-[#e1e3e6] sm:flex">
            <button
              onClick={() => setView("grid")}
              className={`p-2 ${
                view === "grid" ? "text-[#17191c]" : "text-[#a1a5aa]"
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid size={16} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`p-2 ${
                view === "list" ? "text-[#17191c]" : "text-[#a1a5aa]"
              }`}
              aria-label="List view"
            >
              <List size={17} />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredProjects.length > 0 ? (
        view === "grid" ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-[#e1e3e6] bg-white">
            <div className="divide-y divide-[#e1e3e6]">
              {filteredProjects.map((project) => (
                <ProjectListItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="rounded-xl border border-dashed border-[#d5d8dc] bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f2f3]">
            <Search size={19} className="text-[#747980]" />
          </div>

          <h2 className="mt-4 text-sm font-semibold">No projects found</h2>

          <p className="mt-1 text-xs text-[#747980]">
            Try changing your search or filter.
          </p>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const projectMembers = project.members
    .map((id) => members.find((member) => member.id === id))
    .filter(Boolean);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group rounded-xl border border-[#e1e3e6] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#cfd3d7] hover:shadow-[0_8px_30px_rgba(20,24,28,0.06)]"
    >
      <div className="flex items-start justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
          style={{ backgroundColor: project.color }}
        >
          <span className="text-sm font-semibold">
            {project.name.charAt(0)}
          </span>
        </div>

        <span className="rounded-full bg-[#f1f2f3] p-1.5 text-[#747980] transition group-hover:bg-[#e5f2f0] group-hover:text-[#247c78]">
          <ArrowUpRight size={15} />
        </span>
      </div>

      <div className="mt-5">
        <h2 className="text-base font-semibold tracking-[-0.01em]">
          {project.name}
        </h2>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#747980]">
          {project.description}
        </p>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#92969c]">
            Progress
          </span>

          <span className="text-xs font-semibold">{project.progress}%</span>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-[#eceef0]">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${project.progress}%`,
              backgroundColor: project.color,
            }}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#e8eaec] pt-4">
        <div className="flex items-center">
          {projectMembers.map((member, index) =>
            member ? (
              <div
                key={member.id}
                title={member.name}
                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#eef0f2] text-[8px] font-semibold text-[#555a60] ${
                  index > 0 ? "-ml-2" : ""
                }`}
              >
                {member.initials}
              </div>
            ) : null,
          )}
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-[#747980]">
          <CalendarDays size={13} />
          {project.dueDate}
        </div>
      </div>

      <div className="mt-4">
        <StatusBadge status={project.status} />
      </div>
    </Link>
  );
}

function ProjectListItem({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="flex flex-col gap-4 px-5 py-5 transition hover:bg-[#f8f9fa] md:flex-row md:items-center"
    >
      <div
        className="h-9 w-9 shrink-0 rounded-lg"
        style={{ backgroundColor: project.color }}
      />

      <div className="min-w-0 flex-1">
        <h2 className="text-sm font-semibold">{project.name}</h2>
        <p className="mt-1 truncate text-xs text-[#747980]">
          {project.description}
        </p>
      </div>

      <div className="flex items-center gap-5 md:w-[380px]">
        <div className="flex-1">
          <div className="mb-1 flex justify-between">
            <span className="text-[10px] text-[#92969c]">Progress</span>

            <span className="text-[10px] font-semibold">
              {project.progress}%
            </span>
          </div>

          <div className="h-1.5 rounded-full bg-[#eceef0]">
            <div
              className="h-full rounded-full"
              style={{
                width: `${project.progress}%`,
                backgroundColor: project.color,
              }}
            />
          </div>
        </div>

        <StatusBadge status={project.status} />
      </div>
    </Link>
  );
}

function StatusBadge({
  status,
}: {
  status: "On Track" | "At Risk" | "Completed";
}) {
  const styles = {
    "On Track": "bg-[#e8f3ef] text-[#287b67]",
    "At Risk": "bg-[#f7efe0] text-[#a36e20]",
    Completed: "bg-[#eef0f2] text-[#666b71]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ${styles[status]}`}
    >
      {status === "Completed" && <CheckCircle2 size={11} />}
      {status}
    </span>
  );
}
