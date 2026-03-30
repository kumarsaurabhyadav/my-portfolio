import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "C++", level: 85, category: "programming" },
  { name: "JavaScript", level: 88, category: "programming" },
  { name: "SQL", level: 80, category: "programming" },

  // Web Technologies
  { name: "HTML5", level: 90, category: "web" },
  { name: "CSS3", level: 85, category: "web" },
  { name: "React.js", level: 90, category: "web" },
  { name: "Next.js", level: 85, category: "web" },
  { name: "Tailwind CSS", level: 90, category: "web" },

  // Tools & Platforms
  { name: "Node.js", level: 82, category: "tools" },
  { name: "Express.js", level: 80, category: "tools" },
  { name: "React Native", level: 78, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },

  // Databases
  { name: "PostgreSQL", level: 80, category: "databases" },
  { name: "Prisma", level: 78, category: "databases" },

  // Concepts
  { name: "DSA", level: 85, category: "concepts" },
  { name: "OOP", level: 82, category: "concepts" },
  { name: "System Design", level: 75, category: "concepts" },
  { name: "REST APIs", level: 85, category: "concepts" },
];

const categories = ["all", "programming", "web", "tools", "databases", "concepts"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A snapshot of the technologies and core concepts I work with.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="premium-surface premium-surface-hover card-hover text-left p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              </div>
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};