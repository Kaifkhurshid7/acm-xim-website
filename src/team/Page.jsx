import React, { useState } from "react";

// --- Icon Definitions (New Addition for professional look) ---
const Icons = {
    // Email Icon (Envelope)
    Email: (props) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.263a2 2 0 002.22 0L21 8m-2 10a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v10z" />
        </svg>
    ),
    // LinkedIn Icon (Outline)
    LinkedIn: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.484 2.5C1.107 6 0 4.881 0 3.5S1.107 1 2.496 1C3.882 1 4.98 2.119 4.98 3.5zm-.103 5.485H.116v14.45h4.76V8.985zM14.07 8.985h-4.32V12.9h.194l.035.093c.47-1.156 1.63-2.32 3.824-2.32 2.76 0 4.85 1.83 4.85 5.72v6.622h-4.757v-6.32c0-1.503-.535-2.527-1.884-2.527-1.025 0-1.63.743-1.897 1.46-.1.26-.12.62-.12.983v6.404H8.815V14.54c0-2.82 1.93-3.665 3.33-3.665s2.03.49 2.03.49l.06-.05v.025h.19v-2.353z" />
        </svg>
    ),
    // GitHub Icon (Outline)
    GitHub: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.383-1.332-1.752-1.332-1.752-1.088-.745.083-.73.083-.73 1.205.084 1.838 1.234 1.838 1.234 1.07 1.836 2.81 1.305 3.493.998.108-.775.42-1.306.762-1.608-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.467-2.38 1.236-3.22-.124-.303-.536-1.52.116-3.18 0 0 1.006-.32 3.3.123 1.02-.28 2.09-.42 3.16-.42s2.14.14 3.16.42c2.292-.443 3.3-.123 3.3-.123.653 1.66.24 2.877.12 3.18.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.923.43.37.82 1.1.82 2.22 0 1.608-.015 2.898-.015 3.287 0 .318.216.694.825.575C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
        </svg>
    ),
    // Google Site Icon (Simplified Google Apps/Dot icon for Site)
    GoogleSite: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8 6a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            <path d="M22 21h-2v-4a2 2 0 00-2-2h-2v2h2v4h2v2h2v-2z" />
        </svg>
    )
};


// --- Data Section: Team Member Data (From Part 1) ---

const memberTeamsData = {
    tech: [
        { name: "Vedansh Agrawal", email: "ucse25059@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Vedansh+Agrawal&background=3b82f6&color=fff&size=256" },
        { name: "Jitisha Behera", email: "ucse24028@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Jitisha+Behera&background=3b82f6&color=fff&size=256" },
        { name: "Anirudha Dash", email: "ucse23007@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Anirudha+Dash&background=3b82f6&color=fff&size=256" },
        { name: "Akankshya Nayak", email: "ucse24007@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Akankshya+Nayak&background=3b82f6&color=fff&size=256" },
        { name: "Sourav Samal", email: "ucse24059@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Sourav+Samal&background=3b82f6&color=fff&size=256" },
    ],

    events: [
        { name: "Bhabadeep Behera", email: "ucse24018@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Bhabadeep+Behera&background=ef4444&color=fff&size=256" },
        { name: "Ashutosh De", email: "ucse24015@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Ashutosh+De&background=ef4444&color=fff&size=256" },
        { name: "Jigisha Mohanty", email: "ucse24027@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Jigisha+Mohanty&background=ef4444&color=fff&size=256" },
        { name: "Aryan Sahu", email: "ucse24012@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Aryan+Sahu&background=ef4444&color=fff&size=256" },
        { name: "Roni Thomas", email: "ucse25029@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Roni+Thomas&background=ef4444&color=fff&size=256" },
    ],

    contentAndSupport: [
        { name: "Sreeparna Chatterjee", email: "ucse24060@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Sreeparna+Chatterjee&background=10b981&color=fff&size=256" },
        { name: "Ashmit Pradhan", email: "ucse24014@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Ashmit+Pradhan&background=10b981&color=fff&size=256" },
        { name: "Ipsita Pradhan", email: "ucse23025@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Ipsita+Pradhan&background=10b981&color=fff&size=256" },
        { name: "Suyash Raj", email: "ucse24063@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Suyash+Raj&background=10b981&color=fff&size=256" },
        { name: "Sandisha Satarupa", email: "ucse25038@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Sandisha+Satarupa&background=10b981&color=fff&size=256" },
    ],

    mediaAndPR: [
        { name: "Satya Das", email: "ucse22034@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Satya+Das&background=f97316&color=fff&size=256" },
        { name: "Suraj Maharana", email: "ucse23059@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Suraj+Maharana&background=f97316&color=fff&size=256" },
        { name: "Sonali Nayak", email: "ucse23055@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Sonali+Nayak&background=f97316&color=fff&size=256" },
        { name: "Dibyanshi Rath", email: "ucse23019@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Dibyanshi+Rath&background=f97316&color=fff&size=256" },
        { name: "Pooja Samantaray", email: "ucse24040@stu.xim.edu.in", imageUrl: "https://ui-avatars.com/api/?name=Pooja+Samantaray&background=f97316&color=fff&size=256" },
    ]
};

