// 🌸 PORTFOLIO DATA - Edit this file to update your portfolio content! 🌸

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
  featured: boolean
}

export interface Skill {
  name: string
  level: number // 1-100
  category: "frontend" | "backend" | "design" | "tools" | "other"
}

// ✅ REPLACED BlogPost WITH Certificate
export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  image: string
  link: string
}
export interface Language {
  name: string
  level: "Native" | "Fluent" | "Intermediate" | "Beginner"
}
// ✨ PROJECTS
export const projects: Project[] = [
  {
    id: "1",
    title: "NexusJob – Job Finding & Learning Mobile App",
    description:
      "A complete UI/UX mobile application designed to help users find job opportunities, access courses, and connect with employers. The app features modern design principles and smooth user experience, created fully in Figma.",
    image: "/nexusjob.png",
    tags: ["UI/UX", "Figma", "Mobile App"],
    link: "https://www.figma.com/design/pwNMrTQuz4Gkt6Hz6HhjXZ/nexusjobs?m=auto&t=v0zYyiVoYnLUblba-6",
    featured: true
  },
  {
    id: "2",
    title: "E-commerce Management App ",
    description: "An all-in-one platform to manage products, orders, and deliveries efficiently for businesses and customers.",
    image: "/orders-mangement.png",
    tags: ["Design", "Figma", "UI/UX"],
    link:"https://www.figma.com/design/98uw0FmQ0d6bO2SII9itVM/Gestion-de-produit?node-id=0-1&t=jy7wXBDiamCQxWVl-1",
    featured: true
  },
  {
    id: "3",
    title: "Cute ",
    description: "An all-in-one platform to manage products, orders, and deliveries efficiently for businesses and customers.",
    image: "/orders-mangement.png",
    tags: ["Design", "Figma", "UI/UX"],
    link:"https://www.figma.com/design/98uw0FmQ0d6bO2SII9itVM/Gestion-de-produit?node-id=0-1&t=jy7wXBDiamCQxWVl-1",
    featured: true
  },
]

export const skills: Skill[] = [
  // 🌐 Développement Web
  { name: "HTML", level: 95, category: "web" },
  { name: "CSS", level: 90, category: "web" },
  { name: "JavaScript", level: 90, category: "web" },
  { name: "React.js", level: 80, category: "web" },
  { name: "PHP", level: 75, category: "web" },
  { name: "Node.js", level: 80, category: "web" },

  // 📱 Développement Mobile
  { name: "React Native", level: 65, category: "mobile" },
  { name: "Flutter", level: 60, category: "mobile" },
  { name: "Android (Java/Kotlin)", level: 85, category: "mobile" },
  { name: "UI Optimization", level: 80, category: "mobile" },

  // 💻 Langages de programmation
  { name: "Java", level: 85, category: "programming" },
  { name: "Kotlin", level: 75, category: "programming" },
  { name: "Python", level: 90, category: "programming" },
  { name: "C", level: 80, category: "programming" },
  { name: "C++", level: 75, category: "programming" },
  { name: "Dart", level: 70, category: "programming" },
  { name: "SQL", level: 85, category: "programming" },
  { name: "JSON", level: 90, category: "programming" },
  { name: "XML", level: 85, category: "programming" },

  // 🗄️ Backend & Bases de Données
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Firebase", level: 75, category: "backend" },
  { name: "MySQL", level: 85, category: "backend" },
  { name: "SQLite", level: 80, category: "backend" },
  { name: "Microsoft Access", level: 70, category: "backend" },
  { name: "Neo4j", level: 65, category: "backend" },

  // 🔌 Systèmes embarqués & IoT
  { name: "Arduino", level: 80, category: "iot" },
  { name: "ESP32", level: 85, category: "iot" },
  { name: "Raspberry Pi", level: 60, category: "iot" },
  { name: "Sensors & Actuators", level: 55, category: "iot" },
  { name: "ThingSpeak", level: 75, category: "iot" },
  { name: "Cloud IoT Platforms", level: 70, category: "iot" },
  { name: "Xilinx FPGA", level: 65, category: "iot" },
  { name: "Vivado", level: 65, category: "iot" },

  // 📊 Big Data & Analytics
  { name: "Hadoop", level: 60, category: "bigdata" },
  { name: "Data Processing Fundamentals", level: 75, category: "bigdata" },

  // 🌐 Réseaux & Systèmes
  { name: "TCP/UDP Socket Programming", level: 50, category: "network" },
  { name: "CSMA/CD", level: 40, category: "network" },
  { name: "Linux (Basic Commands)", level: 75, category: "network" },
  { name: "Virtualization", level: 70, category: "network" },

  // 🛠️ Outils
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
  { name: "Android Studio", level: 90, category: "tools" },
  { name: "Postman", level: 35, category: "tools" },
  { name: "Figma", level: 90, category: "tools" },
  { name: "Canva", level: 90, category: "tools" },
  { name: "PowerPoint", level: 95, category: "tools" },

  // 🎨 UI/UX Design
  { name: "Wireframing", level: 90, category: "design" },
  { name: "Prototyping", level: 90, category: "design" },
  { name: "Color Theory", level: 85, category: "design" },
  { name: "Layout Composition", level: 85, category: "design" },
  { name: "User Flow Mapping", level: 90, category: "design" },
  { name: "Accessible Design", level: 80, category: "design" },
  { name: "Responsive Design", level: 85, category: "design" },

  // 💎 Soft Skills
  { name: "Problem Solving", level: 95, category: "soft" },
  { name: "Teamwork", level: 95, category: "soft" },
  { name: "Creativity", level: 90, category: "soft" },
  { name: "Self-learning", level: 95, category: "soft" },
  { name: "Time Management", level: 90, category: "soft" },
  { name: "Stress Management", level: 85, category: "soft" },
  { name: "Communication", level: 90, category: "soft" }
];

