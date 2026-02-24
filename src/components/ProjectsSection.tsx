import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Alumni Prototype",
    subtitle: "Sri Sai Institute of Technology and Science",
    desc: "Designed and developed a prototype Alumni Management System to connect current students with alumni. Features include alumni registration, profile management, and communication tools.",
    tech: ["Java", "Database", "Web Technologies"],
  },
  {
    title: "Data Analysis using Python",
    subtitle: "",
    desc: "Performed data preprocessing, visualization, and insight extraction using Python libraries for real-world datasets.",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
  {
    title: "Machine Learning Mini Project",
    subtitle: "",
    desc: "Built a basic ML model for prediction using supervised learning techniques on structured datasets.",
    tech: ["Python", "Scikit-learn"],
  },
  {
    title: "Java Console Application",
    subtitle: "",
    desc: "Developed a console-based application implementing OOP concepts and logical problem solving.",
    tech: ["Java"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 card-hover-glow group flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              {p.subtitle && (
                <p className="text-xs text-muted-foreground mb-3">{p.subtitle}</p>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button className="btn-glow inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground text-sm font-medium w-fit border border-primary/30 hover:from-primary/30 hover:to-secondary/30 transition-all">
                <ExternalLink size={14} /> View Project
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
