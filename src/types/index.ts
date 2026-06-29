import type { ElementType } from 'react';

export interface PerkCardData {
  id: string;
  title: string;
  bulletPoints: string[];
  icon: ElementType;
  variant?: 'orange' | 'blue';
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
  // used for cohort tab filtering
  year: string;
  imageUrl?: string;
  linkedin?: string;
}