// src/lib/data/events.global.data.js
import orientationBg from "../../assets/Main_gallery/IMG_20251209_234907.jpg";
import orientationG1 from "../../assets/Main_gallery/IMG_20251209_234926.jpg";
import orientationG2 from "../../assets/Main_gallery/IMG_20251209_234935.jpg";
import orientationG3 from "../../assets/Main_gallery/IMG_20251209_234944.jpg";

import clashBg from "../../assets/Main_gallery/IMG_20251209_235003.jpg";
import clashG1 from "../../assets/Main_gallery/IMG_20251209_235014.jpg";
import clashG2 from "../../assets/Main_gallery/IMG_20251209_235025.jpg";
import clashG3 from "../../assets/Main_gallery/IMG_20251209_235038.jpg";

import pythonBg from "../../assets/Main_gallery/IMG_20251209_235127.jpg";
import pythonG1 from "../../assets/Main_gallery/IMG_20251209_235136.jpg";
import pythonG2 from "../../assets/Main_gallery/IMG_20251209_235229.jpg";
import pythonG3 from "../../assets/Main_gallery/IMG_20251210_000153.jpg";

import tirangaBg from "../../assets/Main_gallery/IMG_20251210_000231.jpg";
import tirangaG1 from "../../assets/Main_gallery/IMG_20251211_012145.jpg";
import tirangaG2 from "../../assets/Main_gallery/IMG_2158.jpg";
import tirangaG3 from "../../assets/Main_gallery/IMG_2160.jpg";

import mindsparkBg from "../../assets/Main_gallery/IMG-20250811-WA0003.jpg";
import mindsparkG1 from "../../assets/Main_gallery/IMG-20250811-WA0005.jpg";
import mindsparkG2 from "../../assets/Main_gallery/IMG-20250909-WA0018.jpg";
import mindsparkG3 from "../../assets/Main_gallery/IMG-20251209-WA0016.jpg";

// This contains the list of events (all sessions)
// 2025-26 → current
// 2024-25, 2023-24 → previous sessions

