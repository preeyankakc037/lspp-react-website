export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export const statsData: StatItem[] = [
  {
    id: "stat-1",
    value: "95",
    label: "Student Partners enrolled",
    icon: "🧑‍🤝‍🧑" // Represents the community spheres
  },
  {
    id: "stat-2",
    value: "80+",
    label: "Knowledge sharing sessions delivered",
    icon: "🏋️" // Represents the red dumbbell
  },
  {
    id: "stat-3",
    value: "5",
    label: "Student Partners hired",
    icon: "🔖" // Represents the purple ribbon bookmark
  },
  {
    id: "stat-4",
    value: "2100+",
    label: "Students impacted by LSPs",
    icon: "📘" // Represents the blue notebook
  }
];