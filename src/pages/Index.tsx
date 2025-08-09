import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
    "REST APIs"
  ],
  backend: [
    "Node.js",
    "Express.js",
    ".NET"
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
    "Vim"
  ],
  cloud: [
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "Azure AI Foundry",
    "Azure DevOps Services"
  ],
  operatingSystems: [
    "Linux"
  ],
  softwareEngineering: [
    "Algorithms",
    "Data Structures",
    "Data Analysis",
    "Automation"
  ]
};

const projects = [
  {
    title: "Creating Trustworthy and Ethical AI",
    image: "/images/project-ethical-ai.png",
    description:
      "Interactive web application to improve AI model compliance with the EU AI Act. Includes a dynamic Knowledge Graph of regulations, model documentation uploads, compliance scoring, and tailored recommendations.",
    tech: ["JavaScript", "HTML", "CSS", "Knowledge Graphs"],
    live: "",
    source: "https://github.com/faitholopade/SWENG-Ethical-AI"
  },
  {
    title: "Study Bot",
    image: "/images/project-studybot.png",
    description:
      "Educational application that combines academic module selection with GPT to generate customised multiple-choice quizzes, supporting personalised learning and revision.",
    tech: ["Java", "GPT API", "Swing GUI"],
    live: "",
    source: "https://github.com/faitholopade/SWENG-Study-Bot"
  },
  {
    title: "Named Entity Recognition Model for Customer Support",
    image: "/images/project-ner.png",
    description:
      "Fine-tuned NER model to process Dell customer support logs, extracting key entities such as personal identifiers, technical issues, and hardware specifications for improved service insights.",
    tech: ["Python", "spaCy", "Jupyter Notebook"],
    live: "",
    source: "https://github.com/faitholopade/SWENG-Named-Entity-Recognition-Model"
  },
  {
    title: "Parallel Multi-Kernel Convolution",
    image: "/images/project-parallel-convolution.png",
    description:
      "Optimised multichannel, multikernel convolution routine in C/C++ for CNNs, leveraging OpenMP and SSE4 vector instructions for high-performance image processing on multi-core architectures.",
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
      "Comprehensive repository of academic work covering compiler design, machine learning, NLP, digital logic design, computer graphics, microprocessor systems, statistical analysis, and distributed systems. Developed using languages such as Java, Python, C, C++, ARM Assembly, Verilog, VHDL, R, Haskell, and SQL, alongside frameworks including React, Spring Boot, OpenGL, Docker, and Maven.",
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
    jobTitle: "Full Stack Developer",
    url: typeof window !== "undefined" ? window.location.origin : "",
    email: "mailto:sshiponuddin22@gmail.com",
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

  // Keyboard shortcuts and copy email
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === "g") window.open("https://github.com/ssshiponu", "_blank");
      if (k === "l") window.open("https://www.linkedin.com/", "_blank");
      if (k === "e") {
        navigator.clipboard.writeText("sshiponuddin22@gmail.com");
        toast({ title: "Email copied", description: "sshiponuddin22@gmail.com copied to clipboard" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toast]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="container py-6">
        <nav className="flex items-center justify-between">
          <a href="#" className="font-display text-xl">FO</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="spotlight">
          <div className="container min-h-[60vh] grid items-center py-16">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-sm text-muted-foreground mb-2">Hello I'm</p>
              <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-3">
                Faith Olopade — Full Stack Developer
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-4">
                Full Stack Developer.
              </h2>
              <p className="text-muted-foreground mb-8">
                Modern custom web app and e-commerce development specialist.
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
            <p className="text-muted-foreground mt-1">Selected work I've shipped recently.</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.title} className="border hover-scale transition-shadow hover:shadow-xl">
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
                I’m Faith Olopade, a passionate full stack developer focused on building clean,
                scalable, and user-friendly web applications. Skilled in Python, Django,
                JavaScript, and Tailwind CSS, I enjoy creating both the backend logic and the
                frontend experience.
              </p>
              <p className="text-muted-foreground">
                Whether it’s developing e‑commerce solutions, chatbots, creative portfolio sites,
                or educational tools, I aim to blend functionality with thoughtful design.
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
                <h4 className="font-semibold mb-3 capitalize">{group}</h4>
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
            <p className="text-muted-foreground mt-1">I’m open to freelance, full‑time and collaboration opportunities.</p>
          </header>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:sshiponuddin22@gmail.com">
              <Button size="lg" variant="hero" className="inline-flex items-center"><Mail />Email</Button>
            </a>
            <Button
              variant="soft"
              onClick={() => {
                navigator.clipboard.writeText("sshiponuddin22@gmail.com");
                toast({ title: "Email copied", description: "sshiponuddin22@gmail.com copied to clipboard" });
              }}
            >
              Copy Email
            </Button>
            <a href="https://github.com/ssshiponu" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Button variant="soft"><Github />GitHub</Button>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Button variant="outline"><Linkedin />LinkedIn</Button>
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Shortcuts: press G for GitHub, L for LinkedIn, E to copy email.</p>
        </section>
      </main>

      <footer className="container py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Faith Olopade · Built with React & Tailwind
      </footer>
    </>
  );
};

export default Index;
