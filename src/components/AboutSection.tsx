import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-10 card-hover-glow"
        >
          <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
            I am a passionate Computer Science Engineering student with strong interest in Data Science, 
            Machine Learning, and AI technologies. I enjoy analyzing data, extracting insights, and 
            building intelligent solutions using Java and Python. I continuously improve my skills through 
            internships, certifications, and hands-on projects. I am highly interested in problem-solving 
            and real-world application development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: User, title: "Student", desc: "3rd Year B.Tech CSE" },
              { icon: Target, title: "Goal", desc: "Aspiring Data Scientist" },
              { icon: Lightbulb, title: "Passion", desc: "AI & Machine Learning" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
