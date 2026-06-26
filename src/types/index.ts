export interface PerkCardData {
  id: string;
  title: string;
  bulletPoints: string[];
  iconSymbol: string;
  variant?: 'orange' | 'blue'; // 👈 Add this optional prop line
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface PartnerProfile {
  id: string;
  name: string;
  college: string;
  year: string; // 👈 To filter between 2022 - 2026 cohorts
  imageUrl?: string; // 👈 For the profile photos
}