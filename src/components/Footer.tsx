import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="relative z-10 border-t border-border/30 py-8 px-4 text-center">
    <div className="flex justify-center gap-6 mb-4">
      <a href="https://www.linkedin.com/in/thummala-leela-krishna-361630311" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="https://github.com/leelakrishnathummala247" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Github size={20} />
      </a>
    </div>
    <p className="text-xs text-muted-foreground">
      © 2025 Thummala Leela Krishna. All rights reserved.
    </p>
  </footer>
);

export default Footer;
