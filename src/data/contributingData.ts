import { Megaphone, Lightbulb } from 'lucide-react';
import type { PerkCardData } from '../types';

export const contributingData: PerkCardData[] = [
  {
    id: "contrib-1",
    title: "Learn, lead, grow with us",
    bulletPoints: [
      "Build tech communities by bringing your peers together",
      "Host regular workshops and events focused on accelerating skill building",
      "Learn and develop design, technology, and business skills from industry professionals"
    ],
    icon: Megaphone
  },
  {
    id: "contrib-2",
    title: "Make a difference",
    bulletPoints: [
      "Close the gap between industry and academia by taking charge of your learning",
      "Take new learnings to build solutions for real life problems",
      "Strengthen your own skill set while building future leaders"
    ],
    icon: Lightbulb
  },
];