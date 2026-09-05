import { useEffect, useState } from "react";
import myPhoto from './assets/mahsh.png';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNode, 
  FaPython, 
  FaGitAlt, 
  FaGithub 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiPostman 
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact Us" },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "React.js", icon: FaReact, color: "text-cyan-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNode, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
     {name:"JWT",icon:SiExpress,color:"text-gray-400"},
     {name:"REST API",icon:SiExpress,color:"text-gray-400"},
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MYSQL", icon: SiMysql, color: "text-blue-600" },
      { name: "MongoDB Atlas", icon: SiMongodb, color: "text-green-500" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
      { name: "VS Code", icon: VscCode, color: "text-blue-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ],
  },
];

const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "MERN", label: "Stack Expert" },
  { value: "Always", label: "Continuous Learner" },
];

const projects = [
  {
    id: 1,
    title: "SkyElite Flight Booking System",
    description: "Full-stack MERN application with multi-role authentication, flight search, seat selection, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    gradient: "from-cyan-500/20 via-blue-500/10 to-sky-500/20",
    icon: "✈️",
    features: ["Multi-role Auth", "Seat Selection", "Payment Gateway", "Booking History"],
    liveLink: "https://flight-booking-reservation-system-2.vercel.app",
    githubLink: "https://github.com/waranm408-prog/Flight-Booking-Reservation-system.git"
  },
  {
    id: 2,
    title: "Priya-Textils E-commerce website",
    description: "Modern e-commerce website with product catalog, shopping cart, and checkout functionalityand admin page and paymentgetway.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "FullStack",
    gradient: "from-pink-500/20 via-rose-500/10 to-red-500/20",
    icon: "🛒",
    features: ["Product Catalog", "Shopping Cart", "Checkout", "User Reviews"],
    liveLink: "https://priya-textiles.vercel.app",
    githubLink: "https://github.com/waranm408-prog/Priya-E-com.git"
  },
  {
    id: 3,
    title: "AI Job Matchmaking Portal",
    description: "MERN recruitment platform with AI-powered job recommendations, resume analysis, and analytics dashboard and admin page and HR Page.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AI"],
    category: "Full Stack",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    icon: "🤖",
    features: ["AI Recommendations", "Resume Analysis", "Dashboard", "Analytics"],
    liveLink: "https://ai-job-portal-2eju-one.vercel.app",
    githubLink: "https://github.com/waranm408-prog/Ai-job-portal.git"
  },
  {
    id: 4,
    title: "Smart Expense Tracker",
    description: "Responsive expense management application with category tracking, analytics dashboard, and data visualization.",
    technologies: ["React", "Tailwind CSS", "Chart.js"],
    category: "Frontend",
    gradient: "from-green-500/20 via-emerald-500/10 to-teal-500/20",
    icon: "💰",
    features: ["Category Tracking", "Analytics", "CRUD Operations", "Visualization"],
    liveLink: "https://smart-expense-smt.netlify.app",
    githubLink: "https://github.com/waranm408-prog/smart-Expense-Tracker.git"
  },
  {
    id: 5,
    title: "Notes Management App",
    description: "Note-taking application with secure authentication and CRUD functionality for creating and organizing personal notes.",
    technologies: ["React", "Tailwind CSS", "Local Storage"],
    category: "Frontend",
    gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    icon: "📝",
    features: ["CRUD Operations", "Authentication", "Responsive Design", "Note Organization"],
    liveLink: "https://note-appdemo.netlify.app",
    githubLink: "https://github.com/waranm408-prog/Note-App"
  },
  
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio with modern glassmorphism design, smooth animations, and responsive layout.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    gradient: "from-indigo-500/20 via-blue-500/10 to-cyan-500/20",
    icon: "🎨",
    features: ["Glassmorphism", "Animations", "Responsive", "Modern UI"],
    liveLink: "https://mahesh-portfolio-dflw-pi.vercel.app",
    githubLink: "https://github.com/waranm408-prog/mahesh-Portfolio.git"
  }
];

