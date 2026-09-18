"use client";

import { useState } from "react";
import {
  Bell,
  Check,
  ChevronRight,
  Globe2,
  Lock,
  Palette,
  Save,
  UserRound,
} from "lucide-react";

const sections = [
  {
    id: "profile",
    label: "Profile",
    icon: UserRound,
  },
  {
    id: "workspace",
    label: "Workspace",
    icon: Globe2,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Palette,
  },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");

  const [saved, setSaved] = useState(false);

  const [notifications, setNotifications] = useState({
    taskAssignments: true,
    taskUpdates: true,
    projectUpdates: true,
    weeklySummary: false,
  });

  function saveSettings() {
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2000);
  }

  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#747980]">
          Manage
        </p>

        <h1 className="text-3xl font-semibold tracking-[-0.03em]">Settings</h1>

        <p className="mt-2 text-sm text-[#747980]">
          Manage your profile and workspace preferences.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
        {/* Navigation */}
        <aside className="h-fit rounded-xl border border-[#e1e3e6] bg-white p-2">
          {sections.map((section) => {
            const Icon = section.icon;
            const active = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={[
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs font-medium transition",
                  active
                    ? "bg-[#e5f2f0] text-[#247c78]"
                    : "text-[#747980] hover:bg-[#f4f5f7] hover:text-[#17191c]",
                ].join(" ")}
              >
                <Icon size={16} strokeWidth={1.8} />

                <span>{section.label}</span>

                {active && <ChevronRight size={14} className="ml-auto" />}
              </button>
            );
          })}
        </aside>

        {/* Content */}
        <div className="min-w-0">
          {activeSection === "profile" && <ProfileSettings />}

          {activeSection === "workspace" && <WorkspaceSettings />}

          {activeSection === "notifications" && (
            <NotificationSettings
              settings={notifications}
              setSettings={setNotifications}
            />
          )}

          {activeSection === "appearance" && <AppearanceSettings />}

          <div className="mt-5 flex items-center justify-end gap-3">
            {saved && (
              <span className="flex items-center gap-1.5 text-xs text-[#287b67]">
                <Check size={14} />
                Changes saved
              </span>
            )}

            <button
              onClick={saveSettings}
              className="inline-flex items-center gap-2 rounded-lg bg-[#247c78] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#1e6b67]"
            >
              <Save size={14} />
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileSettings() {
  return (
    <SettingsCard
      title="Profile"
      description="Your personal information and account details."
    >
      <div className="flex items-center gap-4 border-b border-[#e1e3e6] pb-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e5f2f0] text-sm font-semibold text-[#247c78]">
          SK
        </div>

        <div>
          <p className="text-sm font-semibold">Shubham</p>

          <p className="mt-1 text-xs text-[#747980]">Workspace administrator</p>
        </div>

        <button className="ml-auto rounded-lg border border-[#e1e3e6] px-3 py-2 text-xs font-medium text-[#555a60] hover:bg-[#f8f9fa]">
          Change photo
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="First name" value="Shubham" />

        <Field label="Last name" value="K" />

        <Field label="Email" value="shubham@example.com" type="email" />

        <Field label="Role" value="Administrator" />
      </div>
    </SettingsCard>
  );
}

function WorkspaceSettings() {
  return (
    <SettingsCard
      title="Workspace"
      description="Configure the workspace shared by your team."
    >
      <div className="space-y-5">
        <Field label="Workspace name" value="PULSE Workspace" />

        <Field
          label="Workspace URL"
          value="pulse-workspace"
          prefix="pulse.app/"
        />

        <div>
          <label className="mb-1.5 block text-xs font-medium">Time zone</label>

          <select className="w-full rounded-lg border border-[#e1e3e6] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#247c78]">
            <option>India Standard Time (UTC+5:30)</option>
            <option>Eastern Time (UTC-5:00)</option>
            <option>Pacific Time (UTC-8:00)</option>
            <option>Central European Time (UTC+1:00)</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium">
            Default project view
          </label>

          <select className="w-full rounded-lg border border-[#e1e3e6] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#247c78]">
            <option>Grid</option>
            <option>List</option>
          </select>
        </div>
      </div>
    </SettingsCard>
  );
}

