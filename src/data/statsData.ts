export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  iconName: string;
  subText?: string;
  badge?: string;
  goal?: number;
}

export const statsData: StatItem[] = [
  {
    id: "stat-1",
    value: 95,
    label: "Student partners enrolled",
    iconName: "Users",
    subText: "across all cohorts"
  },
  {
    id: "stat-2",
    value: 80,
    suffix: "+",
    label: "Knowledge sharing sessions",
    iconName: "Dumbbell",
    subText: "That's 1,000+ hrs of peer learning"
  },
  {
    id: "stat-3",
    value: 5,
    label: "Student partners hired",
    iconName: "Briefcase",
    badge: "live",
    subText: "Last hired: 3 weeks ago"
  },
  {
    id: "stat-4",
    value: 2100,
    suffix: "+",
    label: "Students impacted by LSPs",
    iconName: "BookOpen",
    goal: 5000
  }
];