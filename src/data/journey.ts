export type JourneyEntry = {
  date: string;
  title: string;
  organization: string;
  description: string;
  image?: string;
};

export const journey: JourneyEntry[] = [
  {
    date: "Nov 2024 — Present",
    title: "Teaching Assistant",
    organization: "Tanta University",
    description:
      "Back to academia, I returned to Tanta University as a Teaching Assistant, where I led lab sessions for 30+ students in multiple courses such as Distributed Systems, Microprocessors and more. In addition, I hold 1:1 mentorships with some students to help them build their coding careers.",
    image: "tanta-university.jpg",
  },
  {
    date: "Jun 2025 - Nov 2025",
    title: "Cybersecurity Fellow",
    organization: "Correlation One Cyber Advance for Women in MENA",
    description:
      "I was one of the 4% of women selected for the programme, completing a competitive 22-week applied cybersecurity training with honours. I built expertise in network security architecture, threat modelling, and enterprise risk management, applying it across 16 labs and 17 real-world case studies covering digital forensics, MITRE ATT&CK threat analysis, and compliance frameworks like GDPR and NIST. I also earned my CompTIA Security+ certification along the way.",
    image: "correlation-one.jpg",
  },
  {
    date: "Jun 2025 - Sep 2025",
    title: "LFX Mentee at Project Antrea",
    organization: "Cloud Native Computing Foundation",
    description:
      "I was selected among the 8% applicants worldwide for the summer semester. I migrated dependency management from Dependabot to Renovate across Antrea repositories, automating security updates for 3 active releases and reducing manual update efforts by approximately 70%.",
  },
  {
    date: "Aug 2023 — Nov 2024",
    title: "Site Reliability Engineer",
    organization: "Pulse By Solutions (Previously Giza Systems)",
    description:
      "After graduating, I kicked off my career with Giza Systems, where I worked on multiple projects for Saudi Arabia. I was responsible for designing and deploying the Kubernetes environments. In addition, I ensured the security and reliability of the systems.",
    image: "giza-systems.jpg",
  },
  {
    date: "Aug 2022 - Sep 2022",
    title: "Summer Academy Intern",
    organization: "Dell Technologies",
    description:
      "I was the 1st student from Tanta University to be selected for Dell Technologies, where I collaborated with peers from different universities to deliver a solution that would help ambulances arrive faster and thus save more lives.",
    image: "dell-technologies.jpeg",
  },
];