// Consolidate all general members for the final section
const allGeneralMembers = [
    ...memberTeamsData.tech.map(m => ({ ...m, role: "Tech Team Member" })),
    ...memberTeamsData.events.map(m => ({ ...m, role: "Events Team Member" })),
    ...memberTeamsData.contentAndSupport.map(m => ({ ...m, role: "Content Team Member" })),
    ...memberTeamsData.mediaAndPR.map(m => ({ ...m, role: "Media Team Member" })),
];


// --- Team Sections Configuration (From Part 1) ---
const teamSections = [
    {
        title: "Faculty Sponsor & Mentor",
        subtitle: "Academic guidance, strategic direction, and institutional support.",
        accent: "Faculty",
        members: [
            {
                name: "Dr. Chandan Misra",
                role: "Faculty Sponsor",
                tag: "SCSE , XIM UNIVERSITY",
                email: "chandan@xim.edu.in",
                linkedin: "https://linkedin.com/in/ananya-rao",
                googleSite: "https://sites.google.com/view/dr-misra",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Chandan+Misra&background=1d4ed8&color=fff&size=256"
            },
            {
                name: "Prof. Swarup Chattopadhyay",
                role: "Faculty Mentor",
                tag: "SCSE, XIM UNIVERSITY",
                email: "swarup@xim.edu.in",
                linkedin: "https://linkedin.com/in/rohan-mehta",
                googleSite: "https://sites.google.com/view/prof-swarup",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Swarup+Chattopadhyay&background=0f766e&color=fff&size=256"
            }
        ]
    },
    {
        title: "Office Bearers",
        subtitle: "Student leadership responsible for vision, operations, and chapter growth.",
        accent: "Leadership",
        members: [
            {
                name: "Kaif Khurshid",
                role: "Chairperson",
                tag: "Leadership & Strategy",
                email: "ucse23032@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/kaif-khurshid?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                github: "https://github.com/Kaifkhurshid7",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Kaif+Khurshid&background=2563eb&color=fff&size=256"
            },
            {
                name: "Siddhant Pradhan",
                role: "Vice -chairperson",
                tag: "Operations & Outreach",
                email: "ucse23051@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/siddhant-pradhant691/",
                github: "https://github.com/Sidd-ctrl",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Siddhant+Pradhan&background=db2777&color=fff&size=256"
            },
            {
                name: "Priyanshu Pati",
                role: "Secretary",
                tag: "Documentation & Coordination",
                email: "ucse23043@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/priyanshupati/",
                github: "https://github.com/Priyanshuu10",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Priyanshu+Pati&background=15803d&color=fff&size=256"
            }

        ]
    },
    {
        title: "Supervisors",
        subtitle: "Senior members ensuring continuity, quality, and mentorship.",
        accent: "Supervisors",
        members: [
            {
                name: "Abhilasha Panda",
                role: "Ex-chairperson",
                email: "ucse22001@stu.xim.edu.in",
                linkedin: "",
                github: "",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Abhilasha+Panda&background=0f766e&color=fff&size=256"
            },
            {
                name: "Ansika Mohanty",
                role: "Ex-vice chairperson",
                email: "ucse22007@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/ansika-mohanty-314489247",
                github: "",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Ansika+Mohanty&background=0f172a&color=fff&size=256"
            }
        ]
    },
    {
        title: "Core Team",
        subtitle: "The execution backbone of ACM–XIM across technology, events, content, and media.",
        accent: "Core Team",
        members: [
            {
                name: "Sai Shreya Mohanty",
                role: "Treasurer",
                email: "ucse24051@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/sai-shreya-mohanty-80721631a",
                github: "https://github.com/shreyasaii",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Sai+Shreya+Mohanty&background=7c2d12&color=fff&size=256"
            },
            {
                name: "Piyush Nayak",
                role: "Convener",
                email: "ucse23039@stu.xim.edu.in",
                linkedin: "",
                github: "",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Piyush+Nayak&background=2563eb&color=fff&size=256"
            },
            {
                name: "Anupam",
                role: "Tech Lead",
                email: "",
                linkedin: "",
                github: "",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Anupam&background=2563eb&color=fff&size=256"
            },
            {
                name: "Ayush Jha",
                role: "Deputy Tech Lead",
                email: "ucse24017@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/ayuzhjha",
                github: "https://github.com/decodingayush",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Ayush+Jha&background=9f1239&color=fff&size=256"
            },
            {
                name: "Soumya Sathpathy",
                role: "Events Lead",
                email: "ucse23056@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/soumya-prakash-satapathy-b57b68284",
                github: "https://github.com/Soumyasatapathy1819",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Soumya+Sathpathy&background=14532d&color=fff&size=256"
            },
            {
                name: "Dua Rajat",
                role: "Deputy Events Lead",
                email: "",
                linkedin: "",
                github: "",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Dua+Rajat&background=ef4444&color=fff&size=256"
            },
            {
                name: "Sakshi Pandey",
                role: "Content Lead",
                email: "ucse24052@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/sakshi-pandey-20263331a",
                github: "https://github.com/Sakshi-230",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Sakshi+Pandey&background=1d4ed8&color=fff&size=256"
            },
            {
                name: "Pritisha Sarangi",
                role: "Deputy Content Lead",
                email: "ucse24045@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/pritisha-sarangi-4a29102b2",
                github: "https://github.com/pritisha-a11y",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Pritisha+Sarangi&background=ea580c&color=fff&size=256"
            },
            {
                name: "Prashant Kumar",
                role: "Media & PR Lead",
                email: "ucse24042@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/prashant-raj-0a7a90306/",
                github: "https://github.com/prashantrajj1",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Prashant+Kumar&background=047857&color=fff&size=256"
            },
            {
                name: "Srimad Nayak",
                role: "Operational Lead",
                email: "ucse24061@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/srimadsnehashis",
                github: "https://github.com/srimad1111",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Srimad+Nayak&background=0f766e&color=fff&size=256"
            },
            {
                name: "Mohit Singh",
                role: "POC",
                email: "ucse24033@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/mohit-singh-6a190b317/",
                github: "https://github.com/notsomohit",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Mohit+Singh&background=0f172a&color=fff&size=256"
            },
            {
                name: "Sadhana Routary",
                role: "POC",
                email: "ucse24033@stu.xim.edu.in",
                linkedin: "https://www.linkedin.com/in/mohit-singh-6a190b317/",
                github: "https://github.com/notsomohit",
                imageUrl:
                    "https://ui-avatars.com/api/?name=Mohit+Singh&background=0f172a&color=fff&size=256"
            }
        ]
    },
    {
        title: "ACM Student Chapter Members",
        subtitle: "The vibrant and dedicated community driving chapter activities through specialized teams.",
        accent: "Members",
        isGeneralMemberSection: true, // Flag for custom layout
        members: allGeneralMembers,
        subTeams: [
            {
                teamName: "Tech Team",
                description: "Developing and maintaining the chapter's digital presence (websites, applications, and tools).",
                members: memberTeamsData.tech,
                colorClass: "text-blue-600 border-blue-200",
                // Gradient property removed as we are using a unified black border
            },
            {
                teamName: "Events Team",
                description: "Planning, logistics, and execution of all workshops, hackathons, and tech talks.",
                members: memberTeamsData.events,
                colorClass: "text-red-600 border-red-200",
            },
            {
                teamName: "Content & Support Team",
                description: "Creating engaging content, writing articles, and providing membership support.",
                members: memberTeamsData.contentAndSupport,
                colorClass: "text-green-600 border-green-200",
            },
            {
                teamName: "Media & PR Team",
                description: "Managing social media, graphic design, photography, and external communication.",
                members: memberTeamsData.mediaAndPR,
                colorClass: "text-orange-600 border-orange-200",
            }
        ]
    }
];

