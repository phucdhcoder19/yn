"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    school: "Đại Học Công Nghệ Thành Phố Hồ Chí Minh (HUTECH)",
    degree: "Cử nhân Marketing (Bachelor of Marketing)",
    period: "09/2022 – Present",
    gpa: "GPA: 3.0/4.0",
  },
];

const certificates = [
  "Chứng chỉ Tin học Văn phòng (Word, Excel, Canva)",
  "Chứng chỉ Tiếng Anh B1",
  "Chứng chỉ Kỹ năng Giao tiếp & Làm việc nhóm",
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-(family-name:--font-cormorant) text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Education &amp; Certificates
          </h2>
        </ScrollReveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Education */}
          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="glass glass-pastel-mint h-full rounded-2xl p-6 sm:p-8 border-emerald-200/10 hover:border-emerald-200/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                  <GraduationCap size={18} className="text-muted" />
                </div>
                <div>
                  <h3 className="font-(family-name:--font-cormorant) text-base font-semibold text-foreground">
                    {education[0].school}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">
                    {education[0].degree}
                  </p>
                  <p className="mt-2 text-sm text-muted">{education[0].period}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {education[0].gpa}
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Certificates */}
          <ScrollReveal delay={0.15}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="glass glass-pastel-mint h-full rounded-2xl p-6 sm:p-8 border-emerald-200/10 hover:border-emerald-200/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                  <Award size={18} className="text-violet-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-(family-name:--font-cormorant) text-base font-semibold text-foreground">
                    Awards &amp; Certificates
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {certificates.map((cert) => (
                      <li
                        key={cert}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
