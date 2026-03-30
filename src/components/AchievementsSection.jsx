import { Award } from "lucide-react";

const achievements = [
  "Selected for HackShield CU Hackathon (Certificate).",
  "Recognized for strong academic performance and active participation in technical projects and hackathons.",
  "Built and shipped multiple full-stack projects (telehealth, citation-based Q&A, AI course generation) from idea to deployment.",
  "Consistently applied DSA + clean architecture practices to deliver maintainable, performance-focused UI.",
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Achievements <span className="text-primary"> & Highlights</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A few milestones from academics and hands-on work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a) => (
            <div
              key={a}
              className="premium-surface premium-surface-hover card-hover text-left p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 p-2 rounded-full bg-primary/10 shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </span>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

