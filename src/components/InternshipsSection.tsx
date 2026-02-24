import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const InternshipsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative pl-16 md:pl-0 md:w-1/2 md:ml-auto md:pl-12"
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-[-8px] top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary glow-blue" />

            <div className="glass rounded-2xl p-6 card-hover-glow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">Data Science Intern</h3>
                  <p className="text-xs text-primary">Cognifyz Technologies</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Worked on data analysis, data preprocessing, visualization, and basic machine learning models. 
                Gained hands-on experience in handling real-world datasets and extracting actionable insights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
