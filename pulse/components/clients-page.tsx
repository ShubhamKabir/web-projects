"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, UserPlus } from "lucide-react";

const services = [
  "Website Design",
  "Web Development",
  "Branding",
  "UI/UX Design",
  "Video Editing",
  "Social Media Management",
  "Content Creation",
  "Automation",
  "Other",
];

const emptyForm = {
  clientName: "",
  email: "",
  company: "",
  service: "Website Design",
  projectStartDate: "",
  projectDeadline: "",
  notes: "",
};

export default function ClientsPage() {
  const [form, setForm] = useState(emptyForm);
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = (key: keyof typeof emptyForm, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Submission failed.");

      setForm(emptyForm);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setBusy(false);
    }
  }

  const input =
    "w-full rounded-lg border border-[#dfe2e5] bg-white px-3.5 py-2.5 text-sm outline-none placeholder:text-[#a1a5aa] focus:border-[#247c78] focus:ring-2 focus:ring-[#247c78]/10";

  return (
    <div className="mx-auto max-w-[920px] space-y-7">
      <div>
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e5f2f0] text-[#247c78]">
            <UserPlus size={20} />
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-[#747980]">
              Client management
            </p>
            <h1 className="text-3xl font-semibold tracking-[-0.03em]">New client</h1>
            <p className="mt-2 text-sm text-[#747980]">
              Add a client and start the onboarding workflow automatically.
            </p>
          </div>
        </div>
      </div>

      {success ? (
        <div className="rounded-xl border border-[#cfe5df] bg-white p-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f3ef] text-[#287b67]">
            <CheckCircle2 size={24} />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Onboarding started</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#747980]">
            The client was sent to the onboarding automation.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-6 rounded-lg bg-[#247c78] px-4 py-2.5 text-sm font-medium text-white"
          >
            Add another client
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="rounded-xl border border-[#e1e3e6] bg-white p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-xs font-medium text-[#555a60]">
              Client name *
              <input required value={form.clientName} onChange={(e) => update("clientName", e.target.value)} placeholder="Client name" className={input + " mt-2"} />
            </label>

            <label className="text-xs font-medium text-[#555a60]">
              Email *
              <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="client@example.com" className={input + " mt-2"} />
            </label>

            <label className="text-xs font-medium text-[#555a60]">
              Company *
              <input required value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company name" className={input + " mt-2"} />
            </label>

            <label className="text-xs font-medium text-[#555a60]">
              Service *
              <select value={form.service} onChange={(e) => update("service", e.target.value)} className={input + " mt-2"}>
                {services.map((service) => <option key={service}>{service}</option>)}
              </select>
            </label>

            <label className="text-xs font-medium text-[#555a60]">
              Project start date *
              <input required type="date" value={form.projectStartDate} onChange={(e) => update("projectStartDate", e.target.value)} className={input + " mt-2"} />
            </label>

            <label className="text-xs font-medium text-[#555a60]">
              Project deadline *
              <input required type="date" value={form.projectDeadline} onChange={(e) => update("projectDeadline", e.target.value)} className={input + " mt-2"} />
            </label>

            <label className="text-xs font-medium text-[#555a60] md:col-span-2">
              Notes
              <textarea rows={5} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Requirements, references, assets, special instructions..." className={input + " mt-2 resize-y"} />
            </label>
          </div>

          {error && (
            <div className="mt-5 rounded-lg border border-[#f0d4d4] bg-[#fff7f7] px-4 py-3 text-sm text-[#a94d4d]">
              {error}
            </div>
          )}

          <div className="mt-7 flex items-center justify-end border-t border-[#e8eaec] pt-6">
            <button disabled={busy} type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#247c78] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60">
              {busy && <Loader2 size={16} className="animate-spin" />}
              {busy ? "Starting..." : "Start onboarding"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