const certificates = [
  {
    title: "Full Stack Development(MERN)",
    org: "Internship certificate for NoviTech R&D Private Limited",
    date: "feb-2026",
    url: "MERN.pdf",
    image: "MERN.pdf", // PDF preview
    bgGradient: "from-cyan-500/20 via-sky-500/10 to-violet-500/20"
  },
  {
    title: "Ui/UX Design",
    org: "intership certificate for NoviTech RR&D Private Limited",
    date: "mar 2026",
    url: "UI.pdf",
    image: "UI.pdf", // PDF preview
    bgGradient: "from-violet-500/20 via-purple-500/10 to-pink-500/20"
  },
  {
    title:
      '13th National Conference on "The Agentic Turn:New Era of Artificial Intelligence"',
    org: "AI Society",
    date: "feb 2026",
    url: "sk.pdf",
    image: "sk.pdf", // PDF preview
    bgGradient: "from-green-500/20 via-emerald-500/10 to-teal-500/20"
  },
   {
    title:
      "IT-M pravartak Certified Full Stack Development Course With Al Tools",
    org: "AI Society",
    date: "Mar 2026",
    url: "GuviCertification.pdf",
    image: "full.png", // PDF preview
    bgGradient: "from-green-500/20 via-emerald-500/10 to-teal-500/20"
  },
  {
    title:
      "JS Basics Of Full Stack Development ",
    org: "AI Society",
    date: "Mar 2026",
    url: "js.pdf",
    image: "full.png", // PDF preview
    bgGradient: "from-green-500/20 via-emerald-500/10 to-teal-500/20"
  },
  {
    title:
      "ReactJS of Full stackDevelopment  ",
    org: "AI Society",
    date: "Mar 2026",
    url: "React.pdf",
    image: "", // PDF preview
    bgGradient: "from-green-500/20 via-emerald-500/10 to-teal-500/20"
  },
];

const timeline = [
  
  
{
    title: "Internship Experience(UI/UX Design)",
    tool: "2026 (1-month)",
    description:
      "NoviTech R&D Private Limited working on UI/UX Design, component architecture and responsive product releases.Designed responsive layouts, wireframes, and reusable UI components for modern web products.",
  },
  {
   title: "Internship Experience (fullstack development)",
    tool: "2026 (1-month)",
    description:
      "NoviTech R&D Private Limited on MERN Full Stack Development improvements, component architecture and responsive product releases.Designed and developed responsive user interfaces using React.js, TypeScript, and Tailwind CSS.",
  },

  
];