function NotificationSettings({
  settings,
  setSettings,
}: {
  settings: {
    taskAssignments: boolean;
    taskUpdates: boolean;
    projectUpdates: boolean;
    weeklySummary: boolean;
  };
  setSettings: React.Dispatch<React.SetStateAction<typeof settings>>;
}) {
  const items = [
    {
      key: "taskAssignments" as const,
      title: "Task assignments",
      description: "Get notified when someone assigns a task to you.",
    },
    {
      key: "taskUpdates" as const,
      title: "Task updates",
      description: "Get notified when tasks you're following change.",
    },
    {
      key: "projectUpdates" as const,
      title: "Project updates",
      description: "Receive important updates from your projects.",
    },
    {
      key: "weeklySummary" as const,
      title: "Weekly summary",
      description: "Receive a weekly overview of workspace activity.",
    },
  ];

  return (
    <SettingsCard
      title="Notifications"
      description="Choose which updates you want to receive."
    >
      <div className="divide-y divide-[#e1e3e6]">
        {items.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between gap-5 py-4 first:pt-0 last:pb-0"
          >
            <div>
              <p className="text-sm font-medium">{item.title}</p>

              <p className="mt-1 text-xs leading-5 text-[#747980]">
                {item.description}
              </p>
            </div>

            <button
              onClick={() =>
                setSettings((current) => ({
                  ...current,
                  [item.key]: !current[item.key],
                }))
              }
              className={[
                "relative h-6 w-11 shrink-0 rounded-full transition",
                settings[item.key] ? "bg-[#247c78]" : "bg-[#d7dade]",
              ].join(" ")}
              aria-label={`Toggle ${item.title}`}
            >
              <span
                className={[
                  "absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition",
                  settings[item.key] ? "left-6" : "left-1",
                ].join(" ")}
              />
            </button>
          </div>
        ))}
      </div>
    </SettingsCard>
  );
}

function AppearanceSettings() {
  return (
    <SettingsCard
      title="Appearance"
      description="Customize how PULSE looks on your device."
    >
      <div>
        <p className="mb-3 text-xs font-medium">Theme</p>

        <div className="grid gap-3 sm:grid-cols-3">
          <ThemeOption title="Light" active preview="light" />

          <ThemeOption title="Dark" preview="dark" />

          <ThemeOption title="System" preview="system" />
        </div>
      </div>

      <div className="mt-7 border-t border-[#e1e3e6] pt-6">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f4f5f7] text-[#747980]">
            <Lock size={15} />
          </div>

          <div>
            <p className="text-sm font-medium">Interface preferences</p>

            <p className="mt-1 text-xs leading-5 text-[#747980]">
              Your appearance preferences are stored locally in this portfolio
              demonstration.
            </p>
          </div>
        </div>
      </div>
    </SettingsCard>
  );
}

function SettingsCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-[#e1e3e6] bg-white p-5 md:p-6">
      <div className="border-b border-[#e1e3e6] pb-5">
        <h2 className="text-base font-semibold">{title}</h2>

        <p className="mt-1 text-xs text-[#747980]">{description}</p>
      </div>

      <div className="pt-6">{children}</div>
    </section>
  );
}

function Field({
  label,
  value,
  type = "text",
  prefix,
}: {
  label: string;
  value: string;
  type?: string;
  prefix?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium">{label}</label>

      <div className="flex overflow-hidden rounded-lg border border-[#e1e3e6] focus-within:border-[#247c78]">
        {prefix && (
          <span className="border-r border-[#e1e3e6] bg-[#f8f9fa] px-3 py-2.5 text-xs text-[#92969c]">
            {prefix}
          </span>
        )}

        <input
          type={type}
          defaultValue={value}
          className="min-w-0 flex-1 bg-white px-3 py-2.5 text-sm outline-none"
        />
      </div>
    </div>
  );
}

function ThemeOption({
  title,
  active = false,
  preview,
}: {
  title: string;
  active?: boolean;
  preview: "light" | "dark" | "system";
}) {
  return (
    <button
      className={[
        "rounded-lg border p-2 text-left transition",
        active
          ? "border-[#247c78] ring-1 ring-[#247c78]"
          : "border-[#e1e3e6] hover:border-[#c7cacf]",
      ].join(" ")}
    >
      <div
        className={[
          "h-20 rounded-md border",
          preview === "dark"
            ? "border-[#30343a] bg-[#17191c]"
            : "border-[#e1e3e6] bg-[#f4f5f7]",
        ].join(" ")}
      >
        <div className="m-2 flex gap-1.5">
          <span
            className={[
              "h-2 w-8 rounded",
              preview === "dark" ? "bg-white/20" : "bg-[#d7dade]",
            ].join(" ")}
          />

          <span
            className={[
              "h-2 w-4 rounded",
              preview === "dark" ? "bg-white/10" : "bg-[#e4e6e8]",
            ].join(" ")}
          />
        </div>

        <div className="mx-2 mt-3 grid grid-cols-3 gap-1">
          <span
            className={[
              "h-7 rounded",
              preview === "dark" ? "bg-white/10" : "bg-white",
            ].join(" ")}
          />
          <span
            className={[
              "h-7 rounded",
              preview === "dark" ? "bg-white/10" : "bg-white",
            ].join(" ")}
          />
          <span
            className={[
              "h-7 rounded",
              preview === "dark" ? "bg-white/10" : "bg-white",
            ].join(" ")}
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-1 pt-2">
        <span className="text-xs font-medium">{title}</span>

        {active && <Check size={14} className="text-[#247c78]" />}
      </div>
    </button>
  );
}
