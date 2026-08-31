"use client";

import { motion } from "framer-motion";
import { BarChart3, MousePointerClick, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

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
  },
];

export default function Campaigns() {
  return (
    <section id="campaigns" className="relative py-20 px-4 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="03" title="Featured Projects" />

        <div className="mt-8 space-y-5">
          {campaigns.map((campaign, i) => (
            <ScrollReveal
              key={campaign.title}
              delay={i * 0.06}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-paper group overflow-hidden rounded-xl"
              >
                <div className="p-6 sm:p-8">
                  {/* Index + badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="section-index text-3xl leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-olive-dim px-3 py-1 text-xs font-medium text-olive">
                      {campaign.category}
                    </span>
                    <span className="rounded-full border border-(--line) px-3 py-1 text-xs font-medium text-muted">
                      {campaign.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-(family-name:--font-cormorant) text-2xl font-semibold text-foreground sm:text-3xl">
                    {campaign.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {campaign.client}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                    {campaign.description}
                  </p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {/* Key results */}
                    <div>
                      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                        Key Results
                      </p>
                      <ul className="space-y-2">
                        {campaign.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics + tools */}
                    <div className="flex flex-col justify-between gap-5">
                      <div className="grid grid-cols-3 divide-x divide-(--line) border-y border-(--line)">
                        {campaign.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="px-3 py-4 text-center"
                          >
                            <div className="font-(family-name:--font-cormorant) text-2xl font-semibold text-foreground">
                              {metric.value}
                            </div>
                            <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                          Tools Used
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {campaign.stack.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-(--line) px-3 py-1 text-xs font-medium text-foreground"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
