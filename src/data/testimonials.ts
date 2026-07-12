export type Testimonial = {
  name: string;
  role: string;
  relationship: string;
  quote: string;
  linkedinUrl?: string;
  // Save the person's photo yourself (with permission) to
  // public/images/testimonials/<file>.jpg and reference it here.
  // LinkedIn can't be scraped for photos, so this has to be manual.
  photo?: string;
};

// Placeholder entries — replace with real testimonials once you've collected them.
export const testimonials: Testimonial[] = [
  {
    name: "Imene Allouche",
    role: "Cybersecurity Lead Instructor",
    relationship: "Mentor",
    quote:
      "Ghadeer showed strong initiative and a sharp analytical mind: she grasped core security concepts quickly, applied them effectively in hands-on labs, and consistently produced concise, well-organized deliverables. She explains complex ideas clearly, asks insightful questions that improve team outcomes, and collaborates reliably under pressure.",
    linkedinUrl: "https://www.linkedin.com/in/imene-allouche-045b21226/",
  },
  {
    name: "Mahmoud Shaheen",
    role: "Software Architect",
    relationship: "Colleague",
    quote:
      "She demonstrated a proactive approach to problem-solving, consistently improving workflows and ensuring smooth deployments. Ghadeer’s collaborative spirit, attention to detail, and commitment to quality made her an invaluable member of the team.",
    linkedinUrl: "https://www.linkedin.com/in/mahmoudmshaheen/",
  },
  {
    name: "Mohamed Essam",
    role: "Senior DevOps Engineer",
    relationship: "Colleague",
    quote:
      "One of the qualities I admire most in Ghadeer is her ability to approach complex challenges with clarity and focus. She’s a problem-solver at heart, consistently providing thoughtful insights and solutions that drove our project forward. Her attention to detail and proactive attitude ensured that our infrastructure was both reliable and efficient, and her work ethic inspired me personally.",
    linkedinUrl: "https://www.linkedin.com/in/mahmoudmshaheen/",
  },
  {
    name: "Kirmina Anis",
    role: "Student",
    relationship: "Mentee",
    quote:
      "You were really supportive and helpful throughout the whole experience. You always gave me advice, listened to me, encouraged me, and made time whenever I needed help. Also, whenever I needed study materials or resources, you always shared useful sources with me. Thank you so much for all your help, support, and encouragement.",
    linkedinUrl: "https://www.linkedin.com/in/kirmina-anis-177448323/",
  },
  {
    name: "Yusuf Shoman",
    role: "Student",
    relationship: "Mentee",
    quote:
      "The mentorship was helpful and supportive. One-on-one explanations made difficult topics easier to understand, and the guidance was appreciated.",
    linkedinUrl: "https://www.linkedin.com/in/yusufshoman-cpe42/",
  },
];
