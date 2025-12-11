import {
  House,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

// Data object for all content
export const connectData = {
  heading: {
    main: "Let's",
    highlight: "Connect",
  },
  description:
    "Reach out to the ACM XIM Student Chapter. Whether you're a student, mentor, or industry partner, we’re here to collaborate and support your journey in computing and technology.",
  contacts: [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: [
        "XIM University",
        "Plot No: 12(A), Harirajpur",
        "Bhubaneswar, Odisha, 752050",
        "India",
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: [
        "student.chap.acm@xim.edu.in",
      ],
      note: "For all chapter, event, and membership-related queries.",
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: [
        "+91 96254 25303",
        "+91 62041 48753",
      ],
      note: "Available on working days during institute hours.",
    },
  ],
  newsletter: {
    heading: {
      main: "Join our",
      highlight: "Newsletter", // Capitalized for better appearance
    },
    description: "Stay updated with chapter announcements, upcoming events, workshops, and opportunities curated for the ACM XIM community.",
    // Removed emailLabel, placeholder, and button fields

    // Added new fields for group links
    whatsapp: {
      label: "Join WhatsApp Group",
      link: "YOUR_WHATSAPP_GROUP_INVITE_LINK_HERE", // **Replace with the actual link**
    },
    discord: {
      label: "Join Discord Server",
      link: "YOUR_DISCORD_INVITE_LINK_HERE", // **Replace with the actual link**
    },
  },
  footer: {
    left: {
      href: "/team",
      label: "Team",
      icon: ChevronLeft,
      hidden: false,
    },
    center: {
      href: "/",
      icon: House,
    },
    right: {
      href: "/events",
      label: "Events",
      icon: ChevronRight,
    },
  },
};
