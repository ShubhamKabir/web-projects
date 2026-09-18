"use client";

import { useMemo, useState } from "react";
import {
  Activity as ActivityIcon,
  CheckCircle2,
  CircleDot,
  Clock3,
  MessageSquare,
  Search,
  UserPlus,
} from "lucide-react";
import { activities, members, projects } from "@/lib/data";

type ActivityFilter = "All activity" | "Completed" | "Comments" | "Started";

export default function ActivityPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ActivityFilter>("All activity");

  const filteredActivities = useMemo(() => {
    const query = search.toLowerCase().trim();

    return activities.filter((activity) => {
      const member = members.find((item) => item.id === activity.memberId);

      const matchesSearch =
        !query ||
        member?.name.toLowerCase().includes(query) ||
        activity.target.toLowerCase().includes(query) ||
        activity.action.toLowerCase().includes(query);

      const matchesFilter =
        filter === "All activity" ||
        (filter === "Completed" && activity.action === "completed") ||
        (filter === "Comments" && activity.action === "commented on") ||
        (filter === "Started" && activity.action === "started");

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#747980]">
          Manage
        </p>

        <h1 className="text-3xl font-semibold tracking-[-0.03em]">Activity</h1>

        <p className="mt-2 text-sm text-[#747980]">
          See what&apos;s happening across your workspace.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 rounded-xl border border-[#e1e3e6] bg-white p-3 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-2 rounded-lg border border-[#e1e3e6] px-3 py-2 md:w-[320px]">
          <Search size={16} className="shrink-0 text-[#92969c]" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search activity..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#a1a5aa]"
          />
        </div>

        <div className="flex overflow-x-auto rounded-lg border border-[#e1e3e6]">
          {(
            [
              "All activity",
              "Completed",
              "Comments",
              "Started",
            ] as ActivityFilter[]
          ).map((item) => (
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
          ))}
        </div>
      </div>

      {/* Activity content */}
      <div className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        {/* Timeline */}
        <section className="rounded-xl border border-[#e1e3e6] bg-white">
          <div className="border-b border-[#e1e3e6] px-5 py-4">
            <div className="flex items-center gap-2">
              <ActivityIcon size={16} className="text-[#247c78]" />

              <h2 className="text-sm font-semibold">Workspace timeline</h2>
            </div>

            <p className="mt-1 text-xs text-[#747980]">
              {filteredActivities.length} recent updates
            </p>
          </div>

          {filteredActivities.length > 0 ? (
            <div className="divide-y divide-[#e1e3e6]">
              {filteredActivities.map((activity) => {
                const member = members.find(
                  (item) => item.id === activity.memberId,
                );

                return (
                  <ActivityRow
                    key={activity.id}
                    activity={activity}
                    member={member}
                  />
                );
              })}
            </div>
          ) : (
            <div className="px-6 py-16 text-center">
              <Search size={20} className="mx-auto text-[#92969c]" />

              <h3 className="mt-3 text-sm font-semibold">No activity found</h3>

              <p className="mt-1 text-xs text-[#747980]">
                Try another search or filter.
              </p>
            </div>
          )}
        </section>

        {/* Summary */}
        <aside className="space-y-5">
          <section className="rounded-xl border border-[#e1e3e6] bg-white">
            <div className="border-b border-[#e1e3e6] px-5 py-4">
              <h2 className="text-sm font-semibold">Activity summary</h2>
            </div>

            <div className="divide-y divide-[#e1e3e6]">
              <SummaryRow
                icon={<CheckCircle2 size={16} />}
                label="Completed"
                value={
                  activities.filter((item) => item.action === "completed")
                    .length
                }
              />

              <SummaryRow
                icon={<MessageSquare size={16} />}
                label="Comments"
                value={
                  activities.filter((item) => item.action === "commented on")
                    .length
                }
              />

              <SummaryRow
                icon={<Clock3 size={16} />}
                label="Started"
                value={
                  activities.filter((item) => item.action === "started").length
                }
              />

              <SummaryRow
                icon={<CircleDot size={16} />}
                label="Total updates"
                value={activities.length}
              />
            </div>
          </section>

          <section className="rounded-xl border border-[#e1e3e6] bg-[#17191c] p-5 text-white">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/40">
              Workspace
            </p>

            <h2 className="mt-3 text-lg font-semibold tracking-[-0.02em]">
              Keep everyone aligned.
            </h2>

            <p className="mt-2 text-xs leading-5 text-white/50">
              PULSE keeps project updates, decisions and progress visible to the
              whole team.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}

function ActivityRow({
  activity,
  member,
}: {
  activity: (typeof activities)[number];
  member?: (typeof members)[number];
}) {
  return (
    <div className="flex gap-4 px-5 py-5">
      <div className="relative shrink-0">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5f2f0] text-[9px] font-semibold text-[#247c78]">
          {member?.initials}
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col justify-between gap-1 sm:flex-row">
          <p className="text-xs leading-5 text-[#555a60]">
            <span className="font-semibold text-[#17191c]">{member?.name}</span>{" "}
            {activity.action}{" "}
            <span className="font-medium text-[#17191c]">
              {activity.target}
            </span>
          </p>

          <span className="shrink-0 text-[10px] text-[#92969c]">
            {activity.time}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <ActivityType action={activity.action} />

          <span className="text-[10px] text-[#b0b3b7]">Workspace activity</span>
        </div>
      </div>
    </div>
  );
}

function ActivityType({ action }: { action: string }) {
  if (action === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f3ef] px-2 py-1 text-[9px] font-medium text-[#287b67]">
        <CheckCircle2 size={10} />
        Completed
      </span>
    );
  }

  if (action === "commented on") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef0f2] px-2 py-1 text-[9px] font-medium text-[#666b71]">
        <MessageSquare size={10} />
        Comment
      </span>
    );
  }

  if (action === "started") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e5f2f0] px-2 py-1 text-[9px] font-medium text-[#247c78]">
        <Clock3 size={10} />
        Started
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef0f2] px-2 py-1 text-[9px] font-medium text-[#666b71]">
      <UserPlus size={10} />
      Update
    </span>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <div className="flex items-center gap-3">
        <span className="text-[#747980]">{icon}</span>
        <span className="text-xs text-[#555a60]">{label}</span>
      </div>

      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}