// --- Component: Social Links (Updated to use Icons) ---
const SocialLinks = ({ member, isFormal = false }) => (
    <div
        className={`flex flex-wrap items-center justify-center gap-4 p-4 ${isFormal ? 'bg-transparent' : 'bg-blue-50/50'}`}
    >
        {member.linkedin && (
            <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-200"
                title="LinkedIn Profile"
            >
                <Icons.LinkedIn className="h-6 w-6" />
            </a>
        )}
        {member.github && (
            <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-700 hover:text-black transition duration-200"
                title="GitHub Profile"
            >
                <Icons.GitHub className="h-6 w-6" />
            </a>
        )}
        {member.email && (
            <a
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noreferrer"
                className="text-red-500 hover:text-red-700 transition duration-200"
                title="Email Address"
            >
                <Icons.Email className="h-6 w-6" />
            </a>
        )}
        {member.googleSite && (
            <a
                href={member.googleSite}
                target="_blank"
                rel="noreferrer"
                className="text-green-600 hover:text-green-800 transition duration-200"
                title="Google Site"
            >
                <Icons.GoogleSite className="h-6 w-6" />
            </a>
        )}
    </div>
);


// --- Component: General Member Card (Font/Style Adjusted) ---
// Used for the specialized team members (Tech, Events, etc.).
const GeneralMemberCard = ({ member, colorClass }) => {
    const accentColor = colorClass.split('-')[1];

    // Extract base color (e.g., 'blue', 'red', 'green')
    const baseColor = colorClass.split('-')[0].split('text-')[1];

    return (
        <div className="group relative h-full">
            <div
                className={`
                    relative rounded-2xl bg-white 
                    border border-neutral-200/70 
                    shadow-md 
                    transform transition-all duration-300 
                    flex flex-col items-center p-6 md:p-8 h-full 
                    cursor-default
                    group-hover:translate-y-[-2px]
                    group-hover:shadow-lg
                    group-hover:border-${accentColor}-400
                `}
            >
                {/* Image - UPDATED FOR THIN BLACK CIRCLE */}
                <div className="relative mb-4">
                    <div
                        className={`
                            h-20 w-20 rounded-full p-[1px] shadow-sm 
                            bg-black 
                        `}
                    >
                        <div className="h-full w-full rounded-full bg-white overflow-hidden">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Text - Using font-semibold for a more professional look */}
                <div className="text-center space-y-1 flex-grow">
                    <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                        {member.name}
                    </h3>
                    <div className="mx-auto w-10 h-0.5 bg-neutral-100 mt-1 mb-1" />

                    {/* Role (Team Name) */}
                    <p className={`text-sm font-medium pt-1 ${colorClass}`}>
                        {member.role || "Member"}
                    </p>
                </div>

                {/* Email Link (Icon only) */}
                <a
                    href={`mailto:${member.email}`}
                    className={`mt-4 w-8 h-8 flex items-center justify-center rounded-full text-red-600 hover:bg-red-50/70 transition duration-200`}
                    title={`Email ${member.name}`}
                >
                    <Icons.Email className="h-5 w-5" />
                </a>
            </div>
        </div>
    );
};


