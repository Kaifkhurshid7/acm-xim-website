import NL123 from "/src/assets/nl123.jpg";
import W14 from "/src/assets/w14.jpg"
import Star from "/src/assets/star.jpg"
import Snoppy from "/src/assets/snoppy1.jpg"

export const merchandise = [
  {
    title: "ACM XIM Winter Hoodie",
    img: Snoppy,
    tags: "Hoodie",
    tagColor: "bg-blue-200",
    description:
      "Premium fleece-lined ACM XIM Winter Hoodie designed for comfort and warmth. Perfect for events, coding marathons, and everyday campus wear.",
    price: 1199,
    date: "Dec 2024",
  },
  {
    title: "ACM XIM Signature Jacket",
    img: Snoppy,
    tags: "Jacket",
    tagColor: "bg-violet-200",
    description:
      "A stylish ACM XIM varsity-style winter jacket featuring durable fabric, embroidered chapter branding, and an all-weather design.",
    price: 1799,
    date: "Dec 2024",
  },
  {
    title: "ACM Winter Edition T-Shirt",
    img: Snoppy,
    tags: "T-Shirt",
    tagColor: "bg-green-200",
    description:
      "Limited-edition ACM XIM winter T-shirt crafted from soft breathable cotton. A perfect blend of minimal design and chapter identity.",
    price: 699,
    date: "Dec 2024",
  },
];

const featured = {
  title: "Smart Campus Navigator – AI-Powered Indoor Mapping",
  img: NL123,
  tags: "Project",
  description:
    "A real-time campus navigation system built using image processing and pathfinding algorithms. The project helps students locate classrooms, labs, and campus facilities with ease.",
  date: "Jan 12, 2025",
};

const otherNewsLetter = [
  {
    title: "Music Genre Classifier using Deep Learning",
    img: Snoppy,
    tags: "AI / ML",
    tagColor: "bg-blue-200",
    description:
      "A CNN-based model trained on spectrograms to automatically classify music genres. Features preprocessing with Librosa and a custom neural network built in PyTorch.",
    date: "Dec 5, 2024",
  },
  {
    title: "Personal Expense Tracker – Full-Stack Web App",
    img: Snoppy,
    tags: "Web Development",
    tagColor: "bg-violet-200",
    description:
      "A MERN-stack application that allows users to track expenses, visualize spending patterns, and export financial summaries using integrated charts.",
    date: "Nov 20, 2024",
  },
  {
    title: "IoT Smart Agriculture Monitor",
    img: Snoppy,
    tags: "IoT",
    tagColor: "bg-green-200",
    description:
      "A sensor-based IoT system that monitors soil moisture, humidity, and temperature while providing actionable insights to improve crop health via a cloud dashboard.",
    date: "Oct 10, 2024",
  },
  {
    title: "AI Resume Analyzer for Recruiters",
    img: Star,
    tags: "AI / ML",
    tagColor: "bg-violet-200",
    description:
      "A natural language processing tool that evaluates candidate resumes, extracts key skills, and ranks applicants based on job description matching.",
    date: "Sep 18, 2024",
  },
  {
    title: "E-Commerce Website with Recommendation System",
    img: W14,
    tags: "Web Development",
    tagColor: "bg-blue-200",
    description:
      "A full-fledged e-commerce platform featuring user authentication, cart management, order tracking, and a personalized recommendation engine.",
    date: "Aug 30, 2024",
  },
  {
    title: "Social Media Sentiment Dashboard",
    img: Star,
    tags: "Data Science",
    tagColor: "bg-blue-200",
    description:
      "A visual analytics dashboard that tracks real-time sentiment across platforms like X, Instagram, and Reddit using transformer-based models.",
    date: "Aug 12, 2024",
  },
  {
    title: "JavaScript Visualizer – Learn JS Internals",
    img: W14,
    tags: "Web Development",
    tagColor: "bg-blue-200",
    description:
      "An interactive tool that explains how JavaScript executes code: call stack, event loop, microtasks, and rendering pipeline.",
    date: "Jul 28, 2024",
  },
  {
    title: "Quantum Computing Simulator (Beginner Friendly)",
    img: Star,
    tags: "Research",
    tagColor: "bg-violet-200",
    description:
      "A simulation tool demonstrating qubits, superposition, and quantum gates. Designed to help students understand quantum computing fundamentals.",
    date: "Jul 10, 2024",
  },
  {
    title: "AI Learning Path Generator",
    img: W14,
    tags: "Education",
    tagColor: "bg-yellow-200",
    description:
      "Personalized AI-generated study roadmaps for students based on their goals—DSA, ML, DevOps, Web Dev, or Research.",
    date: "Jun 18, 2024",
  },
  {
    title: "Ethical AI Toolkit for Schools",
    img: Star,
    tags: "Education",
    tagColor: "bg-yellow-200",
    description:
      "A curated toolkit including lesson plans, examples, and interactive modules to help schools teach AI ethics in an engaging way.",
    date: "Jun 5, 2024",
  },
  {
    title: "Women in Tech – Innovation Spotlight",
    img: W14,
    tags: "Community",
    tagColor: "bg-green-200",
    description:
      "A collection of featured projects built by women innovators in ACM-XIM, celebrating impact, creativity, and leadership.",
    date: "May 20, 2024",
  },
  {
    title: "Tech Collaborators Hub – Global Project Network",
    img: Star,
    tags: "Community",
    tagColor: "bg-green-200",
    description:
      "A platform connecting ACM members across universities, enabling them to collaborate on open-source and research-driven projects.",
    date: "May 5, 2024",
  },
];


const categories = [
  "All",
  "Web Development",
  "Education",
  "AI / ML",
  "Data Science",
  "Community"
];

export { featured, otherNewsLetter, categories };
