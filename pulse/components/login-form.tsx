"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Portfolio demonstration only.
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#17191c]">
      <div className="grid min-h-screen lg:grid-cols-[1fr_0.9fr]">
        {/* Brand side */}
        <section className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between bg-[#111316] p-10 xl:p-14">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 text-white"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#247c78] text-sm font-bold">
              P
            </div>

            <span className="text-lg font-semibold tracking-tight">PULSE</span>
          </Link>

          <div className="relative z-10 max-w-lg">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#247c78]">
              Team workspace
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white xl:text-6xl">
              Work clearly.
              <br />
              Move together.
            </h1>

            <p className="mt-6 max-w-md text-sm leading-6 text-white/45">
              Projects, tasks, people and progress — brought together in one
              focused workspace.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-5 text-[10px] text-white/30">
            <span>PULSE Workspace</span>
            <span>Portfolio concept</span>
          </div>

          {/* Decorative composition */}
          <div className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#247c78]/15" />

          <div className="pointer-events-none absolute -right-12 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-white/5" />

          <div className="pointer-events-none absolute right-24 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#247c78]" />
        </section>

        {/* Form side */}
        <section className="flex min-h-screen items-center justify-center bg-[#f4f5f7] px-5 py-10 sm:px-8">
          <div className="w-full max-w-[420px]">
            {/* Mobile logo */}
            <Link
              href="/dashboard"
              className="mb-12 flex items-center gap-3 lg:hidden"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#247c78] text-sm font-bold text-white">
                P
              </div>

              <span className="text-lg font-semibold tracking-tight">
                PULSE
              </span>
            </Link>

            <div>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5f2f0] text-[#247c78]">
                <LockKeyhole size={19} />
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#17191c]">
                Welcome back.
              </h2>

              <p className="mt-2 text-sm text-[#747980]">
                Sign in to continue to your workspace.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium text-[#555a60]"
                >
                  Email address
                </label>

                <div className="flex items-center gap-2 rounded-lg border border-[#dfe1e4] bg-white px-3 transition focus-within:border-[#247c78] focus-within:ring-2 focus-within:ring-[#247c78]/10">
                  <Mail size={16} className="shrink-0 text-[#92969c]" />

                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-[#b0b3b7]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-xs font-medium text-[#555a60]"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-[11px] font-medium text-[#247c78] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-[#dfe1e4] bg-white px-3 transition focus-within:border-[#247c78] focus-within:ring-2 focus-within:ring-[#247c78]/10">
                  <LockKeyhole size={16} className="shrink-0 text-[#92969c]" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-[#b0b3b7]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="shrink-0 text-[#92969c] hover:text-[#555a60]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <label className="flex items-center gap-2 text-xs text-[#747980]">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-3.5 w-3.5 accent-[#247c78]"
                />
                Keep me signed in
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#247c78] py-3 text-sm font-medium text-white transition hover:bg-[#1e6b67]"
              >
                Sign in
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#e1e3e6]" />
              <span className="text-[10px] uppercase tracking-[0.12em] text-[#a1a5aa]">
                Demo
              </span>
              <div className="h-px flex-1 bg-[#e1e3e6]" />
            </div>

            <div className="rounded-lg border border-[#e1e3e6] bg-white px-4 py-3">
              <p className="text-[10px] leading-4 text-[#92969c]">
                This is a portfolio application. Any email and password will
                continue to the demonstration dashboard. No real authentication
                is performed.
              </p>
            </div>

            <p className="mt-8 text-center text-[10px] text-[#a1a5aa]">
              © 2026 PULSE · Portfolio concept
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
