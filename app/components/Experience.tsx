"use client";

import { motion } from "framer-motion";
import { Briefcase, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences: Array<{
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  docs?: { label: string; href: string }[];
}> = [
  {
    title: "Content Marketing",
    company: "CÔNG TY PUNAR (PUNAR Company)",
    period: "2025 - 2026",
    type: "Content Marketing",
    description:
      "Planned and managed fanpage content for new products (3-5 posts/week), increasing interaction by ~25% in 2 months. Wrote and developed 20+ TikTok scripts based on trends and customer insights. Coordinated filming and optimized 3-second hooks, improving viewer retention by ~30%. Monitored and analyzed metrics (reach, engagement, retention), proposing content optimization to boost campaign effectiveness by 25%.",
  },
  {
    title: "Sales Consultant",
    company: "Rau Má Mix",
    period: "2023",
    type: "Sales",
    description:
      "Worked as a frontline sales consultant to promote beverage products. Engaged customers and introduced new drinks, upsold combo deals based on customer needs, and delivered service aligned with company standards. Team of 10 members.",
  },
  {
    title: "Communications Team Member",
    company: "CLB Tình Nguyện Viên (Volunteer Club)",
    period: "2022",
    type: "Volunteer",
    description:
      "Created content for club programs and campaigns. Drafted posts, event summaries, and captions for community messages. Collaborated on content plans and communication strategies for the fanpage. Improved creative writing, social media management, and teamwork skills.",
  },
  {
    title: "Event Organizer",
    company:
      "Ban Tổ Chức Sự Kiện Sinh Viên (Student Event Organizing Committee)",
    period: "2025",
    type: "Volunteer",
    description:
      "Organized interactive and educational activities for primary school students. Planned and hosted engaging games, explained rules clearly, ensured a safe and fun environment, and collaborated with team members. Team of 5. Skills gained: Event planning, teamwork, communication, problem-solving.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-(family-name:--font-cormorant) text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Work Experience
          </h2>
        </ScrollReveal>

        <div className="mt-6 space-y-4">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.company} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="glass glass-pastel-lavender group rounded-2xl p-6 sm:p-8 border-violet-200/40 hover:border-violet-300 transition-colors"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                      <Briefcase size={18} className="text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-(family-name:--font-poppins) text-base font-bold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-muted">
                        {exp.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:shrink-0">
                    <span className="rounded-lg bg-background px-3 py-1 text-xs font-medium text-muted">
                      {exp.period}
                    </span>
                    <span className="rounded-lg bg-background px-3 py-1 text-xs font-medium text-muted">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>

                {exp.docs && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-muted">
                      View Documents:
                    </span>
                    {exp.docs.map((doc) => (
                      <motion.a
                        key={doc.label}
                        href={doc.href}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="flex cursor-pointer items-center gap-1 rounded-lg bg-accent-dim px-3 py-1 text-xs font-medium text-accent hover:bg-accent/20"
                      >
                        <FileText size={12} />
                        {doc.label}
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
