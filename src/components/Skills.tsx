import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { technicalSkills, softSkills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

const circleSize = 120;
const strokeWidth = 8;
const radius = (circleSize - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="glass-effect p-6 rounded-2xl card-hover flex flex-col items-center gap-4"
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                      className="relative"
                      style={{ width: circleSize, height: circleSize }}
                    >
                      <svg
                        width={circleSize}
                        height={circleSize}
                        viewBox={`0 0 ${circleSize} ${circleSize}`}
                        className="-rotate-90"
                      >
                        <circle
                          cx={circleSize / 2}
                          cy={circleSize / 2}
                          r={radius}
                          stroke="hsl(var(--muted-foreground))"
                          strokeWidth={strokeWidth}
                          fill="transparent"
                          opacity={0.2}
                        />
                        <motion.circle
                          cx={circleSize / 2}
                          cy={circleSize / 2}
                          r={radius}
                          stroke="hsl(var(--primary))"
                          strokeWidth={strokeWidth}
                          strokeLinecap="round"
                          fill="transparent"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          animate={
                            isInView
                              ? { strokeDashoffset: circumference * (1 - skill.level / 100) }
                              : { strokeDashoffset: circumference }
                          }
                          transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-semibold">{skill.level}%</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Soft Skills</h3>
            <div className="rounded-3xl card-shadow p-10 md:p-12 bg-gradient-to-br from-sky-100 via-sky-50 to-purple-100 border border-primary/20">
              <div className="flex flex-wrap gap-4 justify-center">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-base font-semibold py-3 px-6 rounded-2xl text-white shadow-lg border border-white/20"
                      style={{
                        background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)",
                      }}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
