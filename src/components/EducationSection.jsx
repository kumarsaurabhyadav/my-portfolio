import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Chandigarh University, Punjab, India",
    period: "2021 – 2025",
    grade: "CGPA: 7.4/10",
  },
  {
    degree: "Senior Secondary (Class XII)",
    school: "Jeevandeep Public School, Varanasi, India",
    period: "2021",
    grade: "Class XII",
  },
  {
    degree: "Secondary (Class X)",
    school: "Jeevandeep Public School, Varanasi, India",
    period: "2019",
    grade: "Class X",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Education <span className="text-primary"> & Academics</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Formal education and academic highlights.
        </p>

        <div className="space-y-6">
          {education.map((e) => (
            <div
              key={`${e.school}-${e.degree}`}
              className="premium-surface premium-surface-hover card-hover text-left p-6 md:p-8"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 p-2 rounded-full bg-primary/10 shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-semibold leading-snug">
                      {e.degree}
                    </h3>
                    <div className="text-sm text-muted-foreground">{e.period}</div>
                  </div>

                  <div className="mt-1 text-muted-foreground">{e.school}</div>
                  <div className="mt-4">
                    <span className="inline-flex items-center rounded-full border border-border/60 bg-background/40 px-3 py-1 text-sm text-muted-foreground">
                      {e.grade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

