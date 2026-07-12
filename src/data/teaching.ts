export type Course = {
  name: string;
  professor: string;
  period: string;
  screenshots?: string[];
};

export const courses: Course[] = [
  {
    name: "Microprocessors and Programmable Controllers",
    professor: "Prof. Mai Zaki",
    period: "Spring 2026",
    screenshots: [
      "microprocessors-01.jpg",
      "microprocessors-02.jpg",
      "microprocessors-03.jpg",
      "microprocessors-04.jpg",
    ],
  },
  {
    name: "Electrical Circuits andd Their Transient Properties",
    professor: "Prof. Asmaa Hagar",
    period: "Autumn 2025",
    screenshots: ["circuits-01.jpg", "circuits-02.jpg"],
  },
];

export type StudentFeedback = {
  quote: string;
  studentName: string;
  course: string;
};

export const studentFeedback: StudentFeedback[] = [
  {
    quote:
      "You are honestly one of the best TAs I’ve had. You’re among the few who make sure we fully grasp the topics before moving on and also from the fewest that makes the practical side of the course really practical not just showing us how to code but making sure that we are doing it right. Thank you for your effort throughout the semester.",
    studentName: "Student, Artificial Intelligence Department",
    course: "Microprocessors and Programmable Controllers",
  },
  {
    quote:
      "Thank you for your clear explanation and support .The sessions were very helpful and made the topics easy to understand.",
    studentName: "Student, Computer Engineering Department",
    course: "Electrical Circuits andd Their Transient Properties",
  },
];
