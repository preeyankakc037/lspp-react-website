import type { PartnerProfile } from '../types';

// Real students known for 2026 batch
const real2026Students = [
  { name: "Aakriti Pandey", college: "Kathmandu University" },
  { name: "Arekh Shrestha", college: "Kathmandu University School of Engineering" },
  { name: "Nirika Lamichhane", college: "IOE, Thapathali Campus" },
  { name: "Sworna Dhan Tuladhar", college: "Islington College" },
  { name: "Ayam Kattel", college: "Pulchowk Campus" },
  { name: "Nozomi Giri", college: "Kathmandu Engineering College" },
  { name: "Priyanka Khatri", college: "Sunway College", imageUrl: "/priyanka.jpeg" } // 🎯 Bound perfectly
];

const years = ['2022', '2023', '2024', '2025', '2026'];
const generatedPartners: PartnerProfile[] = [];

years.forEach((year) => {
  // Generate exactly 20 structural boxes for each year row
  for (let i = 0; i < 20; i++) {
    const displayId = `partner-${year}-${i + 1}`;
    
    if (year === '2026' && i < real2026Students.length) {
      // 1. Direct index mapping for real cohort members
      const student = real2026Students[i];
      generatedPartners.push({
        id: displayId,
        name: student.name,
        college: student.college,
        year: year,
        imageUrl: student.imageUrl || undefined // Explicitly guarantees the key exists on the object structure
      });
    } else {
      // 2. Clear placeholder boxes
      generatedPartners.push({
        id: displayId,
        name: `Partner Name ${i + 1}`,
        college: `Associated College Campus`,
        year: year,
        imageUrl: undefined // Keeps data schemas strictly identical for Vite optimizer
      });
    }
  }
});

export const partnersData = generatedPartners;