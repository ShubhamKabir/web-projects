import AppShell from "@/components/app-shell";
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  Users,
} from "lucide-react";

const metrics = [
  { label: "Active Clients", value: "4", detail: "Current client records", icon: Users },
  { label: "New Clients", value: "1", detail: "This reporting period", icon: Users },
  { label: "Tasks Created", value: "6", detail: "From onboarding workflows", icon: FileText },
  { label: "Tasks Completed", value: "1", detail: "Across tracked onboarding", icon: CheckCircle2 },
];

const taskBreakdown = [
  { label: "Completed", value: 1, className: "bg-[#4d9b82]" },
  { label: "In Progress", value: 0, className: "bg-[#5b7cfa]" },
  { label: "Not Started", value: 5, className: "bg-[#d8dde3]" },
];

export default function AnalyticsPage() {
  return (
    <AppShell>
      <main className="min-h-full bg-[#f6f7f8] px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#247c78]">
                Operations
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#17191c]">
                Analytics & Reports
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-[#68717b]">
                Automated weekly reporting for clients, onboarding activity, and
                operational workload.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-[#e2e6e9] bg-white px-3 py-2 text-xs text-[#68717b]">
              <Clock3 size={15} />
              <span>Weekly report · Monday</span>
            </div>
          </div>

          <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map(({ label, value, detail, icon: Icon }) => (
              <div
                key={label}
                className="rounded-xl border border-[#e2e6e9] bg-white p-5"
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm font-medium text-[#68717b]">{label}</p>
                  <Icon size={18} className="text-[#247c78]" strokeWidth={1.8} />
                </div>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-[#17191c]">
                  {value}
                </p>
                <p className="mt-1 text-xs text-[#8a929b]">{detail}</p>
              </div>
            ))}
          </section>

          <section className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-xl border border-[#e2e6e9] bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-[#17191c]">
                    Onboarding task health
                  </h2>
                  <p className="mt-1 text-sm text-[#68717b]">
                    Current workload across automated client onboarding.
                  </p>
                </div>
                <Activity size={19} className="text-[#247c78]" />
              </div>

              <div className="mt-7 space-y-5">
                {taskBreakdown.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-[#4f5862]">{item.label}</span>
                      <span className="font-medium text-[#17191c]">{item.value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#eef0f2]">
                      <div
                        className={`h-full rounded-full ${item.className}`}
                        style={{ width: `${Math.max(item.value * 16.67, item.value ? 8 : 0)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#e2e6e9] bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-semibold text-[#17191c]">Report delivery</h2>
                  <p className="mt-1 text-sm text-[#68717b]">
                    Automated destinations
                  </p>
                </div>
                <Mail size={19} className="text-[#247c78]" />
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-lg border border-[#e7eaed] px-4 py-3">
                  <p className="text-sm font-medium text-[#17191c]">Gmail</p>
                  <p className="mt-1 text-xs text-[#7a838d]">
                    Weekly operations summary
                  </p>
                </div>
                <div className="rounded-lg border border-[#e7eaed] px-4 py-3">
                  <p className="text-sm font-medium text-[#17191c]">Notion</p>
                  <p className="mt-1 text-xs text-[#7a838d]">
                    Archived weekly report
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 rounded-xl border border-[#e2e6e9] bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-[#fff6e8] p-2 text-[#b47720]">
                <AlertCircle size={18} />
              </div>
              <div>
                <h2 className="font-semibold text-[#17191c]">
                  Automated reporting workflow
                </h2>
                <p className="mt-1 max-w-3xl text-sm leading-6 text-[#68717b]">
                  Make collects operational data on a schedule, calculates the
                  reporting metrics, and delivers the finished weekly report to
                  Gmail and Notion. This page provides the PULSE reporting
                  dashboard for the same workflow.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}
