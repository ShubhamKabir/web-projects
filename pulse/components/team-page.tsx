"use client";

import { useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  Plus,
  Search,
  UserRound,
} from "lucide-react";
import { members, projects, tasks } from "@/lib/data";

export default function TeamPage() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All roles");
  const [showInvite, setShowInvite] = useState(false);

  const roles = [
    "All roles",
    ...Array.from(new Set(members.map((member) => member.role))),
  ];

  const filteredMembers = useMemo(() => {
    const query = search.toLowerCase().trim();

    return members.filter((member) => {
      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query);

      const matchesRole = role === "All roles" || member.role === role;

      return matchesSearch && matchesRole;
    });
  }, [search, role]);

  function memberTasks(memberId: number) {
    return tasks.filter((task) => task.assigneeId === memberId);
  }

  function memberProjects(memberId: number) {
    return projects.filter((project) => project.members.includes(memberId));
  }

  return (
    <div className="space-y-7">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#747980]">
            Manage
          </p>

          <h1 className="text-3xl font-semibold tracking-[-0.03em]">Team</h1>

          <p className="mt-2 text-sm text-[#747980]">
            See who&apos;s working on what across your workspace.
          </p>
        </div>

        <button
          onClick={() => setShowInvite(true)}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#247c78] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1e6b67]"
        >
          <Plus size={17} />
          Invite member
        </button>
      </div>

      {/* Team stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat
          icon={<UserRound size={17} />}
          label="Team members"
          value={members.length}
        />

        <Stat
          icon={<BriefcaseBusiness size={17} />}
          label="Active projects"
          value={
            projects.filter((project) => project.status !== "Completed").length
          }
        />

        <Stat
          icon={<CheckCircle2 size={17} />}
          label="Tasks assigned"
          value={tasks.length}
        />
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 rounded-xl border border-[#e1e3e6] bg-white p-3 sm:flex-row">
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[#e1e3e6] px-3 py-2">
          <Search size={16} className="shrink-0 text-[#92969c]" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search team members..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#a1a5aa]"
          />
        </div>

        <select
          value={role}
          onChange={(event) => setRole(event.target.value)}
          className="rounded-lg border border-[#e1e3e6] bg-white px-3 py-2 text-xs font-medium text-[#555a60] outline-none"
        >
          {roles.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {/* Members */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredMembers.map((member) => {
          const assignedTasks = memberTasks(member.id);
          const memberProjectList = memberProjects(member.id);

          const completed = assignedTasks.filter(
            (task) => task.status === "Done",
          ).length;

          return (
            <article
              key={member.id}
              className="rounded-xl border border-[#e1e3e6] bg-white p-5 transition hover:border-[#cfd3d7] hover:shadow-[0_8px_30px_rgba(20,24,28,0.05)]"
            >
              {/* Member */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5f2f0] text-xs font-semibold text-[#247c78]">
                    {member.initials}
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold">{member.name}</h2>

                    <p className="mt-1 text-xs text-[#747980]">{member.role}</p>
                  </div>
                </div>

                <button
                  aria-label={`Email ${member.name}`}
                  className="rounded-lg p-2 text-[#92969c] hover:bg-[#f4f5f7] hover:text-[#247c78]"
                >
                  <Mail size={16} />
                </button>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 divide-x divide-[#e1e3e6] border-y border-[#e1e3e6] py-4">
                <div className="text-center">
                  <p className="text-lg font-semibold">
                    {assignedTasks.length}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-[#92969c]">
                    Tasks
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-lg font-semibold">{completed}</p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-[#92969c]">
                    Done
                  </p>
                </div>
              </div>

              {/* Projects */}
              <div className="mt-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#92969c]">
                  Projects
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {memberProjectList.map((project) => (
                    <span
                      key={project.id}
                      className="rounded-md bg-[#f4f5f7] px-2 py-1 text-[10px] text-[#555a60]"
                    >
                      {project.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Workload */}
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] text-[#92969c]">
                    Current workload
                  </span>

                  <span className="text-[10px] font-medium text-[#555a60]">
                    {assignedTasks.length} tasks
                  </span>
                </div>

                <div className="h-1.5 rounded-full bg-[#eceef0]">
                  <div
                    className="h-full rounded-full bg-[#247c78]"
                    style={{
                      width: `${Math.min(assignedTasks.length * 20, 100)}%`,
                    }}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {filteredMembers.length === 0 && (
        <div className="rounded-xl border border-dashed border-[#d5d8dc] bg-white px-6 py-16 text-center">
          <Search size={20} className="mx-auto text-[#92969c]" />

          <h2 className="mt-3 text-sm font-semibold">No team members found</h2>

          <p className="mt-1 text-xs text-[#747980]">
            Try another name or role.
          </p>
        </div>
      )}

      {/* Invite modal */}
      {showInvite && <InviteModal onClose={() => setShowInvite(false)} />}
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-[#e1e3e6] bg-white p-5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e5f2f0] text-[#247c78]">
        {icon}
      </div>

      <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{value}</p>

      <p className="mt-1 text-xs text-[#747980]">{label}</p>
    </div>
  );
}

function InviteModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-5">
      <div className="w-full max-w-md rounded-xl border border-[#e1e3e6] bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold">Invite a team member</h2>

            <p className="mt-1 text-xs text-[#747980]">
              Send an invitation to join your PULSE workspace.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-xs text-[#747980] hover:text-[#17191c]"
          >
            Close
          </button>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            onClose();
          }}
          className="mt-6 space-y-4"
        >
          <div>
            <label className="mb-1.5 block text-xs font-medium">Name</label>

            <input
              required
              placeholder="e.g. Taylor Smith"
              className="w-full rounded-lg border border-[#e1e3e6] px-3 py-2.5 text-sm outline-none focus:border-[#247c78]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium">Email</label>

            <input
              required
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-lg border border-[#e1e3e6] px-3 py-2.5 text-sm outline-none focus:border-[#247c78]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium">Role</label>

            <input
              required
              placeholder="e.g. Product Designer"
              className="w-full rounded-lg border border-[#e1e3e6] px-3 py-2.5 text-sm outline-none focus:border-[#247c78]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[#e1e3e6] px-4 py-2.5 text-xs font-medium text-[#555a60] hover:bg-[#f8f9fa]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-[#247c78] px-4 py-2.5 text-xs font-medium text-white hover:bg-[#1e6b67]"
            >
              Send invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
