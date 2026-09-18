"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  ChevronDown,
  Circle,
  Filter,
  MoreHorizontal,
  Search,
} from "lucide-react";
import {
  members,
  projects,
  tasks as initialTasks,
  type TaskPriority,
  type TaskStatus,
} from "@/lib/data";

type StatusFilter = "All" | TaskStatus;
type PriorityFilter = "All" | TaskPriority;

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<StatusFilter>("All");
  const [priority, setPriority] = useState<PriorityFilter>("All");
  const [projectFilter, setProjectFilter] = useState("All");

  const filteredTasks = useMemo(() => {
    const query = search.toLowerCase().trim();

    return tasks.filter((task) => {
      const project = projects.find((item) => item.id === task.projectId);

      const assignee = members.find((member) => member.id === task.assigneeId);

      const matchesSearch =
        !query ||
        task.title.toLowerCase().includes(query) ||
        project?.name.toLowerCase().includes(query) ||
        assignee?.name.toLowerCase().includes(query);

      const matchesStatus = status === "All" || task.status === status;

      const matchesPriority = priority === "All" || task.priority === priority;

      const matchesProject =
        projectFilter === "All" || task.projectId === Number(projectFilter);

      return (
        matchesSearch && matchesStatus && matchesPriority && matchesProject
      );
    });
  }, [tasks, search, status, priority, projectFilter]);

  function cycleStatus(taskId: number) {
    const statuses: TaskStatus[] = ["Todo", "In Progress", "Review", "Done"];

    setTasks((current) =>
      current.map((task) => {
        if (task.id !== taskId) return task;

        const currentIndex = statuses.indexOf(task.status);
        const nextStatus = statuses[(currentIndex + 1) % statuses.length];

        return {
          ...task,
          status: nextStatus,
        };
      }),
    );
  }

  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#747980]">
          Workspace
        </p>

        <h1 className="text-3xl font-semibold tracking-[-0.03em]">Tasks</h1>

        <p className="mt-2 text-sm text-[#747980]">
          Manage everything that needs to get done.
        </p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard label="Total tasks" value={tasks.length} />

        <SummaryCard
          label="To do"
          value={tasks.filter((task) => task.status === "Todo").length}
        />

        <SummaryCard
          label="In progress"
          value={tasks.filter((task) => task.status === "In Progress").length}
        />

        <SummaryCard
          label="Completed"
          value={tasks.filter((task) => task.status === "Done").length}
        />
      </div>

      {/* Toolbar */}
      <div className="rounded-xl border border-[#e1e3e6] bg-white p-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          {/* Search */}
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[#e1e3e6] px-3 py-2">
            <Search size={16} className="shrink-0 text-[#92969c]" />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search tasks, projects or people..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#a1a5aa]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <SelectFilter
              icon={<Filter size={14} />}
              value={status}
              onChange={(value) => setStatus(value as StatusFilter)}
              options={["All", "Todo", "In Progress", "Review", "Done"]}
            />

            <SelectFilter
              value={priority}
              onChange={(value) => setPriority(value as PriorityFilter)}
              options={["All", "Low", "Medium", "High"]}
            />

            <SelectFilter
              value={projectFilter}
              onChange={(value) => setProjectFilter(value)}
              options={[
                "All",
                ...projects.map((project) => project.id.toString()),
              ]}
              labels={[
                "All projects",
                ...projects.map((project) => project.name),
              ]}
            />
          </div>
        </div>
      </div>

      {/* Task list */}
      <div className="overflow-hidden rounded-xl border border-[#e1e3e6] bg-white">
        <div className="flex items-center justify-between border-b border-[#e1e3e6] px-5 py-4">
          <div>
            <h2 className="text-sm font-semibold">All tasks</h2>

            <p className="mt-0.5 text-xs text-[#747980]">
              Showing {filteredTasks.length} of {tasks.length} tasks
            </p>
          </div>

          <button className="hidden items-center gap-2 rounded-lg border border-[#e1e3e6] px-3 py-2 text-xs font-medium text-[#555a60] hover:bg-[#f8f9fa] sm:flex">
            <Filter size={14} />
            Customize
          </button>
        </div>

        {/* Desktop header */}
        <div className="hidden border-b border-[#e1e3e6] bg-[#f8f9fa] px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#92969c] md:grid md:grid-cols-[minmax(260px,1.5fr)_1fr_110px_120px_30px] md:items-center md:gap-4">
          <span>Task</span>
          <span>Project</span>
          <span>Priority</span>
          <span>Due date</span>
          <span />
        </div>

        <div className="divide-y divide-[#e1e3e6]">
          {filteredTasks.map((task) => {
            const project = projects.find((item) => item.id === task.projectId);

            const assignee = members.find(
              (member) => member.id === task.assigneeId,
            );

            return (
              <div
                key={task.id}
                className="group px-5 py-4 transition hover:bg-[#fafbfb]"
              >
                {/* Desktop */}
                <div className="hidden md:grid md:grid-cols-[minmax(260px,1.5fr)_1fr_110px_120px_30px] md:items-center md:gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <StatusButton
                      status={task.status}
                      onClick={() => cycleStatus(task.id)}
                    />

                    <div className="min-w-0">
                      <p
                        className={`truncate text-sm font-medium ${
                          task.status === "Done"
                            ? "text-[#92969c] line-through"
                            : "text-[#17191c]"
                        }`}
                      >
                        {task.title}
                      </p>

                      {assignee && (
                        <div className="mt-1 flex items-center gap-1.5">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e5f2f0] text-[7px] font-semibold text-[#247c78]">
                            {assignee.initials}
                          </div>

                          <span className="text-[10px] text-[#92969c]">
                            {assignee.name}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="truncate text-xs text-[#747980]">
                    {project?.name}
                  </span>

                  <PriorityBadge priority={task.priority} />

                  <span className="flex items-center gap-1.5 text-xs text-[#747980]">
                    <CalendarDays size={13} />
                    {task.dueDate}
                  </span>

                  <button
                    className="rounded p-1 text-[#b0b3b7] hover:bg-[#eef0f2] hover:text-[#555a60]"
                    aria-label="Task options"
                  >
                    <MoreHorizontal size={15} />
                  </button>
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                  <div className="flex items-start gap-3">
                    <StatusButton
                      status={task.status}
                      onClick={() => cycleStatus(task.id)}
                    />

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

                      <p className="mt-1 text-xs text-[#747980]">
                        {project?.name}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <PriorityBadge priority={task.priority} />

                        <span className="flex items-center gap-1 text-[10px] text-[#92969c]">
                          <CalendarDays size={11} />
                          {task.dueDate}
                        </span>

                        {assignee && (
                          <span className="flex items-center gap-1.5 text-[10px] text-[#92969c]">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e5f2f0] text-[7px] font-semibold text-[#247c78]">
                              {assignee.initials}
                            </span>
                            {assignee.name}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      className="rounded p-1 text-[#b0b3b7]"
                      aria-label="Task options"
                    >
                      <MoreHorizontal size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredTasks.length === 0 && (
            <div className="px-5 py-16 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f2f3]">
                <Search size={18} className="text-[#747980]" />
              </div>

              <h3 className="mt-4 text-sm font-semibold">No tasks found</h3>

              <p className="mt-1 text-xs text-[#747980]">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="text-center text-[10px] text-[#a1a5aa]">
        Click a task status to cycle through its workflow.
      </p>
    </div>
  );
}

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-[#e1e3e6] bg-white p-5">
      <p className="text-xs text-[#747980]">{label}</p>

      <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{value}</p>
    </div>
  );
}

function SelectFilter({
  value,
  onChange,
  options,
  labels,
  icon,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  labels?: string[];
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        value={labels ? (options[labels.indexOf(value)] ?? options[0]) : value}
        onChange={(event) => {
          const selectedIndex = options.indexOf(event.target.value);

          onChange(
            labels
              ? (options[selectedIndex] ?? options[0])
              : event.target.value,
          );
        }}
        className="h-9 appearance-none rounded-lg border border-[#e1e3e6] bg-white py-0 pl-3 pr-8 text-xs font-medium text-[#555a60] outline-none hover:bg-[#f8f9fa]"
      >
        {options.map((option, index) => (
          <option key={option} value={option}>
            {labels?.[index] ?? option}
          </option>
        ))}
      </select>

      {icon && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#747980]">
          {icon}
        </span>
      )}

      <ChevronDown
        size={13}
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#92969c]"
      />
    </div>
  );
}

function StatusButton({
  status,
  onClick,
}: {
  status: TaskStatus;
  onClick: () => void;
}) {
  if (status === "Done") {
    return (
      <button
        onClick={onClick}
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#247c78] text-white"
        title="Change status"
      >
        <Check size={12} strokeWidth={2.5} />
      </button>
    );
  }

  if (status === "In Progress") {
    return (
      <button
        onClick={onClick}
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#247c78]"
        title="Change status"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#247c78]" />
      </button>
    );
  }

  if (status === "Review") {
    return (
      <button
        onClick={onClick}
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#c58a27]"
        title="Change status"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#c58a27]" />
      </button>
    );
  }

  return (
    <button onClick={onClick} title="Change status" className="shrink-0">
      <Circle size={20} strokeWidth={1.5} className="text-[#c4c7ca]" />
    </button>
  );
}

function PriorityBadge({ priority }: { priority: TaskPriority }) {
  const styles = {
    Low: "bg-[#eef0f2] text-[#747980]",
    Medium: "bg-[#f7efe0] text-[#a36e20]",
    High: "bg-[#f7e8e8] text-[#b15151]",
  };

  return (
    <span
      className={`inline-flex rounded px-1.5 py-1 text-[9px] font-medium ${styles[priority]}`}
    >
      {priority}
    </span>
  );
}
