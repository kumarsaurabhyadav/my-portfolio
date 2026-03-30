import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-10 px-4 bg-card border-t border-border mt-12">
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Kumar Saurabh Yadav. All rights
        reserved.
      </p>
      <a
        href="#hero"
        aria-label="Back to top"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};