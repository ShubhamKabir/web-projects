"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  MoreHorizontal,
  Plus,
  Users,
} from "lucide-react";
import { activities, members, projects, tasks } from "@/lib/data";

export default function ProjectDetail({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const projectTasks = tasks.filter((task) => task.projectId === project.id);

  const projectMembers = project.members
    .map((id) => members.find((member) => member.id === id))
    .filter(Boolean);

  const completed = projectTasks.filter(
    (task) => task.status === "Done",
  ).length;

  const inProgress = projectTasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  return (
    <div className="space-y-7">
      {/* Breadcrumb */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-medium text-[#747980] transition hover:text-[#17191c]"
      >
        <ArrowLeft size={14} />
        Back to projects
      </Link>

      {/* Project header */}
      <section className="rounded-xl border border-[#e1e3e6] bg-white">
        <div className="p-6 md:p-7">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="flex gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: project.color }}
              >
                <span className="text-lg font-semibold">
                  {project.name.charAt(0)}
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                    {project.name}
                  </h1>

                  <StatusBadge status={project.status} />
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#747980]">
                  {project.description}
                </p>
              </div>
            </div>

            <button
              className="self-start rounded-lg border border-[#e1e3e6] p-2 text-[#747980] transition hover:bg-[#f4f5f7] hover:text-[#17191c]"
              aria-label="Project options"
            >
              <MoreHorizontal size={19} />
            </button>
          </div>

          {/* Project meta */}
          <div className="mt-7 grid gap-4 border-t border-[#e1e3e6] pt-6 sm:grid-cols-3">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#92969c]">
                Progress
              </p>

              <div className="mt-2 flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-[#eceef0]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${project.progress}%`,
                      backgroundColor: project.color,
                    }}
                  />
                </div>

                <span className="text-sm font-semibold">
                  {project.progress}%
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#92969c]">
                Deadline
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm font-medium">
                <CalendarDays size={16} className="text-[#747980]" />
                {project.dueDate}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#92969c]">
                Team
              </p>

              <div className="mt-2 flex items-center">
                {projectMembers.map((member, index) =>
                  member ? (
                    <div
                      key={member.id}
                      title={member.name}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#e5f2f0] text-[8px] font-semibold text-[#247c78] ${
                        index > 0 ? "-ml-2" : ""
                      }`}
                    >
                      {member.initials}
                    </div>
                  ) : null,
                )}

                <span className="ml-2 text-xs text-[#747980]">
                  {projectMembers.length} members
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
        {/* Tasks */}
        <section className="rounded-xl border border-[#e1e3e6] bg-white">
          <div className="flex items-center justify-between border-b border-[#e1e3e6] px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold">Project tasks</h2>

              <p className="mt-0.5 text-xs text-[#747980]">
                {completed} completed · {inProgress} in progress
              </p>
            </div>

            <button className="inline-flex items-center gap-1.5 rounded-lg bg-[#17191c] px-3 py-2 text-xs font-medium text-white hover:bg-[#292c30]">
              <Plus size={14} />
              Add task
            </button>
          </div>

          <div className="divide-y divide-[#e1e3e6]">
            {projectTasks.map((task) => {
              const assignee = members.find(
                (member) => member.id === task.assigneeId,
              );

              return (
                <div
                  key={task.id}
                  className="flex items-center gap-3 px-5 py-4 transition hover:bg-[#f8f9fa]"
                >
                  <TaskIcon status={task.status} />

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-medium ${
                        task.status === "Done"
                          ? "text-[#92969c] line-through"
                          : "text-[#17191c]"
                      }`}
                    >
                      {task.title}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-3">
                      <PriorityBadge priority={task.priority} />

                      <span className="flex items-center gap-1 text-[10px] text-[#92969c]">
                        <CalendarDays size={11} />
                        {task.dueDate}
                      </span>
                    </div>
                  </div>

                  {assignee && (
                    <div
                      title={assignee.name}
                      className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef0f2] text-[8px] font-semibold text-[#555a60] sm:flex"
                    >
                      {assignee.initials}
                    </div>
                  )}

                  <button
                    className="rounded p-1 text-[#b0b3b7] hover:bg-[#f0f2f3] hover:text-[#555a60]"
                    aria-label="Task options"
                  >
                    <MoreHorizontal size={15} />
                  </button>
                </div>
              );
            })}

            {projectTasks.length === 0 && (
              <div className="px-5 py-12 text-center">
                <CheckCircle2 size={25} className="mx-auto text-[#247c78]" />
                <p className="mt-3 text-sm font-medium">No tasks yet</p>
              </div>
            )}
          </div>
        </section>

        {/* Right column */}
        <div className="space-y-5">
          {/* Overview */}
          <section className="rounded-xl border border-[#e1e3e6] bg-white">
            <div className="border-b border-[#e1e3e6] px-5 py-4">
              <h2 className="text-sm font-semibold">Project overview</h2>
            </div>

            <div className="grid grid-cols-2 divide-x divide-[#e1e3e6]">
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#92969c]">
                  Total tasks
                </p>

                <p className="mt-2 text-2xl font-semibold">
                  {projectTasks.length}
                </p>
              </div>

              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#92969c]">
                  Completed
                </p>

                <p className="mt-2 text-2xl font-semibold">{completed}</p>
              </div>
            </div>
          </section>

          {/* Members */}
          <section className="rounded-xl border border-[#e1e3e6] bg-white">
            <div className="flex items-center justify-between border-b border-[#e1e3e6] px-5 py-4">
              <h2 className="text-sm font-semibold">Project members</h2>

              <button
                className="rounded-lg p-1.5 text-[#747980] hover:bg-[#f4f5f7]"
                aria-label="Add member"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="divide-y divide-[#e1e3e6]">
              {projectMembers.map((member) =>
                member ? (
                  <div
                    key={member.id}
                    className="flex items-center gap-3 px-5 py-3.5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f2f0] text-[9px] font-semibold text-[#247c78]">
                      {member.initials}
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold">{member.name}</p>

                      <p className="mt-0.5 text-[10px] text-[#747980]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ) : null,
              )}
            </div>
          </section>

          {/* Activity */}
          <section className="rounded-xl border border-[#e1e3e6] bg-white">
            <div className="border-b border-[#e1e3e6] px-5 py-4">
              <h2 className="text-sm font-semibold">Recent activity</h2>
            </div>

            <div className="divide-y divide-[#e1e3e6]">
              {activities.slice(0, 3).map((activity) => {
                const member = members.find(
                  (item) => item.id === activity.memberId,
                );

                return (
                  <div key={activity.id} className="flex gap-3 px-5 py-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef0f2] text-[8px] font-semibold text-[#555a60]">
                      {member?.initials}
                    </div>

                    <div>
                      <p className="text-[11px] leading-5 text-[#555a60]">
                        <span className="font-semibold text-[#17191c]">
                          {member?.name}
                        </span>{" "}
                        {activity.action}{" "}
                        <span className="font-medium text-[#17191c]">
                          {activity.target}
                        </span>
                      </p>

                      <p className="mt-0.5 text-[9px] text-[#92969c]">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function TaskIcon({ status }: { status: string }) {
  if (status === "Done") {
    return (
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#247c78] text-white">
        <Check size={12} strokeWidth={2.5} />
      </div>
    );
  }

  if (status === "In Progress") {
    return (
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#247c78]">
        <div className="h-1.5 w-1.5 rounded-full bg-[#247c78]" />
      </div>
    );
  }

  return (
    <Circle size={20} strokeWidth={1.5} className="shrink-0 text-[#c4c7ca]" />
  );
}

function PriorityBadge({ priority }: { priority: "Low" | "Medium" | "High" }) {
  const styles = {
    Low: "bg-[#eef0f2] text-[#747980]",
    Medium: "bg-[#f7efe0] text-[#a36e20]",
    High: "bg-[#f7e8e8] text-[#b15151]",
  };

  return (
    <span
      className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${styles[priority]}`}
    >
      {priority}
    </span>
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
      className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
