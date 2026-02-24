import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cpu, BarChart3, Puzzle } from "lucide-react";

const hobbies = [
  { icon: Puzzle, label: "Problem Solving using Java & Python" },
  { icon: Cpu, label: "Learning New Technologies" },
  { icon: BarChart3, label: "Exploring Data Science Concepts" },
  { icon: Code, label: "Coding Challenges" },
];

const HobbiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="gradient-text">Hobbies</span> & Interests
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center card-hover-glow group"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-3 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                <h.icon className="text-primary" size={24} />
              </div>
              <p className="text-xs text-muted-foreground leading-snug">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