// --- Component: Team Card (Used for Faculty, Supervisors, Office Bearers, Core Team - Font/Style Adjusted) ---
const TeamCard = ({ member, sectionTitle }) => {
    const isInteractive = sectionTitle === "Office Bearers" || sectionTitle === "Core Team";
    const isFormal = sectionTitle === "Faculty Sponsor & Mentor" || sectionTitle === "Supervisors";
    const [isExpanded, setIsExpanded] = useState(false);

    // Primary color palette
    const accentPrimary = 'blue-600';
    const accentLight = 'blue-400';

    const toggleExpand = (e) => {
        if (isInteractive) {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
        }
    };

    // Styling for Office Bearers/Core Team (Interactive)
    const interactiveCardClasses = `
        relative rounded-2xl bg-white 
        border border-neutral-200/70 
        shadow-xl 
        transform transition-all duration-300 
        flex flex-col items-center p-10 md:p-12
        
        ${isInteractive ? 'cursor-pointer' : 'cursor-default'} 
        
        group-hover:translate-y-[-4px] 
        group-hover:shadow-2xl 
        group-hover:border-${accentLight} 
    `;

    // Styling for Faculty/Supervisors (Formal) - BG is white as requested
    const formalCardClasses = `
        relative rounded-2xl bg-white 
        shadow-md 
        transform transition-all duration-300 
        flex flex-col items-center p-10 md:p-12 h-full
        
        group-hover:bg-neutral-100/70
        group-hover:shadow-lg
        group-hover:border group-hover:border-${accentLight}
    `;


    const unifiedImageRing = "bg-black p-[2px] shadow-sm";

    // Render Logic for Formal Cards (Faculty/Supervisors)
    if (isFormal) {
        return (
            <div className="group relative h-full">
                <div className={formalCardClasses}>
                    {/* Image - Applying the Unified Black Ring */}
                    <div className="relative mb-6">
                        <div className={`h-28 w-28 md:h-32 md:w-32 rounded-full ${unifiedImageRing}`}>
                            <div className="h-full w-full rounded-full bg-white overflow-hidden">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Text - Updated to use font-semibold */}
                    <div className="text-center space-y-1 flex-grow mb-6">
                        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-neutral-900">
                            {member.name}
                        </h3>
                        {/* Professional role text in emerald green */}
                        <p className="text-lg font-semibold text-emerald-800 pt-1">
                            {member.role}
                        </p>
                        <div className="mx-auto w-16 h-0.5 bg-neutral-300 mt-2 mb-2" />
                        {member.tag && (
                            <p className="text-sm text-neutral-600">
                                {member.tag}
                            </p>
                        )}
                    </div>
                    {/* Links - Always visible and clean for formal members */}
                    <SocialLinks member={member} isFormal={true} />
                </div>
            </div>
        );
    }

    // Render Logic for Interactive Cards (Office Bearers/Core Team)
    return (
        <div className="group relative">
            {/* Subtle blue background effect on hover */}
            <div
                className={`
                    absolute inset-0 rounded-2xl 
                    bg-gradient-to-br from-blue-50/50 to-white 
                    opacity-100 group-hover:opacity-10 
                    transition-opacity duration-500 pointer-events-none
                `}
            />

            <div
                className={interactiveCardClasses}
                onClick={toggleExpand}
            >

                {/* Image - Applying the Unified Black Ring (No colored shadow) */}
                <div className="relative mb-6">
                    <div
                        className={`
                            h-28 w-28 md:h-32 md:w-32 rounded-full 
                            ${unifiedImageRing}
                        `}
                    >
                        <div className="h-full w-full rounded-full bg-white overflow-hidden">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Text - Updated to use font-semibold */}
                <div className="text-center space-y-1 flex-grow mb-6">
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-neutral-900">
                        {member.name}
                    </h3>
                    {/* Blue accent for Role */}
                    <p className={`text-lg font-semibold text-${accentPrimary} pt-1`}>
                        {member.role}
                    </p>
                    <div className="mx-auto w-16 h-0.5 bg-neutral-200 mt-2 mb-2" />
                    {member.tag && (
                        <p className="text-sm text-neutral-500">
                            {member.tag}
                        </p>
                    )}
                </div>

                {/* Toggle Button (Blue accent) */}
                <button
                    onClick={toggleExpand}
                    className={`mt-6 w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all duration-200`}
                    title={isExpanded ? "Hide Links" : "Show Profile Links"}
                >
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5.121 17.804A13.934 13.934 0 0012 21c2.327 0 4.512-.646 6.357-1.797M20 10V7a1 1 0 00-1-1h-4.041A7.908 7.908 0 0012 4a7.908 7.908 0 00-2.959.689M12 16a4 4 0 100-8 4 4 0 000 8zM17 17l4 4m0-4l-4 4"
                        />
                    </svg>
                </button>
            </div>

            {/* Slide-Down Link Container */}
            <div
                className={`
                    w-full z-0
                    rounded-b-2xl shadow-xl border border-t-0 border-${accentLight} 
                    overflow-hidden transition-all duration-300
                    
                    ${isExpanded
                        ? 'max-h-96 opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0'}
                `}
                onClick={(e) => e.stopPropagation()}
            >
                <SocialLinks member={member} isFormal={false} />
            </div>
        </div>
    );
};

