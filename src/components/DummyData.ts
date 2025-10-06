export interface Tool {
  id: number;
  name: string;
  type: "frontend" | "backend";
  language?: string;
}

export const tools: Tool[] = [
  // Frontend
  { id: 1, name: "React", type: "frontend", language: "JavaScript/TypeScript" },
  {
    id: 2,
    name: "Next.js",
    type: "frontend",
    language: "JavaScript/TypeScript",
  },
  { id: 3, name: "Laravel", type: "frontend", language: "PHP" },
  { id: 4, name: "Angular", type: "frontend", language: "TypeScript" },

  // Backend
  { id: 5, name: "Node.js", type: "backend", language: "JavaScript" },
  { id: 6, name: ".NET", type: "backend", language: "C#" },
  // { id: 7, name: "Spring Boot", type: "backend", language: "Java" },
  // { id: 8, name: "Express.js", type: "backend", language: "JavaScript" },
  // { id: 9, name: "Django", type: "backend", language: "Python" },
  // { id: 10, name: "Ruby on Rails", type: "backend", language: "Ruby" },
];