// ❌ REMOVE THIS EXTRA BRACKET
// ]

// 🏅 CERTIFICATES SECTION
export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Front End Development Libraries V8",
    issuer: "freeCodeCamp",
    date: "August 8, 2025",
    image: "/cert-fcc-frontend.png",
    link: "https://freecodecamp.org/certification/tasnimnakbi/front-end-development-libraries"
  },
  {
    id: "2",
    title: "Build a Free Website with WordPress",
    issuer: "Coursera",
    date: "July 14, 2025",
    image: "/cert-wordpress.jpeg",
    link: "https://coursera.org/verify/09RXW9XPFR7D"
  },
  {
    id: "3",
    title: "Google Ads for Beginners",
    issuer: "Coursera",
    date: "July 14, 2025",
    image: "/cert-google-ads.jpeg",
    link: "https://coursera.org/verify/DXTAGZMV9VGK"
  },
  {
    id: "4",
    title: "JavaScript Algorithms and Data Structures V7",
    issuer: "freeCodeCamp",
    date: "July 14, 2025",
    image: "/cert-fcc-js.png",
    link: "https://freecodecamp.org/certification/tasnimnakbi/javascript-algorithms-and-data-structures"
  },
  {
    id: "5",
    title: "Responsive Web Design V8",
    issuer: "freeCodeCamp",
    date: "July 10, 2025",
    image: "/cert-fcc-rwd.png",
    link: "https://freecodecamp.org/certification/tasnimnakbi/responsive-web-design"
  },
  {
    id: "6",
    title: "Use Canva to Design Digital Course Collateral",
    issuer: "Coursera",
    date: "July 14, 2025",
    image: "/cert-canva-design.jpeg",
    link: "https://coursera.org/verify/459HBRIUEMIV"
  },
]

// 🎀 PERSONAL INFO
export const personalInfo = {
  name: "Tasnim Nakbi",
  title: "Computer Systems Engineering Student | IoT & Embedded Systems Developer",
  bio: "I'm a Bachelor's student in Computer Systems Engineering specializing in IoT and Embedded Systems. I love creating smart, efficient, and creative systems where hardware and software work together seamlessly. Passionate about building real-world solutions, I enjoy designing intelligent architectures, optimizing performance, and bringing innovative ideas to life.",
  email: "tasnimnakbi321@gmail.com",
  phone: "+216 27 797 948",
  github: "https://github.com/tasnim-904",
  linkedin: "https://www.linkedin.com/in/tasnim-nakbi-6866482a7/",
  twitter: "https://x.com/NakbiTasnim",
  avatar: "/avatar.jpg",
}
// 🌍 LANGUAGES SECTION
export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Beginner" },
  { name: "Korean", level: "Beginner" }
];
