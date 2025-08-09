import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ThemeToggle from "@/components/ThemeToggle";

const skills = {
  languages: [
    "Python",
    "TypeScript",
    "Java",
    "C#"
  ],
  frontend: [
    "React",
    "CSS",
    "Tailwind CSS"
  ],
  backend: [
    "Node.js",
    "Express.js",
    ".NET",
    "REST APIs"
  ],
  databases: [
    "PostgreSQL",
    "SQL",
    "KQL",
    "Azure Cosmos DB"
  ],
  devtools: [
    "Git",
    "GitHub Actions",
    "Docker",
    "Kubernetes"
  ],
  cloud: [
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "Azure AI Foundry",
    "Azure DevOps Services"
  ],
  operatingSystems: [
    "Linux",
    "Windows"
  ],
  softwareEngineering: [
    "Algorithms",
    "Data Structures",
    "Data Analysis",
    "Automation",
    "Machine Learning"
  ],
  softSkills: [
    "Leadership",
    "Strategic Planning",
    "Collaboration",
    "Problem-Solving"
  ]
};

const projects = [
  {
    title: "Creating Trustworthy and Ethical AI",
    image: "/images/project-ethical-ai.png",
    description:
      "Interactive web application to improve AI model compliance with the EU AI Act. Includes a dynamic Knowledge Graph of regulations, model documentation uploads, compliance scoring, and tailored recommendations.",
    tech: ["JavaScript", "HTML", "Python", "NLP", "Docker"],
    live: "",
    source: "https://github.com/faitholopade/SWENG-Ethical-AI"
  },
  {
    title: "Study Bot",
    image: "/images/project-studybot.png",
    description:
      "Educational application that combines academic module selection with GPT to generate customised multiple-choice quizzes, supporting personalised learning and revision.",
    tech: ["Java", "JavaScript", "CSS", "HTML"],
    live: "",
    source: "https://github.com/faitholopade/SWENG-Study-Bot"
  },
  {
    title: "Named Entity Recognition Model for Customer Support",
    image: "/images/project-ner.png",
    description:
      "Fine-tuned NER model to process Dell customer support logs, extracting key entities such as personal identifiers, technical issues, and hardware specifications for improved service insights.",
    tech: ["Python", "NLP", "Docker", "spaCy", "Flask"],
    live: "",
    source: "https://github.com/faitholopade/SWENG-Named-Entity-Recognition-Model"
  },
  {
    title: "Parallel Multi-Kernel Convolution",
    image: "/images/project-parallel-convolution.png",
    description:
      "Optimised multichannel, multikernel convolution routine in C for CNNs, leveraging OpenMP and SSE4 vector instructions for high-performance image processing on multi-core architectures.",
    tech: ["C", "OpenMP", "SSE4", "Parallel Computing"],
    live: "",
    source: "https://github.com/faitholopade/Parallel-Multi-Kernel-Convolution"
  },
  {
    title: "Zebra Puzzle Solver",
    image: "/images/project-zebra.png",
    description:
      "Constraint programming solution to the classic Zebra puzzle, demonstrating logical reasoning, constraint satisfaction techniques, and Java-based solver implementation.",
    tech: ["Java", "Constraint Programming"],
    live: "",
    source: "https://github.com/faitholopade/Zebra-Puzzle-Solver"
  },
  {
    title: "College Academic Projects",
    image: "/images/project-college.png",
    description:
      "Comprehensive repository of academic work during my BA & MSc in Computer Science at Trinity College Dublin.",
    tech: ["Java", "Python", "C++", "React", "Spring Boot", "Docker"],
    live: "",
    source: "https://github.com/faitholopade/College"
  }
];


const Index = () => {
  const { toast } = useToast();
  // SEO structured data
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Faith Olopade",
    jobTitle: "Software Engineer",
    url: typeof window !== "undefined" ? window.location.origin : "",
    email: "mailto:olopade.faith1@gmail.com",
  }), []);

  // Signature spotlight pointer tracking
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--spot-x", `${x}%`);
      document.documentElement.style.setProperty("--spot-y", `${y}%`);
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="container py-6">
        <nav className="flex items-center justify-between">
          <a href="#" className="font-display text-xl brand-glow">FO</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="bg-background text-foreground">
        <section className="spotlight spotlight-grid">
          <div className="container min-h-[60vh] grid items-center py-16">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-sm text-muted-foreground mb-2">Hello I'm</p>
              <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-3">
                Faith Olopade
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-4">
                Full Stack Developer.
              </h2>
              <p className="text-muted-foreground mb-8">
                MSc Computer Science student at Trinity College Dublin with experience in full-stack development, AI, data analytics, and automation. I build thoughtful, scalable solutions that blend functionality with long-term impact.
              </p>
              <div className="flex gap-3">
                <a href="#projects">
                  <Button variant="hero" size="lg">View Projects</Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg">Get In Touch</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container py-16">
          <header className="mb-8">
            <h3 className="font-display text-3xl font-bold">Projects</h3>
            <p className="text-muted-foreground mt-1">A selection of projects showcasing my work in software engineering, AI, and data-driven solutions.</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.title} className="border glass-card hover-scale transition-shadow hover:shadow-xl">
                <div className="p-4 space-y-3">
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href={p.source} target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm">Source</Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="container py-16">
          <header className="mb-8">
            <h3 className="font-display text-3xl font-bold">About Me</h3>
          </header>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <img
              src="/images/portrait.jpg"
              alt="Portrait of Faith Olopade, Full Stack Developer"
              loading="lazy"
              className="rounded-lg border object-cover w-full h-64 md:h-full"
            />
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground">
                I’m a Computer Science MSc student at Trinity College Dublin, driven by a passion for learning, problem-solving, and exploring how technology can address real-world challenges. My interests include software engineering, artificial intelligence, data, cybersecurity, and the ethical and societal impacts of emerging technologies.
              </p>
              <p className="text-muted-foreground">
                I have over two years of technical experience through internships with Microsoft and Intel, spanning AI, ML, verification, automation, and data tooling. I enjoy research, development, and building practical, impactful solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="container py-16">
          <header className="mb-8">
            <h3 className="font-display text-3xl font-bold">Technical Skills</h3>
          </header>
          <div className="grid md:grid-cols-2 gap-10">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h4 className="font-semibold mb-3">
  {group.replace(/([a-z])([A-Z])/g, "$1 $2")} </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container py-16">
          <header className="mb-6">
            <h3 className="font-display text-3xl font-bold">Get in Touch</h3>
            <p className="text-muted-foreground mt-1">Open to full-time roles, research collaborations, and opportunities to apply my skills to meaningful challenges.</p>
          </header>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:olopade.faith1@gmail.com">
              <Button size="lg" variant="hero" className="inline-flex items-center"><Mail />Email</Button>
            </a>
            <a href="https://github.com/faitholopade" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Button variant="soft"><Github />GitHub</Button>
            </a>
            <a href="https://www.linkedin.com/in/faitholopade" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Button variant="outline"><Linkedin />LinkedIn</Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="container py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Faith Olopade · Built with React & Tailwind
      </footer>
    </>
  );
};

export default Index;
