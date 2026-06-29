import type { PartnerProfile } from '../types';

const real2026Students = [
  { name: "Aakriti Pandey", college: "Kathmandu University", imageUrl: "/students images/aakiriti.png" },
  { name: "Arekh Shrestha", college: "Kathmandu University School of Engineering", imageUrl: "/students images/arekh.png" },
  { name: "Nirika Lamichhane", college: "IOE Thapathali Campus", imageUrl: "/students images/nirika.png" },
  { name: "Sworna Dhan Tuladhar", college: "Islington College", imageUrl: "/students images/sworna.png" },
  { name: "Ayam Kattel", college: "Pulchowk Campus", imageUrl: "/students images/ayam.png" },
  { name: "Nozomi Giri", college: "Kathmandu Engineering College", imageUrl: "/students images/nozomi.png" },
  { name: "Priyanka Khatri", college: "Sunway College", imageUrl: "/priyanka.jpeg" },
  { name: "Yojana Ghimire", college: "IOE WRC", imageUrl: "/students images/yojana.png" },
  { name: "Shreyam Regmi", college: "Pulchowk Campus", imageUrl: "/students images/shreyam.png" },
  { name: "Smriti Adhikari", college: "Deerwalk Institute of Technology", imageUrl: "/students images/smriti.png" },
  { name: "Viraj Sawad", college: "Kantipur Engineering College", imageUrl: "/students images/viraj.png" },
  { name: "Shaswat Sharma", college: "IOE Thapathali Campus", imageUrl: "/students images/shaswat.png" },
  { name: "Srijit Gyawali", college: "Nepathya College", imageUrl: "/students images/sirijit.png" },
  { name: "Aaditya Raj Uprety", college: "Pulchowk Campus", imageUrl: "/students images/aditya.png" },
  { name: "Drishya Karki", college: "Deerwalk Institute of Technology", imageUrl: "/students images/Drishya.png" },
  { name: "Ashutosh Dhungana", college: "Khwopa Engineering College", imageUrl: "/students images/Ashutosh.png" },
  { name: "Kriyesh Aryal", college: "Patan Multiple Campus", imageUrl: "/students images/kriyesh.png" },
  { name: "Ayusha Shrestha", college: "Khwopa Engineering College", imageUrl: "/students images/Ayusha.png" },
  { name: "Mashiha Krishna Shrestha", college: "Sagarmatha Engineering College", imageUrl: "/students images/Mashiha.png" },
  { name: "Raksha Karn", college: "Patan Multiple Campus", imageUrl: "/students images/Raksha.png" }
];

const years = ['2022', '2023', '2024', '2025', '2026'];
const generatedPartners: PartnerProfile[] = [];

years.forEach((year) => {

  for (let i = 0; i < 20; i++) {
    const displayId = `partner-${year}-${i + 1}`;
    
    if (year === '2026' && i < real2026Students.length) {
      const student = real2026Students[i];
      generatedPartners.push({
        id: displayId,
        name: student.name,
        college: student.college,
        year: year,
        imageUrl: student.imageUrl,
        linkedin: "https://www.linkedin.com"
      });
    } else {
      generatedPartners.push({
        id: displayId,
        name: `Partner Name ${i + 1}`,
        college: `Associated College Campus`,
        year: year,
        imageUrl: undefined
      });
    }
  }
});

export const partnersData = generatedPartners;