const typePhrases = [
  "React.js Developer",
  "Node.js Developer",
  "MongoDB Enthusiast",
  "Tailwind CSS Designer",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 24);

      const nextSection = navLinks.find((link) => {
        const element = document.getElementById(link.id);
        if (!element) return false;
        const top = element.getBoundingClientRect().top;
        return top <= 120 && top + element.clientHeight > 120;
      });

      if (nextSection) {
        setActiveSection(nextSection.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let charIndex = 0;
    const phrase = typePhrases[phraseIndex];
    const typeInterval = setInterval(() => {
      if (charIndex <= phrase.length) {
        setTypedText(phrase.slice(0, charIndex));
        charIndex += 1;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTypedText("");
          setPhraseIndex((value) => (value + 1) % typePhrases.length);
        }, 1400);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [phraseIndex]);

  useEffect(() => {
    // prevent background scroll when mobile menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="relative overflow-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_20%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/85 backdrop-blur-xl shadow-xl shadow-slate-950/40 border-b border-white/10" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="font-semibold text-white">
            <span className="text-cyan-300"></span>R
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition relative text-sm font-medium hover:text-cyan-200 ${activeSection === link.id ? "text-cyan-100" : "text-slate-300"}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-full bg-cyan-400 transition-all duration-300 ${activeSection === link.id ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="mahesh344.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 via-sky-500 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/40"
            >
              <span className="text-lg">⤓</span>
              Resume
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-100 shadow-xl shadow-slate-950/30 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{menuOpen ? "x" : "☰"}</span>
          </button>
        </div>

        <div
          className={`md:hidden fixed inset-0 z-50 transition-transform duration-300 transform ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
        >
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
          <nav className="relative z-50 flex min-h-full w-full flex-col items-center justify-start gap-6 overflow-y-auto bg-slate-950/95 px-8 py-10 text-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="w-full max-w-xl rounded-3xl px-6 py-5 text-lg font-semibold text-slate-100 transition hover:bg-slate-800/60"
              >
                {link.label}
              </a>
            ))}

            <a
              href="mahesh344.pdf"
              download
              className="mt-4 inline-flex w-full max-w-xl items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-500 via-sky-500 to-violet-500 px-6 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20"
            >
              Download Resume
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/70 text-2xl text-white"
              aria-label="Close menu"
            >
              x
            </button>
          </nav>
        </div>
      </header>

      <main className="relative overflow-hidden px-6 pb-24 pt-28 sm:px-8 lg:px-12">
        <section
          id="home"
          className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col justify-center gap-10 lg:flex-row lg:items-center lg:gap-16"
        >
          <div className="relative max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_40px_rgba(56,189,248,0.08)] backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              MERN Portfolio
            </div>
            <div className="space-y-4">
              <p className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                Hi, I&apos;m{" "}
                <span className="bg-linear-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">
                  Mahesh Waran R
                </span>
              </p>
              <p className="text-xl font-medium text-slate-300 sm:text-2xl">
                MERN Stack Developer & Frontend UI Designer
              </p>
              <div className="flex flex-wrap gap-3 text-lg text-slate-200">
                <span className="rounded-full bg-white/5 px-4 py-2 text-cyan-200 shadow-[inset_0_0_1px_rgba(255,255,255,0.08)]">
                  Animated typing:
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-cyan-300 shadow-lg shadow-cyan-500/10">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300" />
                  {typedText || "Crafting modern UI experiences..."}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mahesh344.pdf"
                download
                className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-500 via-sky-500 to-violet-500 px-6 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg text-white transition-all duration-300 group-hover:scale-110">
                  ⤓
                </span>
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
              >
                📩 Contact Me
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-3xl border border-white/10 p-6 shadow-xl shadow-cyan-500/10 transition hover:-translate-y-1 hover:shadow-cyan-500/20"
                >
                  <p className="text-3xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex min-h-105 w-full max-w-130 items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-2xl sm:min-h-125 sm:max-w-150">
            <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-cyan-400/20 via-sky-400/10 to-violet-500/15 blur-2xl" />
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 rounded-4xl bg-slate-950/60 p-6 text-center shadow-inner shadow-slate-950/20">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-cyan-300/20 bg-slate-900 shadow-[0_0_80px_rgba(56,189,248,0.15)]">
                <img
                  src={myPhoto}
                  alt="Mahesh Waran"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-cyan-300/40 blur-sm" />
              </div>
              <div className="space-y-2 text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                 MERN portfolio
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  Modern UI & MERN
                </h2>
                <p className="max-w-xs text-sm leading-6 text-slate-300">
                  Designing immersive developer experiences with glassmorphism,
                  gradients, and motion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-container mt-20 scroll-mt-24">
          <div className="section-header">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              About
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
              Professional Introduction
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.8fr]">
            <div className="space-y-6">
              <div className="glass-card rounded-4xl p-8">
                <p className="text-lg leading-8 text-slate-300">
                  I'm an MCA graduate and a MERN Stack Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into real-world digital solutions using React, Node.js, MongoDB, and Express.js.

                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="glass-card rounded-3xl border border-white/10 p-6 text-center"
                  >
                    <p className="text-3xl font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-4xl border border-white/10 p-8 text-slate-200 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                What I do
              </p>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="rounded-3xl bg-slate-950/70 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                  Create responsive UIs with modern React patterns.
                </li>
                <li className="rounded-3xl bg-slate-950/70 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                  Build backend APIs with Node.js, Express and MongoDB.
                </li>
                <li className="rounded-3xl bg-slate-950/70 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                  Design polished interfaces with Tailwind, motion, and
                  glassmorphism.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section-container scroll-mt-24">
          <div className="section-header">
            <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Skills
            </span>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
              Technical Expertise
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="glass-card rounded-4xl border border-white/10 p-8 shadow-xl shadow-slate-950/10"
              >
                <h3 className="mb-6 text-2xl font-semibold text-white">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-[inset_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:bg-cyan-500/15 hover:text-cyan-100 hover:shadow-cyan-500/20 hover:scale-105"
                      >
                        <Icon className={`text-lg ${skill.color}`} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section-container scroll-mt-24">
          <div className="section-header">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 ">
              Experience
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl ">
                Internship Experience
            </h2>
          </div>
          <div className="relative mt-12 space-y-10 ">
            <div className="absolute left-5 top-6 hidden h-full w-px bg-cyan-500/20 md:block" />
            {timeline.map((entry, index) => (
              <div
                key={entry.title}
                className="relative flex flex-col gap-4 pl-8 md:flex-row md:items-start md:gap-6"
              >
                <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950/80 shadow-lg shadow-cyan-500/10">
                  <span className="text-cyan-300">{index + 1}</span>
                </div>
                <div className="glass-card rounded-4xl border border-white/10 p-8 shadow-xl shadow-slate-950/10">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-2xl font-semibold text-white">
                      {entry.title}
                    </h3>
                    <span className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-cyan-200">
                      {entry.tool}
                    </span>
                  </div>
                  <p className="mt-4 text-slate-300">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-container scroll-mt-24">
          <div className="section-header">
            <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
              Featured Work
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Explore my collection of full-stack and frontend projects built with modern technologies
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass-card group overflow-hidden rounded-4xl border border-white/10 shadow-xl shadow-slate-950/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20"
              >
                {/* Project Header with Icon */}
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />
                  <div className="relative z-10 text-center">
                    <div className="mb-4 text-6xl">{project.icon}</div>
                    <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-cyan-200 backdrop-blur-xl border border-white/20">
                      {project.category}
                    </span>
                  </div>
                  {/* Decorative overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 min-h-[3.5rem]">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-4 line-clamp-3 min-h-[4.5rem]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-cyan-300 mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-cyan-300 mb-2">Key Features</p>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <span className="text-cyan-400">✓</span>
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Live
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certificates" className="section-container scroll-mt-24">
          <div className="section-header">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Certificates
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
              Verified Accomplishments
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <div
                key={certificate.title}
                className="glass-card group overflow-hidden rounded-4xl border border-white/10 shadow-xl shadow-slate-950/15 transition-transform duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20"
              >
                {/* Certificate Image Preview */}
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${certificate.bgGradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm">
                    <div className="text-center p-6">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 mb-3 backdrop-blur-xl border border-white/20">
                        <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-200 font-semibold">
                        Certificate
                      </p>
                      <p className="text-sm text-slate-300 mt-1">
                        Click to view
                      </p>
                    </div>
                  </div>
                  {/* Decorative overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
                      {certificate.org}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                    {certificate.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {certificate.date}
                  </p>

                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-container scroll-mt-24">
          <div className="section-header">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 ">
               Contact Us
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl ">
              Let&apos;s create something together
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="glass-card rounded-4xl border border-white/10 p-8 shadow-xl shadow-slate-950/10">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Name</span>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Your Name"
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Email</span>
                  <input
                    className="input-field"
                    type="email"
                    placeholder="you@mail.com"
                  />
                </label>
              </div>
              <label className="mt-4 space-y-2 text-sm text-slate-300">
                <span>Subject</span>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Project Inquiry"
                />
              </label>
              <label className="mt-4 space-y-2 text-sm text-slate-300">
                <span>Message</span>
                <textarea
                  className="input-field min-h-35 resize-none"
                  placeholder="Tell me about your project..."
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-500 via-sky-500 to-violet-500 px-6 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>

            <div className="glass-card rounded-4xl border border-white/10 p-8 shadow-xl shadow-slate-950/10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Contact Information
              </p>
              <div className="mt-8 space-y-6 text-slate-200">
                <div className="rounded-3xl bg-slate-950/70 p-5 shadow-[inset_0_0_1px_rgba(255,255,255,0.05)]">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    maheswaranr2004@gmail.com
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-5 shadow-[inset_0_0_1px_rgba(255,255,255,0.05)]">
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    +91 9080602393
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-5 shadow-[inset_0_0_1px_rgba(255,255,255,0.05)]">
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    madurai, India
                  </p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <a
                  className="flex items-center gap-3 rounded-3xl bg-slate-950/70 px-5 py-4 text-slate-100 transition hover:bg-slate-900/80"
                  href="https://github.com/waranm408-prog"
                >
                  <span className="text-cyan-300">GitHub</span>
                  <span className="text-slate-400">https://github.com/waranm408-prog</span>
                </a>
                <a
                  className="flex items-center gap-3 rounded-3xl bg-slate-950/70 px-5 py-4 text-slate-100 transition hover:bg-slate-900/80"
                  href="https://www.linkedin.com/in/mahesh-waran-r-5a5a6834b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  <span className="text-cyan-300">LinkedIn</span>
                  <span className="text-slate-400">https://www.linkedin.com/in/mahesh-waran</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-8 text-slate-400 backdrop-blur-xl sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p>Copyright © 2026 Mahesh Waran. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a href="https://github.com/waranm408-prog" className="transition hover:text-cyan-200">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mahesh-waran-r-5a5a6834b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="transition hover:text-cyan-200">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-cyan-200">
              Twitter
            </a>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-900/90 text-cyan-200 shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-500/15"
      >
        ↑
      </a>
    </div>
  );
}

export default App;
