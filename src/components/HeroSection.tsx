import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.webp";

const roles = [
  "Aspiring Data Scientist",
  "Java Developer",
  "Python Enthusiast",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="animate-float flex-shrink-0"
        >
          <div className="gradient-border animate-glow-pulse">
            <div className="gradient-border-inner p-1">
              <img
                src={profilePhoto}
                alt="Thummala Leela Krishna"
                className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <p className="text-sm md:text-base text-muted-foreground mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Thummala{" "}
            <span className="gradient-text">Leela Krishna</span>
          </h1>
          <p className="text-muted-foreground mb-2 text-sm">
            B.Tech CSE — Sri Sai Institute of Technology and Science
          </p>
          <div className="h-8 mb-6">
            <span className="text-lg md:text-xl text-primary font-medium">
              {displayed}
            </span>
            <span className="animate-pulse text-primary">|</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/178Ei2ck_k4eWTKuE-tLVzPzH-NPU58Iv/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-sm"
            >
              <FileText size={18} /> View Resume
            </a>
            <a
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-foreground font-medium text-sm hover:bg-primary/10 transition-colors"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
