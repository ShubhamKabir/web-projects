"use client";

import { useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3, Users } from "lucide-react";

const times = [
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
];

export default function Reservations() {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("7:30 PM");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="reservations"
      className="bg-[#171513] px-6 py-28 text-[#f2ede4] md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                Reservations
              </p>

              <h2 className="serif-display mt-5 max-w-xl text-5xl leading-[0.92] tracking-[-0.045em] md:text-7xl">
                Save a seat
                <br />
                at the table.
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/45 md:text-base">
                Join us for an evening shaped by the season, the fire, and
                whatever the kitchen is excited about that night.
              </p>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6 lg:mt-20">
              <div className="flex items-center justify-between">
                <span className="mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                  Dinner service
                </span>

                <span className="mono text-[9px] text-white/45">Tue — Sat</span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                  Hours
                </span>

                <span className="mono text-[9px] text-white/45">
                  6:00 — 11:00 PM
                </span>
              </div>
            </div>
          </div>

          <div className="border border-white/10 bg-[#1d1b19] p-6 md:p-8 lg:p-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Find a table
                </p>

                <h3 className="serif-display mt-2 text-3xl tracking-[-0.03em]">
                  Your evening
                </h3>
              </div>

              <span className="mono text-[9px] text-white/25">EMBER / 01</span>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mono flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-white/35">
                    <CalendarDays size={13} strokeWidth={1.4} />
                    Date
                  </span>

                  <input
                    type="date"
                    value={date}
                    onChange={(event) => {
                      setDate(event.target.value);
                      setSubmitted(false);
                    }}
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors focus:border-white/60"
                    required
                  />
                </label>

                <div>
                  <span className="mono flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-white/35">
                    <Clock3 size={13} strokeWidth={1.4} />
                    Time
                  </span>

                  <select
                    value={time}
                    onChange={(event) => {
                      setTime(event.target.value);
                      setSubmitted(false);
                    }}
                    className="mt-3 w-full appearance-none border-b border-white/15 bg-[#1d1b19] pb-3 text-sm text-white outline-none transition-colors focus:border-white/60"
                  >
                    {times.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <span className="mono flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-white/35">
                  <Users size={13} strokeWidth={1.4} />
                  Guests
                </span>

                <div className="mt-4 flex items-center justify-between border-b border-white/15 pb-3">
                  <button
                    type="button"
                    onClick={() => {
                      setGuests((value) => Math.max(1, value - 1));
                      setSubmitted(false);
                    }}
                    className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
                    aria-label="Decrease guests"
                  >
                    −
                  </button>

                  <span className="text-sm">
                    {guests} {guests === 1 ? "guest" : "guests"}
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      setGuests((value) => Math.min(10, value + 1));
                      setSubmitted(false);
                    }}
                    className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
                    aria-label="Increase guests"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="group mt-10 flex w-full items-center justify-center gap-2 bg-[#f2ede4] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#171513] transition-colors hover:bg-white"
              >
                {submitted ? "Request received" : "Request a table"}

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <p className="mt-4 text-center text-[10px] leading-5 text-white/25">
                This reservation interface is a portfolio concept and does not
                process real bookings.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
