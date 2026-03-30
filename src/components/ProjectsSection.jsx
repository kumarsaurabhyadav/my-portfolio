import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MediMeets — Smart Health Consultation System",
    description:
      "Full-stack telehealth platform enabling secure video consultations and appointment scheduling with Clerk auth and Prisma + PostgreSQL.",
    image: "/projects/medimeets.png",
    tags: ["Next.js", "React.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    points: [
      "Secure video consultations + appointment scheduling flow",
      "Authentication with Clerk, data layer with Prisma + Postgres",
      "Reusable, responsive UI with Tailwind CSS",
    ],
    demoUrl: "https://medimeet-murex.vercel.app",
    githubUrl: null,
  },
  {
    id: 2,
    title: "Perplexity AI Clone",
    description:
      "AI-powered Q&A web app delivering citation-backed real-time answers with improved speed via caching and dynamic rendering.",
    image: "/projects/perplexity-ai.png",
    tags: ["Next.js", "React.js", "OpenAI API", "Tailwind CSS"],
    points: [
      "Citation-backed answers with a fast, clean UX",
      "Caching + dynamic rendering to reduce response time",
      "Prompting + context handling for better answer quality",
    ],
    demoUrl: "https://perplexity-ai-clone-4ymu8ux0b-kumar-saurabh-yadavs-projects.vercel.app",
    githubUrl: null,
  },
  {
    id: 3,
    title: "AI-Based Course Generator",
    description:
      "AI-driven learning platform generating personalized courses and quizzes with progress tracking and adaptive recommendations.",
    image: "/projects/coursegen.png",
    tags: ["React.js", "Next.js", "GPT API", "Tailwind CSS"],
    points: [
      "Personalized course + quiz generation using GPT models",
      "Progress tracking and adaptive learning recommendations",
      "Responsive UI built with Tailwind CSS",
    ],
    demoUrl: "https://online-ai-learning-platform.vercel.app",
    githubUrl: null,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="premium-surface premium-surface-hover card-hover text-left"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              </div>
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <ul className="mb-5 space-y-2 text-sm text-muted-foreground list-disc pl-5 marker:text-primary">
                  {project.points.map((pt) => (
                    <li key={`${project.id}-${pt}`}>{pt}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`Open demo: ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`Open GitHub: ${project.title}`}
                      >
                        <Github size={20} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/kumarsaurabhyadav"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};