// --- Main Page Component ---
const Page = () => {
    return (
        <div
            id="team"
            className="min-h-screen w-full flex justify-center bg-neutral-50 py-16 md:py-24"
        >
            <div className="max-w-7xl mx-auto w-full px-4 md:px-10 lg:px-12">

                {/* Main Heading Section */}
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-sm tracking-[0.3em] uppercase text-blue-600 font-bold mb-3">
                        ACM–XIM Student Chapter
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
                        Meet the <span className="text-blue-600">Leadership</span>
                    </h1>
                    <p className="mt-5 text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        A dedicated group of faculty mentors, student leaders, and core contributors, committed to advancing the ACM–XIM community through collaboration and excellence.
                    </p>
                </div>

                {/* Sections Loop */}
                <div className="flex flex-col gap-20 md:gap-28">
                    {teamSections.map((section) => {
                        // Logic to determine grid layout based on section type
                        const isTwoMemberSection =
                            section.title === "Faculty Sponsor & Mentor" ||
                            section.title === "Supervisors";
                        const isOfficeBearers = section.title === "Office Bearers";
                        const isCoreTeam = section.title === "Core Team";
                        const isGeneralMemberSection = section.isGeneralMemberSection;

                        let gridClasses = "grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12";
                        let wrapperClasses = "";

                        if (isTwoMemberSection) {
                            // Center two-member sections
                            gridClasses = "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl w-full";
                            wrapperClasses = "flex justify-center";
                        } else if (isOfficeBearers) {
                            // Center three-member office bearer section
                            gridClasses = "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl w-full";
                            wrapperClasses = "flex justify-center";
                        } else if (isCoreTeam) {
                            // Standard full-width grid for core team
                            gridClasses = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12";
                            wrapperClasses = "";
                        }

                        // Handle the dedicated General Member Section (Sub-teams)
                        if (isGeneralMemberSection) {
                            return (
                                <section key={section.title} className="space-y-12">
                                    <div className="text-center">
                                        <div className="flex flex-col items-center justify-center">
                                            {/* Icon with Blue accent */}
                                            <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                                                <svg
                                                    className="h-6 w-6 text-blue-700"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M16 8a4 4 0 11-8 0 4 4 0 018 0zM12 20h10v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2h10z"
                                                    />
                                                </svg>
                                            </div>

                                            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
                                                {section.title}
                                            </h2>
                                            {section.subtitle && (
                                                <p className="text-base font-medium text-neutral-500 mt-2 max-w-xl">
                                                    {section.subtitle}
                                                </p>
                                            )}
                                            {section.accent && (
                                                <span className="mt-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-blue-300 text-blue-700 shadow-sm">
                                                    {section.accent}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Sub-Team Containers */}
                                    <div className="space-y-16">
                                        {section.subTeams.map((subTeam) => (
                                            <div key={subTeam.teamName} className="space-y-6">
                                                {/* Sub-team heading uses font-extrabold */}
                                                <h3 className={`text-2xl font-extrabold text-center border-b-2 pb-2 ${subTeam.colorClass}`}>
                                                    {subTeam.teamName}
                                                </h3>
                                                <p className="text-center text-neutral-600 max-w-3xl mx-auto">
                                                    {subTeam.description}
                                                </p>
                                                {/* Grid for General Member Cards (5 columns) */}
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                                    {subTeam.members.map((member) => (
                                                        <GeneralMemberCard
                                                            key={member.name}
                                                            member={{ ...member, role: subTeam.teamName.replace(" Team", "") }}
                                                            colorClass={subTeam.colorClass}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );
                        }

                        // Rendering for Faculty, Office Bearers, and Core Team
                        return (
                            <section key={section.title} className="space-y-12">

                                {/* Section Header (Centered) */}
                                <div className="text-center">
                                    <div className="flex flex-col items-center justify-center">

                                        <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                                            <svg
                                                className="h-6 w-6 text-blue-700"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35-.638.156-.477.307-.477.307l-1.07-1.07M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-5a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 010-2h2V8a1 1 0 011-1z"
                                                />
                                            </svg>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
                                            {section.title}
                                        </h2>
                                        {section.subtitle && (
                                            <p className="text-base font-medium text-neutral-500 mt-2 max-w-xl">
                                                {section.subtitle}
                                            </p>
                                        )}
                                        {section.accent && (
                                            <span className="mt-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-blue-300 text-blue-700 shadow-sm">
                                                {section.accent}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Cards Grid Container */}
                                <div className={wrapperClasses}>
                                    <div className={gridClasses}>
                                        {section.members.map((member) => (
                                            <TeamCard
                                                key={member.name + member.role}
                                                member={member}
                                                sectionTitle={section.title}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Page;