const events = [
  // =========================================================================
  // * 2025-26 Session (Current Session)
  // =========================================================================
  {
    id: "orientation-2025-26",
    title: "ACM Chapter Orientation 2025-26",
    posterImg: "src/assets/home_event_pic/orientation_img.png",
    backgroundImg: orientationBg,
    venue: "CR 301, 3rd Floor, NAB, XIM University",
    time: "July 20, 2025 · 3:00 PM – 4:30 PM",
    session: "2025-26",
    type: "Orientation",
    registrationLink: "#",
    rulebook: "#",
    description:
      "The annual orientation event for new members, providing a comprehensive overview of the ACM XIM Student Chapter, its core mission, member benefits, and the calendar of technical and professional events for the 2025-26 academic year.",
    rulesAndRegulation: [
      "Open to all students, especially first-year undergraduates and new PG students.",
      "Punctuality is expected.",
      "Attendees are encouraged to ask questions regarding membership and activities.",
    ],
    // leaderboard: [],
    gallery: [
      orientationG1,
      orientationG2,
      orientationG3
    ],
  },
  {
    id: "Clash of Code",
    title: "Clash of Code",
    posterImg: "src/assets/home_event_pic/clashofcodes.png",
    backgroundImg: clashBg,
    venue: "CR 301, 3rd Floor, NAB, XIM University",
    time: "July 20, 2025 · 3:00 PM – 4:30 PM",
    session: "2025-26",
    type: "Coding Competition",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd94m31etLNSASL5WEk-SYaFtpAwPybs8kDmraW5ZLyHVSi-w/viewform?usp=sharing&ouid=101810836675428734315",
    rulebook: "https://drive.google.com/file/d/14wbrt56DP9dQcOfv7lHWIcNYKJQlYgsP/view?usp=sharing",
    description:
      "Clash of Code is a competitive coding event designed to test problem-solving skills, logic, and coding speed. The event is conducted in two formats: a 1 vs 1 coding battle exclusively for senior students, and a group-based coding challenge where teams compete to solve problem statements collaboratively. The competition encourages logical thinking, teamwork, and efficient coding under time constraints.",
    rulesAndRegulation: [
      "The 1 vs 1 coding round is open only to senior students.",
      "The group coding round is open to all registered participants.",
      "Each participant or team must solve the given problems within the allotted time.",
      "Use of unfair means or plagiarism will lead to immediate disqualification.",
      "Judging will be based on correctness, efficiency, and submission time.",
    ],
    leaderboard: [
      { name: "Sai Subham Sahoo (Senior Group) & Roni Thomas (Jr Group)", prize: "1st Place (Tech Gift)" },
      { name: "Koyena ( Senior Group) &  Vansh (Jr Group)", prize: "2nd Place (ACM Certificate)" },
    ],
    gallery: [
      clashG1,
      clashG2,
      clashG3
    ],
  },

  {
    id: "pythonverse-2025",
    title: "PythonVerse: Coding & Project Challenge",
    posterImg: "src/assets/home_event_pic/pythonverse.png",
    backgroundImg: pythonBg,
    venue: "Lab 5, 3rd Floor, NAB, XIM University",
    time: "September 25, 2025 | 4:00 PM – 6:00 PM",
    session: "2025-26",
    type: "Coding Competition",
    registrationLink: "https://forms.gle/Gret6JvCYEHLJv6KA",
    rulebook: "https://drive.google.com/file/d/1w15mR3C81slae3mWVhD9yu15pUkvpn2j/view?usp=sharing",
    description:
      "A comprehensive Python competition with three distinct tracks: standard coding problems, implementation of DSA concepts, and a 'Project Void' round where participants must debug and complete a partially written Python application (project).",
    rulesAndRegulation: [
      "Individual participation only.",
      "The event consists of three tracks: Coding, DSA Implementation, and Project Void (Debugging).",
      "Participants must use Python (version 3.x).",
      "Use of generative AI for code completion is strictly prohibited.",
      "Winners are judged based on score across all tracks and time efficiency.",
    ],
    leaderboard: [
      { name: "Koyena Sutradhar & Mrinalee Mishra", prize: "1st Place (Tech Gift)" },
      { name: "Pushkar Singh & Prashant Kumar", prize: "2nd Place (ACM Certificate)" },
    ],
    gallery: [
      pythonG1,
      pythonG2,
      pythonG3
    ],
  },
  {
    id: "code-tiranga-2025",
    title: "Code Tiranga: Web Designing Challenge",
    posterImg: "src/assets/home_event_pic/code-tiranga.png",
    backgroundImg: tirangaBg,
    venue: "Online (Remote Submission)",
    time: "October 26, 2025 · 9:00 AM – 5:00 PM",
    session: "2025-26",
    type: "Design Challenge",
    registrationLink: "https://forms.gle/4KjJ2DAANuEBAxVC9",
    rulebook: "https://drive.google.com/file/d/1za_YZmXKQuMzVrqnUNI79E48LUHV251J/view?usp=sharing",
    description:
      "An online web design competition where participants are challenged to build a creative and fully responsive website based on a given theme (e.g., 'Digital India', 'National Heritage'), utilizing modern HTML, CSS, and JavaScript.",
    rulesAndRegulation: [
      "Solo participation is mandatory.",
      "The design must be fully responsive across desktop and mobile views.",
      "Submissions must be made via a publicly accessible link (e.g., GitHub Pages, Netlify).",
      "Evaluation criteria: Aesthetics, Responsiveness, and Code Quality.",
    ],
    leaderboard: [
      { name: "Aditya bhaginath Kurhade (GH Raisoni College of Engineering)", prize: "1st Place (ACM Certificate)" },
      { name: "Pratyush Jha (Delhi Technical Campus)", prize: "2nd Place (ACM Certificate)" },
      { name: "Samina Sultana (Sitare University)", prize: "3rd Place (ACM Certificate)" },
    ],
    gallery: [
      tirangaG1,
      tirangaG2,
      tirangaG3
    ],
  },
  {
    id: "mind-spark-2-2025",
    title: "Mind Spark 2.0: Logical Aptitude Challenge",
    posterImg: "src/assets/home_event_pic/mindspark.png",
    backgroundImg: mindsparkBg,
    venue: "Lab 5, 3rd Floor, NAB, XIM University",
    time: "November 8, 2025 | 4:00 PM – 5:00 PM",
    session: "2025-26",
    type: "Logical Challenge",
    registrationLink: "https://drive.google.com/file/d/1Lc714D8wArE3qfcSYMmqa06ckUtI9-8W/view?usp=sharing",
    rulebook: "#",
    description:
      "The second edition of Mind Spark, focusing on advanced aptitude and logical reasoning problems. The challenge is designed to sharpen critical thinking and problem-solving skills necessary for technical interviews.",
    rulesAndRegulation: [
      "All challenges were to be completed through individual effort only.",
      "Use of calculators, mobile phones, or external electronic devices is strictly prohibited.",
      "Each section is strictly time-bound.",
      "Winners are decided based on the number of correct answers and the time taken for completion.",
    ],
    leaderboard: [
      { name: "Vashisth Tanikella ", prize: "1st Place (ACM Certificate + Medals )" },
      { name: "Sai Suman Hota", prize: "2nd Place (ACM Certificate + Medals)" },
      // { name: "Anupam Choudhary (XIM University)", prize: "3rd Place (ACM Certificate)" },
    ],
    gallery: [
      mindsparkG1,
      mindsparkG2,
      mindsparkG3
    ],
  },

  // =========================================================================
  // * 2024-25 Session
  // =========================================================================
  {
    id: "web-styledown-2024",
    title: "Web Styledown – CSS Styling Challenge Event",
    posterImg: "/assets/events/legacy/webstyledown.png",
    backgroundImg: "/assets/events/legacy/webstyledown-bg.jpg",
    venue: "Online | Open Source Platforms",
    time: "Dec 6–8, 2024 (50-hour window)",
    session: "2024-25",
    type: "Design Challenge",
    registrationLink: "#",
    rulebook: "#",
    description:
      "A CSS styling challenge where participants were given a pre-written HTML front-page template and had 50 hours to creatively style it, ensuring full responsiveness across all screen sizes (desktop, tablet, and mobile).",
    rulesAndRegulation: [
      "The primary goal was creative styling and full responsiveness.",
      "The competition period was strictly 50 hours.",
      "Participants were permitted to modify the provided HTML structure.",
      "Submission Criteria: Creativity, Technical Proficiency, and Responsiveness.",
      "Plagiarism or use of previously created external code was prohibited.",
    ],
    leaderboard: [
      { name: "Yash Mittal (Chitkara University)", prize: "1st Place (ACM Certificate)" },
      { name: "Pratyush Jha (Delhi Technical Campus)", prize: "2nd Place (ACM Certificate)" },
      { name: "Anupam Choudhary (XIM University)", prize: "3rd Place (ACM Certificate)" },
    ],
    gallery: [],
  },
  {
    id: "codewave-2024",
    title: "CodeWave",
    posterImg: "/assets/events/legacy/codewave.png",
    backgroundImg: "/assets/events/legacy/codewave-bg.jpg",
    venue: "Lab 5, 3rd Floor, XIM University",
    time: "July 30, 2024 | 4:00 PM – 5:00 PM",
    session: "2024-25",
    type: "Coding Challenge",
    registrationLink: "#",
    rulebook: "#",
    description:
      "A coding challenge for teams of 2 members competing in two rounds. Questions were differentiated based on the participants' academic years to fairly test fundamental coding and logical thinking skills.",
    rulesAndRegulation: [
      "Participation required teams of exactly two (2) members.",
      "All competition rounds were held in the designated lab.",
      "The challenge consisted of two mandatory coding rounds.",
      "Questions were differentiated based on the academic year.",
      "Use of external electronic devices or internet searches is strictly prohibited.",
    ],
    leaderboard: [
      { name: "Pratirupa Toppo, Jessica Maria Ekka (2nd YEAR)", prize: "ACM Certificates, Mouse and Laptop cover" },
      { name: "Mrinalee Mishra, Koyena Sutradhar (1st YEAR)", prize: "ACM Certificates, Mouse and Laptop cover" },
    ],
    gallery: [],
  },
  {
    id: "mind-spark-2024",
    title: "Mind Spark",
    posterImg: "/assets/events/legacy/mindspark.png",
    backgroundImg: "/assets/events/legacy/mindspark-bg.jpg",
    venue: "CR – 301, 3rd Floor, XIM University",
    time: "July 2, 2024 | 4:00 PM – 5:00 PM",
    session: "2024-25",
    type: "Logical Challenge",
    registrationLink: "#",
    rulebook: "#",
    description:
      "An event designed to enhance thinking and logical abilities, focusing on problems that required participants to apply critical reasoning, systematic analysis, and creative problem-solving under strict time limits.",
    rulesAndRegulation: [
      "Participants must focus on applying critical reasoning and creative problem-solving.",
      "All challenges were to be completed through individual effort only.",
      "Use of external electronic devices, the internet, or generative AI tools was strictly prohibited.",
      "Each problem was subject to a strict time limit.",
      "Winners were decided based on accuracy and logical validity.",
    ],
    leaderboard: [
      { name: "Ayush Jha", prize: "1st Place (ACM Certificates, Gold Medal)" },
      { name: "Ashmit Pradhan", prize: "2nd Place (ACM Certificates, Silver Medal)" },
      { name: "Moningi Sai Sumanth", prize: "3rd Place (ACM Certificates, Bronze Medal)" },
    ],
    gallery: [],
  },
  {
    id: "cracking-internships-2024",
    title: "Cracking Summer Internships with Coding Ninjas",
    posterImg: "/assets/events/legacy/internship.png",
    backgroundImg: "/assets/events/legacy/internship-bg.jpg",
    venue: "Zoom Meeting (Online)",
    time: "May 27, 2024 | 6:00 PM – 7:00 PM",
    session: "2024-25",
    type: "Speaker Event",
    registrationLink: "#",
    rulebook: "#",
    description:
      "A Speaker event in collaboration with Coding Ninjas, focused on equipping participants with the essential knowledge, profile-building tips, and interview skills required to excel in summer internships and placements.",
    rulesAndRegulation: [
      "Only pre-registered attendees were granted entry.",
      "Attendees must be punctual for the online session.",
      "All personal electronic devices must be set to silent or switched off.",
      "Attendees were expected to maintain professional and respectful behavior.",
      "Questions were held until the designated Q&A segment.",
    ],
    //     leaderboard: [
    //         { name: "Key Takeaway", score: "Enhanced understanding of internship requirements and industry trends." },
    //         { name: "Key Takeaway", score: "Improved profile-building and resume-writing skills." },
    //         { name: "Key Takeaway", score: "Effective interview preparation techniques discussed." },
    //     ],
    //     gallery: [],
  },
  {
    id: "dsa-drill-saturdays-2024",
    title: "DSA Drill Saturdays (DDS)",
    posterImg: "/assets/events/legacy/dsa-drill.png",
    backgroundImg: "/assets/events/legacy/dsa-drill-bg.jpg",
    venue: "Hacker Rank (Online) | Mentorship Sessions at Lab 5",
    time: "Every Saturday (Starting Dec 14, 2024)",
    session: "2024-25",
    type: "Practice Series",
    registrationLink: "#",
    rulebook: "#",
    description:
      "A weekly coding initiative focused on strengthening problem-solving skills through hands-on Data Structures and Algorithms (DSA) practice and mentorship, essential for technical interviews and competitive programming.",
    rulesAndRegulation: [
      "Participants must actively engage in hands-on DSA practice.",
      "Participation requires commitment to the weekly Saturday schedule.",
      "Participants are strongly encouraged to review the previous week's concepts.",
      "When interacting with mentors, participants must be respectful and attentive.",
      "Consistent attendance is crucial for maximizing learning benefits.",
    ],
    // leaderboard: [
    //     { name: "Session 1 (Dec 14th)", score: "Basics of DSA covered. Gained confidence in fundamental concepts." },
    //     { name: "Session 2 (Dec 21st)", score: "Array manipulation techniques covered. Improved understanding of sorting/searching." },
    //     { name: "Session 3 (Dec 28th)", score: "Big Sorting and efficient sorting algorithms covered." },
    //     { name: "Session 4 (Jan 4th)", score: "Java Loops II covered. Enhanced proficiency in using loops." },
    //     { name: "Session 5 (Feb 1st)", score: "String and Number Analysis covered. Improved understanding of palindrome logic." },
    // ],
    // gallery: [],
  },
  {
    id: "StockStorm-2025",
    title: "StockStorm 2.0 (Virtual Trading Competition)",
    posterImg: "/assets/events/legacy/synchro3.png",
    backgroundImg: "/assets/events/legacy/synchro3-bg.jpg",
    venue: "Online Platform (StockGrow)",
    time: "January 12–16, 2025",
    session: "2024-25",
    type: "Trading Competition",
    registrationLink: "#",
    rulebook: "#",
    description:
      "StockStorm 2.0 is an intensive virtual trading competition designed to allow participants to test their financial acumen and trading skills in a real-time, simulated stock market environment.",
    rulesAndRegulation: [
      "Participants must be at least 18 years old.",
      "Participants must have a valid account on the designated StockGrow virtual trading platform.",
      "Trading is conducted using virtual currency only; no real money is involved.",
      "Winners are determined by the highest portfolio gain at the end of the competition period.",
    ],
    leaderboard: [],
    // gallery: [],
  },
  {
    id: "Tech-Tank",
    title: "Tech Tank: Entrepreneurship Event",
    posterImg: "/assets/events/placeholder/cloud.png",
    backgroundImg: "/assets/events/placeholder/cloud-bg.jpg",
    venue: "Mini Auditorium, XIM University",
    time: "September 15, 2024 · 5:00 PM – 7:00 PM",
    session: "2024-25",
    type: "Entrepreneurship Workshop/Pitch",
    registrationLink: "#",
    rulebook: "#",
    description: "An entrepreneurship event where teams pitch innovative tech-based business ideas to a panel of judges, covering market strategy, technology feasibility, and financial projections.",
    rulesAndRegulation: [
      "Teams must consist of 2-4 members.",
      "A comprehensive pitch deck (max 10 slides) is required.",
      "The pitch duration is strictly limited (e.g., 5 minutes pitch + 3 minutes Q&A).",
      "Business ideas must be centered around a verifiable technical innovation.",
    ],
    leaderboard: [],
    gallery: [],
  },
  {
    id: "Chapter-Orientation",
    title: "ACM Chapter Orientation 2024-25",
    posterImg: "/assets/events/placeholder/quiz.png",
    backgroundImg: "/assets/events/placeholder/quiz-bg.jpg",
    venue: "CR 301, 3rd Floor, XIM University",
    time: "July 30, 2024 · 3:00 PM – 4:30 PM",
    session: "2024-25",
    type: "Orientation",
    registrationLink: "#",
    rulebook: "#",
    description: "An introductory session for new and prospective members, covering the structure of the ACM XIM Student Chapter, the benefits of membership, and the roadmap of technical and professional development activities for the academic year.",
    rulesAndRegulation: [
      "Open to all students, especially first-year undergraduates and new PG students.",
      "Punctuality is expected.",
      "Attendance is mandatory for those interested in joining the core team.",
    ],
    // leaderboard: [],
    gallery: [],
  },
  {
    id: "Internal Hackathon ",
    title: "Internal Hackathon for ACM Member Selection",
    posterImg: "/assets/events/placeholder/security.png",
    backgroundImg: "/assets/events/placeholder/security-bg.jpg",
    venue: "Lab 6, XIM University",
    time: "August 30, 2024 ",
    session: "2024-25",
    type: "Recruitment Hackathon",
    registrationLink: "#",
    rulebook: "#",
    description: "A competitive, internal hackathon primarily used as a practical assessment and selection round for new ACM chapter members, testing fundamental coding, teamwork, and rapid problem-solving skills.",
    rulesAndRegulation: [
      "Open only to registered applicants for the ACM Student Chapter.",
      "Teams will be assigned randomly or pre-determined by organizers.",
      "Projects must be initiated and completed during the event duration.",
      "Use of generative AI tools for core code generation is prohibited.",
      "Judging criteria include innovation, technical implementation, and presentation.",
    ],
    // leaderboard: [],
    gallery: [],
  },


  // =========================================================================
  // * 2023-24 Session (Total 7 Events)
  // =========================================================================
  {
    id: "CODE-QUEST",
    title: "CodeQuest: 24-Hour Hackathon",
    posterImg: "/assets/events/legacy/dsa-drill.png",
    backgroundImg: "/assets/events/legacy/dsa-drill-bg.jpg",
    venue: "ONLINE (Remote Participation)",
    time: "28/07/2023 – 29/07/2023 (24HR)",
    session: "2023-24",
    type: "Hackathon",
    registrationLink: "#",
    rulebook: "#",
    description:
      "A fast-paced, 24-hour online hackathon where participants form teams to develop innovative software solutions and prototypes based on a set theme or problem statement, testing their coding and collaboration skills under pressure.",
    rulesAndRegulation: [
      "Teams of 2-4 members are allowed.",
      "All code must be written within the 24-hour time frame.",
      "Projects are judged on innovation, technical complexity, and completeness.",
      "Mentors will be available online for guidance.",
    ],
    leaderboard: [],
    gallery: [],
  },
  {
    id: "introduction-2023",
    title: "Introduction to ACM & Chapter Orientation",
    posterImg: "/assets/events/legacy/orientation.png",
    backgroundImg: "/assets/events/legacy/orientation-bg.jpg",
    venue: "Cr 301 -XIM University",
    time: "July 20, 2023 · 3:00 PM – 5:00 PM",
    session: "2023-24",
    type: "Orientation",
    registrationLink: "#",
    rulebook: "#", // Added rulebook placeholder
    description:
      "A comprehensive chapter orientation session introducing the mission and vision of ACM, the benefits of joining the ACM XIM Student Chapter, and the annual roadmap of technical and professional activities planned for the academic year.",
    rulesAndRegulation: [
      "Open to all new students interested in Computer Science and Technology.",
      "Punctuality is required.",
      "Q&A session will be held at the end of the presentation.",
    ],
    leaderboard: [],
    gallery: [],
  },
  {
    id: "TechSkribbl",
    title: "Tech Skribbl: Pictionary for Techies",
    posterImg: "/assets/events/placeholder/python.png",
    backgroundImg: "/assets/events/placeholder/python-bg.jpg",
    venue: "Computer Lab 5, XIM University",
    time: "October 10, 2023 · 5:00 PM – 6:30 PM",
    session: "2023-24",
    type: "Non-Technical",
    registrationLink: "#",
    rulebook: "#",
    description:
      "A fun, engaging, and non-technical event based on the popular game Pictionary, where participants draw tech-related concepts, algorithms, or programming terms for their team to guess. It's a great way for techies to relax and connect.",
    rulesAndRegulation: [
      "Prior registration is mandatory.",
      "Teams of 2-3 members will be formed on the spot.",
      "Drawing must be done on the provided platform or whiteboard.",
      "No verbal clues or gestures pointing to letters are allowed.",
    ],
    leaderboard: [],
    gallery: [],
  },
  {
    id: "Wisdom Wars",
    title: "Wisdom Wars: Technical Quiz Competition",
    posterImg: "/assets/events/placeholder/db.png",
    backgroundImg: "/assets/events/placeholder/db-bg.jpg",
    venue: "Online (via Google Forms/Quiz Platform)",
    time: "February 2, 2024 · 4:00 PM – 6:00 PM",
    session: "2023-24",
    type: "Competition",
    registrationLink: "#",
    rulebook: "#",
    description:
      "A challenging quiz competition designed to test knowledge on a wide range of technical topics, including DSA, modern computing trends, history of technology, and general IT awareness.",
    rulesAndRegulation: [
      "Individual participation only.",
      "The use of search engines or external resources is strictly prohibited.",
      "Scoring is based on correct answers and time taken.",
      "The quiz consists of multiple rounds of increasing difficulty.",
    ],
    // leaderboard: [
    //     { name: "Top Scorer", prize: "ACM Merchandise + Certificate of Merit" },
    //     { name: "Second Place", prize: "ACM Certificate" },
    // ],
    // gallery: [],
  },
  {
    id: "Pen to Pixel",
    title: "Pen to Pixel: AI Prompt Design Challenge",
    posterImg: "/assets/events/placeholder/career.png",
    backgroundImg: "/assets/events/placeholder/career-bg.jpg",
    venue: "Online Submission",
    time: "May 17, 2024 · 10:00 AM – 5:00 PM",
    session: "2023-24",
    type: "AI Prompt Challenge",
    registrationLink: "#",
    rulebook: "#",
    description:
      "A creative competition focused on the emerging field of Generative AI. Participants must submit carefully crafted text prompts to generate compelling images or text, demonstrating their skill in 'prompt engineering'.",
    rulesAndRegulation: [
      "Individual participation only.",
      "Participants must use a specified Generative AI tool (e.g., Midjourney, DALL-E, Gemini).",
      "The original prompt text must be submitted along with the final AI-generated output.",
      "Judging criteria include creativity, detail, and effectiveness of the prompt.",
    ],
    // leaderboard: [],
    // gallery: [],
  },
];

export default events;