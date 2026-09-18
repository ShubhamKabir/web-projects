export type TaskStatus = "Todo" | "In Progress" | "Review" | "Done";
export type TaskPriority = "Low" | "Medium" | "High";

export type Member = {
  id: number;
  name: string;
  initials: string;
  role: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  status: "On Track" | "At Risk" | "Completed";
  progress: number;
  dueDate: string;
  color: string;
  members: number[];
};

export type Task = {
  id: number;
  title: string;
  projectId: number;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId: number;
  dueDate: string;
};

export const members: Member[] = [
  {
    id: 1,
    name: "Alex Morgan",
    initials: "AM",
    role: "Product Designer",
  },
  {
    id: 2,
    name: "Jordan Lee",
    initials: "JL",
    role: "Frontend Developer",
  },
  {
    id: 3,
    name: "Maya Patel",
    initials: "MP",
    role: "Product Manager",
  },
  {
    id: 4,
    name: "Daniel Kim",
    initials: "DK",
    role: "Backend Developer",
  },
  {
    id: 5,
    name: "Sofia Chen",
    initials: "SC",
    role: "UX Researcher",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Website Redesign",
    description:
      "Rework the marketing site and improve the conversion journey.",
    status: "On Track",
    progress: 78,
    dueDate: "Sep 24, 2026",
    color: "#5b7cfa",
    members: [1, 2, 3],
  },
  {
    id: 2,
    name: "Mobile App",
    description: "Build the next version of the mobile product experience.",
    status: "On Track",
    progress: 54,
    dueDate: "Oct 08, 2026",
    color: "#8b6dd8",
    members: [2, 4, 5],
  },
  {
    id: 3,
    name: "Brand System",
    description:
      "Create a unified visual language across all product surfaces.",
    status: "At Risk",
    progress: 32,
    dueDate: "Sep 29, 2026",
    color: "#d58b52",
    members: [1, 3, 5],
  },
  {
    id: 4,
    name: "Analytics",
    description: "Introduce product analytics and reporting workflows.",
    status: "Completed",
    progress: 100,
    dueDate: "Sep 12, 2026",
    color: "#4d9b82",
    members: [2, 3, 4],
  },
];

export const tasks: Task[] = [
  {
    id: 1,
    title: "Finalize homepage layout",
    projectId: 1,
    status: "Done",
    priority: "High",
    assigneeId: 1,
    dueDate: "Sep 18, 2026",
  },
  {
    id: 2,
    title: "Build responsive navigation",
    projectId: 1,
    status: "In Progress",
    priority: "High",
    assigneeId: 2,
    dueDate: "Sep 19, 2026",
  },
  {
    id: 3,
    title: "Review pricing section",
    projectId: 1,
    status: "Review",
    priority: "Medium",
    assigneeId: 3,
    dueDate: "Sep 20, 2026",
  },
  {
    id: 4,
    title: "Create onboarding flow",
    projectId: 2,
    status: "In Progress",
    priority: "High",
    assigneeId: 5,
    dueDate: "Sep 22, 2026",
  },
  {
    id: 5,
    title: "Connect authentication screens",
    projectId: 2,
    status: "Todo",
    priority: "Medium",
    assigneeId: 4,
    dueDate: "Sep 25, 2026",
  },
  {
    id: 6,
    title: "Audit typography system",
    projectId: 3,
    status: "Todo",
    priority: "Low",
    assigneeId: 1,
    dueDate: "Sep 26, 2026",
  },
  {
    id: 7,
    title: "Prepare component inventory",
    projectId: 3,
    status: "In Progress",
    priority: "Medium",
    assigneeId: 3,
    dueDate: "Sep 21, 2026",
  },
  {
    id: 8,
    title: "Export analytics report",
    projectId: 4,
    status: "Done",
    priority: "Low",
    assigneeId: 4,
    dueDate: "Sep 12, 2026",
  },
];

export const activities = [
  {
    id: 1,
    memberId: 1,
    action: "completed",
    target: "Finalize homepage layout",
    time: "12 minutes ago",
  },
  {
    id: 2,
    memberId: 2,
    action: "moved",
    target: "Build responsive navigation to In Progress",
    time: "34 minutes ago",
  },
  {
    id: 3,
    memberId: 3,
    action: "commented on",
    target: "Review pricing section",
    time: "1 hour ago",
  },
  {
    id: 4,
    memberId: 5,
    action: "started",
    target: "Create onboarding flow",
    time: "2 hours ago",
  },
];
