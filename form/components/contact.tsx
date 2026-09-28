"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      projectDetails: formData.get("projectDetails"),
      budget: formData.get("budget"),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-[#11110f] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div>
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              07 / Start a project
            </p>

            <h2 className="max-w-4xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              Have an
              <br />
              idea?
              <br />
              <span className="text-[#ff4d24]">Let's make it.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-lg text-xl leading-7 text-white/65 md:text-2xl md:leading-8">
              Tell us what you're building, where you're going, and what needs
              to change. We'll figure out the rest together.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#ff4d24]"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#ff4d24]"
                />
              </div>

              <input
                name="company"
                type="text"
                placeholder="Company"
                required
                className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#ff4d24]"
              />

              <select
                name="service"
                required
                defaultValue=""
                className="w-full border-b border-white/20 bg-[#11110f] px-0 py-4 text-sm text-white/65 outline-none focus:border-[#ff4d24]"
              >
                <option value="" disabled>
                  Service needed
                </option>
                <option value="Branding">Branding</option>
                <option value="Web Design">Web Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                name="projectDetails"
                placeholder="Tell us about your project"
                required
                rows={4}
                className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#ff4d24]"
              />

              <select
                name="budget"
                defaultValue=""
                className="w-full border-b border-white/20 bg-[#11110f] px-0 py-4 text-sm text-white/65 outline-none focus:border-[#ff4d24]"
              >
                <option value="" disabled>
                  Budget range
                </option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000–$3,000">$1,000–$3,000</option>
                <option value="$3,000–$5,000">$3,000–$5,000</option>
                <option value="$5,000+">$5,000+</option>
                <option value="Not sure">Not sure</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center gap-4 border-b border-[#ff4d24] pb-3 text-sm font-bold uppercase tracking-[0.1em] transition-colors hover:text-[#ff4d24] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Start the conversation"}
                <span className="text-[#ff4d24] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </button>

              {submitted && (
                <p className="text-sm text-[#ff4d24]">
                  Thanks — we'll be in touch soon.
                </p>
              )}
            </form>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Projects
                </p>
                <p className="mt-2 text-sm text-white/65">
                  Brand / Digital / Creative
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Availability
                </p>
                <p className="mt-2 text-sm text-white/65">Selected projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <p className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              Good work starts with
              <br />
              <span className="text-[#ff4d24]">a good question.</span>
            </p>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
              FORM / 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
