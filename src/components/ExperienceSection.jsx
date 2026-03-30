import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "PolicyBazaar",
    role: "React Native Intern",
    location: "Gurugram, India",
    period: "August 2025 – March 2026",
    project: "DocPrime — AISHA (Smart Health Assistant)",
    highlights: [
      "Developed DocPrime’s AISHA module: an AI-assisted mobile experience for real-time vital monitoring using smartphone camera signals (rPPG/rBCG).",
      "Integrated backend REST APIs and refined signal-processing flow to improve reliability and accuracy of derived health insights.",
      "Shipped a responsive React Native UI and collaborated with clinicians to iterate on UX, edge cases, and usability.",
      "Implemented production-ready states (loading, permissions, errors) and optimized screens for smooth performance on mid-range devices.",
    ],
    stack: ["React Native", "REST APIs", "MediaPipe", "OpenCV"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Experience <span className="text-primary"> & Internship</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Industry experience building production-ready mobile and web
          experiences with a focus on performance and usability.
        </p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="premium-surface premium-surface-hover card-hover text-left p-6 md:p-8"
            >
              {/* subtle highlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              </div>

              <div className="relative flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 p-2 rounded-full bg-primary/10 shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                      {exp.role}{" "}
                      <span className="text-muted-foreground font-medium">
                        · {exp.company}
                      </span>
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-2 text-sm">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Project:</span>{" "}
                  {exp.project}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs tracking-wide uppercase text-muted-foreground">
                    Stack
                  </span>
                  {exp.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium border border-border/60 rounded-full bg-secondary/70 text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-medium text-foreground mb-3">
                  What I worked on
                </div>
                <ul className="list-disc pl-5 space-y-2.5 text-muted-foreground marker:text-primary">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

