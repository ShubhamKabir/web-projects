"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FolderKanban,
  MoreHorizontal,
  Plus,
  TrendingUp,
} from "lucide-react";
import { activities, members, projects, tasks } from "@/lib/data";

export default function Dashboard() {
  const completedTasks = tasks.filter((task) => task.status === "Done").length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  const dueToday = tasks.filter(
    (task) => task.dueDate === "Sep 18, 2026",
  ).length;

  const averageProgress = Math.round(
    projects.reduce((sum, project) => sum + project.progress, 0) /
      projects.length,
  );

  const getMember = (id: number) => members.find((member) => member.id === id);

  const getProject = (id: number) =>
    projects.find((project) => project.id === id);

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#747980]">
            Monday, September 18
          </p>

          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-[#17191c] md:text-4xl">
            Good morning, Shubham.
          </h1>

          <p className="mt-2 text-sm text-[#747980]">
            Here&apos;s what&apos;s happening across your workspace.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#247c78] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1e6b67]"
        >
          <Plus size={17} />
          New project
        </Link>
      </div>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Active projects"
          value={projects
            .filter((project) => project.status !== "Completed")
            .length.toString()}
          detail="2 on track"
          icon={<FolderKanban size={18} />}
        />

        <StatCard
          label="Tasks completed"
          value={completedTasks.toString()}
          detail="This workspace"
          icon={<CheckCircle2 size={18} />}
        />

        <StatCard
          label="In progress"
          value={inProgressTasks.toString()}
          detail="Across all projects"
          icon={<Clock3 size={18} />}
        />

        <StatCard
          label="Overall progress"
          value={`${averageProgress}%`}
          detail="+8% this month"
          icon={<TrendingUp size={18} />}
        />
      </section>

      {/* Main grid */}
      <section className="grid gap-5 xl:grid-cols-[1.45fr_0.85fr]">
        {/* Projects */}
        <div className="rounded-xl border border-[#e1e3e6] bg-white">
          <div className="flex items-center justify-between border-b border-[#e1e3e6] px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold text-[#17191c]">Projects</h2>

              <p className="mt-0.5 text-xs text-[#747980]">
                Current workspace progress
              </p>
            </div>

            <Link
              href="/projects"
              className="flex items-center gap-1 text-xs font-medium text-[#247c78] hover:underline"
            >
              View all
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="divide-y divide-[#e1e3e6]">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex flex-col gap-4 px-5 py-5 transition hover:bg-[#f8f9fa] sm:flex-row sm:items-center"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <span
                    className="h-9 w-1 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-[#17191c]">
                      {project.name}
                    </h3>

                    <p className="mt-1 truncate text-xs text-[#747980]">
                      Due {project.dueDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 sm:w-[280px]">
                  <div className="flex-1">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#92969c]">
                        Progress
                      </span>

                      <span className="text-xs font-medium text-[#17191c]">
                        {project.progress}%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-[#eceef0]">
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
            ))}
          </div>
        </div>

        {/* Due today */}
        <div className="rounded-xl border border-[#e1e3e6] bg-white">
          <div className="flex items-center justify-between border-b border-[#e1e3e6] px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold text-[#17191c]">
                Due today
              </h2>

              <p className="mt-0.5 text-xs text-[#747980]">
                {dueToday} task{dueToday !== 1 ? "s" : ""} need attention
              </p>
            </div>

            <Link
              href="/tasks"
              className="text-xs font-medium text-[#247c78] hover:underline"
            >
              All tasks
            </Link>
          </div>

          <div className="divide-y divide-[#e1e3e6]">
            {tasks
              .filter((task) => task.dueDate === "Sep 18, 2026")
              .map((task) => {
                const member = getMember(task.assigneeId);
                const project = getProject(task.projectId);

                return (
                  <div key={task.id} className="px-5 py-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-[#cdd0d4]" />

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-[#17191c]">
                          {task.title}
                        </p>

                        <p className="mt-1 text-xs text-[#747980]">
                          {project?.name}
                        </p>
                      </div>

                      {member && (
                        <div
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e5f2f0] text-[9px] font-semibold text-[#247c78]"
                          title={member.name}
                        >
                          {member.initials}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

            {dueToday === 0 && (
              <div className="px-5 py-10 text-center">
                <CheckCircle2 size={24} className="mx-auto text-[#247c78]" />
                <p className="mt-3 text-sm font-medium">Nothing due today</p>
                <p className="mt-1 text-xs text-[#747980]">
                  You&apos;re all caught up.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom grid */}
      <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        {/* Team */}
        <div className="rounded-xl border border-[#e1e3e6] bg-white">
          <div className="flex items-center justify-between border-b border-[#e1e3e6] px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold">Team overview</h2>
              <p className="mt-0.5 text-xs text-[#747980]">
                People working across PULSE
              </p>
            </div>

            <Link
              href="/team"
              className="text-xs font-medium text-[#247c78] hover:underline"
            >
              View team
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3">
            {members.slice(0, 5).map((member) => (
              <div
                key={member.id}
                className="rounded-lg border border-[#e1e3e6] p-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef0f2] text-[10px] font-semibold text-[#555a60]">
                    {member.initials}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold">
                      {member.name}
                    </p>

                    <p className="truncate text-[10px] text-[#747980]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="rounded-xl border border-[#e1e3e6] bg-white">
          <div className="flex items-center justify-between border-b border-[#e1e3e6] px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold">Recent activity</h2>

              <p className="mt-0.5 text-xs text-[#747980]">
                Latest workspace updates
              </p>
            </div>

            <Link
              href="/activity"
              className="flex items-center gap-1 text-xs font-medium text-[#247c78] hover:underline"
            >
              See all
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="divide-y divide-[#e1e3e6]">
            {activities.map((activity) => {
              const member = getMember(activity.memberId);

              return (
                <div key={activity.id} className="flex gap-3 px-5 py-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5f2f0] text-[9px] font-semibold text-[#247c78]">
                    {member?.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs leading-5 text-[#555a60]">
                      <span className="font-semibold text-[#17191c]">
                        {member?.name}
                      </span>{" "}
                      {activity.action}{" "}
                      <span className="font-medium text-[#17191c]">
                        {activity.target}
                      </span>
                    </p>

                    <p className="mt-0.5 text-[10px] text-[#92969c]">
                      {activity.time}
                    </p>
                  </div>

                  <MoreHorizontal
                    size={15}
                    className="shrink-0 text-[#b0b3b7]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#e1e3e6] bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-[#747980]">{label}</p>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e5f2f0] text-[#247c78]">
          {icon}
        </div>
      </div>

      <p className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{value}</p>

      <p className="mt-1 text-[11px] text-[#92969c]">{detail}</p>
    </div>
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
      className={`hidden shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium sm:inline-block ${styles[status]}`}
    >
      {status}
    </span>
  );
}
