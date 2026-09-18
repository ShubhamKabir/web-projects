"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FolderKanban,
} from "lucide-react";
import { projects, tasks } from "@/lib/data";

type CalendarItem = {
  id: string;
  title: string;
  date: number;
  type: "task" | "project";
  projectName: string;
  color: string;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CalendarPage() {
  const [month, setMonth] = useState(8);
  const [year, setYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState(18);

  const calendarItems = useMemo<CalendarItem[]>(() => {
    const items: CalendarItem[] = [];

    projects.forEach((project) => {
      const date = parseDate(project.dueDate);

      if (date && date.month === month && date.year === year) {
        items.push({
          id: `project-${project.id}`,
          title: project.name,
          date: date.day,
          type: "project",
          projectName: project.name,
          color: project.color,
        });
      }
    });

    tasks.forEach((task) => {
      const date = parseDate(task.dueDate);
      const project = projects.find((item) => item.id === task.projectId);

      if (date && date.month === month && date.year === year && project) {
        items.push({
          id: `task-${task.id}`,
          title: task.title,
          date: date.day,
          type: "task",
          projectName: project.name,
          color: project.color,
        });
      }
    });

    return items;
  }, [month, year]);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();
  const mondayOffset = firstDay === 0 ? 6 : firstDay - 1;

  const calendarDays = [
    ...Array(mondayOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  while (calendarDays.length % 7 !== 0) {
    calendarDays.push(null);
  }

  const selectedItems = calendarItems.filter(
    (item) => item.date === selectedDay,
  );

  const upcoming = [...calendarItems]
    .filter((item) => item.date >= selectedDay)
    .sort((a, b) => a.date - b.date)
    .slice(0, 5);

  function changeMonth(direction: number) {
    let nextMonth = month + direction;
    let nextYear = year;

    if (nextMonth > 11) {
      nextMonth = 0;
      nextYear++;
    }

    if (nextMonth < 0) {
      nextMonth = 11;
      nextYear--;
    }

    setMonth(nextMonth);
    setYear(nextYear);
    setSelectedDay(1);
  }

  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#747980]">
          Workspace
        </p>

        <h1 className="text-3xl font-semibold tracking-[-0.03em]">Calendar</h1>

        <p className="mt-2 text-sm text-[#747980]">
          Keep deadlines and project milestones in view.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.5fr_0.6fr]">
        {/* Calendar */}
        <section className="overflow-hidden rounded-xl border border-[#e1e3e6] bg-white">
          {/* Calendar header */}
          <div className="flex items-center justify-between border-b border-[#e1e3e6] px-5 py-4">
            <div>
              <h2 className="text-base font-semibold">
                {monthNames[month]} {year}
              </h2>

              <p className="mt-0.5 text-xs text-[#747980]">
                {calendarItems.length} scheduled items
              </p>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => changeMonth(-1)}
                className="rounded-lg p-2 text-[#747980] hover:bg-[#f4f5f7] hover:text-[#17191c]"
                aria-label="Previous month"
              >
                <ChevronLeft size={17} />
              </button>

              <button
                onClick={() => {
                  setMonth(8);
                  setYear(2026);
                  setSelectedDay(18);
                }}
                className="rounded-lg border border-[#e1e3e6] px-3 py-1.5 text-xs font-medium text-[#555a60] hover:bg-[#f8f9fa]"
              >
                Today
              </button>

              <button
                onClick={() => changeMonth(1)}
                className="rounded-lg p-2 text-[#747980] hover:bg-[#f4f5f7] hover:text-[#17191c]"
                aria-label="Next month"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 border-b border-[#e1e3e6] bg-[#f8f9fa]">
            {weekdays.map((day) => (
              <div
                key={day}
                className="px-2 py-3 text-center text-[10px] font-medium uppercase tracking-[0.1em] text-[#92969c]"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7">
            {calendarDays.map((day, index) => {
              const dayItems = day
                ? calendarItems.filter((item) => item.date === day)
                : [];

              const isSelected = day === selectedDay;
              const isToday = day === 18 && month === 8 && year === 2026;

              return (
                <button
                  key={`${year}-${month}-${index}`}
                  disabled={!day}
                  onClick={() => day && setSelectedDay(day)}
                  className={[
                    "relative min-h-[105px] border-b border-r border-[#e8eaec] p-2 text-left transition",
                    day ? "hover:bg-[#fafbfb]" : "cursor-default bg-[#fbfbfc]",
                    isSelected ? "bg-[#f0f7f6]" : "",
                  ].join(" ")}
                >
                  {day && (
                    <>
                      <span
                        className={[
                          "flex h-7 w-7 items-center justify-center rounded-full text-xs",
                          isToday
                            ? "bg-[#247c78] font-semibold text-white"
                            : isSelected
                              ? "font-semibold text-[#247c78]"
                              : "text-[#555a60]",
                        ].join(" ")}
                      >
                        {day}
                      </span>

                      <div className="mt-2 space-y-1">
                        {dayItems.slice(0, 2).map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-1.5 truncate rounded bg-[#f3f4f5] px-1.5 py-1 text-[9px] text-[#555a60]"
                          >
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{
                                backgroundColor: item.color,
                              }}
                            />

                            <span className="truncate">{item.title}</span>
                          </div>
                        ))}

                        {dayItems.length > 2 && (
                          <span className="block px-1.5 text-[9px] text-[#92969c]">
                            +{dayItems.length - 2} more
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-5">
          {/* Selected day */}
          <section className="rounded-xl border border-[#e1e3e6] bg-white">
            <div className="border-b border-[#e1e3e6] px-5 py-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#92969c]">
                Selected day
              </p>

              <h2 className="mt-1 text-lg font-semibold">
                {monthNames[month]} {selectedDay}
              </h2>
            </div>

            <div className="divide-y divide-[#e1e3e6]">
              {selectedItems.length > 0 ? (
                selectedItems.map((item) => (
                  <div key={item.id} className="px-5 py-4">
                    <div className="flex gap-3">
                      <div
                        className="mt-1 h-2 w-2 shrink-0 rounded-full"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />

                      <div className="min-w-0">
                        <p className="text-xs font-semibold">{item.title}</p>

                        <p className="mt-1 text-[10px] text-[#747980]">
                          {item.type === "project"
                            ? "Project deadline"
                            : item.projectName}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-5 py-10 text-center">
                  <CalendarDays size={22} className="mx-auto text-[#b0b3b7]" />

                  <p className="mt-3 text-xs font-medium">Nothing scheduled</p>

                  <p className="mt-1 text-[10px] text-[#92969c]">
                    This day is currently clear.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Upcoming */}
          <section className="rounded-xl border border-[#e1e3e6] bg-white">
            <div className="border-b border-[#e1e3e6] px-5 py-4">
              <h2 className="text-sm font-semibold">Upcoming</h2>

              <p className="mt-0.5 text-xs text-[#747980]">Next deadlines</p>
            </div>

            <div className="divide-y divide-[#e1e3e6]">
              {upcoming.length > 0 ? (
                upcoming.map((item) => (
                  <div key={item.id} className="flex gap-3 px-5 py-4">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: `${item.color}18`,
                        color: item.color,
                      }}
                    >
                      {item.type === "project" ? (
                        <FolderKanban size={15} />
                      ) : (
                        <Clock3 size={15} />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[10px] text-[#747980]">
                        Sep {item.date} · {item.projectName}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="px-5 py-8 text-center text-xs text-[#747980]">
                  No upcoming items.
                </p>
              )}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

function parseDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
}
