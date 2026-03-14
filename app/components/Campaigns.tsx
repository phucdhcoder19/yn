"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  TrendingUp,
  MousePointerClick,
  DollarSign,
  BarChart3,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const campaigns = [
  {
    status: "Completed",
    category: "Strategy",
    title: "VinFast Voucher Discount Strategy",
    client: "Academic Project",
    description:
      "Led a team of 10 to build a discount voucher strategy for VinFast focused on profitability and appeal.",
    stack: ["Market Research", "SPSS", "Excel", "PowerPoint"],
    features: [
      "Conducted market research and customer segmentation",
      "Developed a data-driven discount plan",
      "Managed budget and cost-efficiency",
      "Presented final proposal to mock stakeholders",
    ],
    metrics: [
      { label: "Team", value: "10", icon: BarChart3 },
      { label: "Role", value: "Leader", icon: MousePointerClick },
      { label: "Year", value: "2024", icon: TrendingUp },
    ],
    liveUrl: "#",
    caseUrl: "#",
  },
  {
    status: "Completed",
    category: "Research",
    title: "Consumer Behavior Analysis on E-commerce Platform",
    client: "Academic Project",
    description:
      "Led a team project to study consumer behavior on an e-commerce platform.",
    stack: ["SPSS", "Surveys", "Excel", "PowerPoint"],
    features: [
      "Designed and conducted user surveys",
      "Analyzed data using SPSS",
      "Interpreted findings to understand e-commerce trends",
      "Presented research results with actionable insights",
    ],
    metrics: [
      { label: "Team", value: "6", icon: BarChart3 },
      { label: "Role", value: "Leader", icon: MousePointerClick },
      { label: "Year", value: "2024", icon: TrendingUp },
    ],
    liveUrl: "#",
    caseUrl: "#",
  },
  {
    status: "Completed",
    category: "Content",
    title: "Content Marketing",
    client: "CÔNG TY PUNAR (PUNAR Company)",
    description:
      "Planned and managed fanpage content for new products (3-5 posts/week), increasing interaction by ~25% in 2 months. Developed 20+ TikTok scripts and optimized 3-second hooks, improving viewer retention by ~30%.",
    stack: ["Facebook", "TikTok", "Canva", "CapCut"],
    features: [
      "Planned and managed fanpage content for new products (3-5 posts/week)",
      "Wrote and developed 20+ TikTok scripts based on trends and customer insights",
      "Coordinated filming and optimized 3-second hooks, improving retention by ~30%",
      "Monitored metrics (reach, engagement, retention), proposed optimization to boost effectiveness by 25%",
    ],
    metrics: [
      { label: "Interaction", value: "+25%", icon: TrendingUp },
      { label: "Retention", value: "+30%", icon: BarChart3 },
      { label: "Year", value: "2026", icon: MousePointerClick },
    ],
    liveUrl: "#",
    caseUrl: "#",
  },
  {
    status: "Completed",
    category: "Volunteer",
    title: "Volunteer at Club Tình Nguyện Viên (Volunteer Club)",
    client: "CLB Tình Nguyện Viên (Volunteer Club)",
    description:
      "Created content for club programs and campaigns. Collaborated on content plans and communication strategies for the club's fanpage.",
    stack: ["Social Media", "Content Writing", "Canva"],
    features: [
      "Created content for the club's volunteer programs and campaigns",
      "Drafted posts introducing activities, summarized events, and wrote captions",
      "Collaborated with team to build content plans and communication strategies for the fanpage",
      "Improved creative writing, social media management, and teamwork skills",
    ],
    metrics: [
      { label: "Role", value: "Member", icon: BarChart3 },
      { label: "Focus", value: "Content", icon: MousePointerClick },
      { label: "Year", value: "2025", icon: TrendingUp },
    ],
    liveUrl: "#",
    caseUrl: "#",
  },
  {
    status: "Completed",
    category: "Volunteer",
    title: "Student Event Organizer",
    client:
      "Ban Tổ Chức Sự Kiện Sinh Viên (Student Event Organizing Committee)",
    description:
      "Organized interactive and educational activities for primary school students.",
    stack: ["Event Planning", "Coordination", "Teamwork"],
    features: [
      "Planned and hosted engaging games",
      "Explained rules clearly",
      "Ensured a safe and fun environment",
      "Collaborated with team members",
    ],
    metrics: [
      { label: "Team", value: "5", icon: BarChart3 },
      { label: "Role", value: "Organizer", icon: MousePointerClick },
      { label: "Year", value: "2025", icon: TrendingUp },
    ],
    liveUrl: "#",
    caseUrl: "#",
  },
];

const categoryColors: Record<string, string> = {
  Performance: "bg-pink-100 text-pink-700",
  B2B: "bg-violet-100 text-violet-700",
  Brand: "bg-pink-100 text-pink-700",
  SEO: "bg-sky-100 text-sky-700",
  Strategy: "bg-violet-100 text-violet-700",
  Research: "bg-emerald-100 text-emerald-700",
  Content: "bg-pink-100 text-pink-700",
  Sales: "bg-amber-100 text-amber-700",
  Volunteer: "bg-teal-100 text-teal-700",
};

export default function Campaigns() {
  return (
    <section id="campaigns" className="relative py-20 px-4 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-(family-name:--font-cormorant) text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Featured Projects
          </h2>
        </ScrollReveal>

        <div className="mt-6 space-y-4">
          {campaigns.map((campaign, i) => (
            <ScrollReveal key={campaign.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`glass group overflow-hidden rounded-2xl border-violet-200/40 hover:border-violet-300 transition-colors ${
                  [
                    "glass-pastel-pink",
                    "glass-pastel-lavender",
                    "glass-pastel-mint",
                    "glass-pastel-peach",
                    "glass-pastel-sky",
                    "glass-pastel-violet",
                  ][i % 6]
                }`}
              >
                <div className="p-6 sm:p-8">
                  {/* Header badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <motion.a
                      href={campaign.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-medium text-muted hover:text-violet-600 transition-colors"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={campaign.caseUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-medium text-muted hover:text-violet-600 transition-colors"
                    >
                      <BarChart3 size={12} />
                      Case Study
                    </motion.a>
                    <span className="rounded-lg bg-pink-100 px-3 py-1.5 text-xs font-medium text-pink-700">
                      {campaign.status}
                    </span>
                    <span
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium ${categoryColors[campaign.category]}`}
                    >
                      {campaign.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-(family-name:--font-cormorant) text-xl font-semibold text-foreground sm:text-2xl">
                    {campaign.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">
                    {campaign.client}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {campaign.description}
                  </p>

                  {/* Tools */}
                  <div className="mt-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                      Tools Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {campaign.stack.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-medium text-foreground border border-violet-200/40"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {campaign.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl bg-violet-50 p-3 text-center border border-violet-200/40"
                      >
                        <metric.icon
                          size={14}
                          className="mx-auto mb-1 text-muted"
                        />
                        <div className="font-(family-name:--font-cormorant) text-lg font-semibold text-foreground sm:text-xl">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mt-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                      Key Results
                    </p>
                    <ul className="space-y-2">
                      {campaign.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
