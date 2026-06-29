import { Star, Rocket, TrendingUp, Handshake } from 'lucide-react';
import type { PerkCardData } from '../types';

export const perksData: PerkCardData[] = [
  {
    id: "perk-1",
    title: "Become a leader",
    bulletPoints: [
      "Lead the student community in your college.",
      "Organize events, workshops, and meetups.",
      "Be the face of Leapfrog in your college."
    ],
    iconSymbol: <Star size={24} strokeWidth={2} />
  },
  {
    id: "perk-2",
    title: "Take a step closer to Leapfrog",
    bulletPoints: [
      "Get a chance to work closely with Leapfroggers.",
      "Direct referral for internship/fellowship opportunities.",
      "Get a sneak peek into the Leapfrog culture."
    ],
    iconSymbol: <Rocket size={24} strokeWidth={2} />
  },
  {
    id: "perk-3",
    title: "Learn & Grow",
    bulletPoints: [
      "Access to exclusive workshops and training.",
      "Mentorship from industry experts.",
      "Get hands-on experience in community building."
    ],
    iconSymbol: <TrendingUp size={24} strokeWidth={2} />
  },
  {
    id: "perk-4",
    title: "Network & Connect",
    bulletPoints: [
      "Connect with like-minded students from other colleges.",
      "Expand your professional network.",
      "Exclusive access to Leapfrog events."
    ],
    iconSymbol: <Handshake size={24} strokeWidth={2} />
  }
];