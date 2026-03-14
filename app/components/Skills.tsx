"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import ScrollReveal, { staggerContainer, staggerItem } from "./ScrollReveal";

const proficiency = [
  {
    name: "Social Media Management (Facebook, Instagram, TikTok, LinkedIn)",
    level: 85,
  },
  { name: "Content Writing & Advertising Copy", level: 82 },
  { name: "Graphic Design (Canva, Photoshop)", level: 80 },
  { name: "Video Editing (CapCut, Premiere Pro)", level: 78 },
  { name: "Microsoft Office (Word, Excel, PowerPoint)", level: 88 },
  { name: "Market Research & Data Analysis", level: 75 },
  { name: "Event Planning & Coordination", level: 80 },
  { name: "Communication & Teamwork", level: 90 },
];

function ToolLogo({
  tool,
  variants,
}: {
  tool: { name: string; logo: string };
  variants: Variants;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className="group flex cursor-default flex-col items-center gap-2 rounded-xl bg-white/80 p-4 border border-violet-200/30 hover:border-violet-200/50 transition-colors"
    >
      <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2 shadow-sm overflow-hidden">
        {imgError ? (
          <span className="font-(family-name:--font-cormorant) text-lg font-semibold text-violet-600">
            {tool.name.charAt(0)}
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <span className="text-center text-[11px] font-medium text-muted group-hover:text-foreground transition-colors">
        {tool.name}
      </span>
    </motion.div>
  );
}

const tools = [
  {
    name: "Canva",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "Photoshop",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "CapCut",
    logo: "https://www.google.com/s2/favicons?domain=capcut.com&sz=128",
  },
  {
    name: "Premiere Pro",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
  },
  { name: "Facebook", logo: "https://cdn.simpleicons.org/facebook/1877F2" },
  { name: "Instagram", logo: "https://cdn.simpleicons.org/instagram/E4405F" },
  { name: "TikTok", logo: "https://cdn.simpleicons.org/tiktok/000000" },
  {
    name: "LinkedIn",
    logo: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128",
  },
  {
    name: "Word",
    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
  },
  {
    name: "Excel",
    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
  },
  {
    name: "PowerPoint",
    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
  },
];

const methodologies = [
  "Content Marketing",
  "Social Media Strategy",
  "Brand Building",
  "Consumer Behavior",
  "Creative Writing",
  "Event Planning",
  "Data Analysis",
  "Team Collaboration",
  "Problem Solving",
];

const management = [
  {
    title: "Soft Skills",
    items: [
      "Communication",
      "Teamwork & collaboration",
      "Creativity & innovation",
      "Problem-solving",
    ],
  },
  {
    title: "Professional Skills",
    items: [
      "Social media management",
      "Content creation",
      "Graphic design",
      "Video editing",
    ],
  },
  {
    title: "Tools",
    items: ["Canva, Photoshop", "CapCut, Premiere Pro", "Microsoft Office"],
  },
];

function ProgressBar({ level, name }: { level: number; name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-semibold text-muted">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-violet-100">
        <div className="progress-bar" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-(family-name:--font-cormorant) text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Skills &amp; Expertise
          </h2>
        </ScrollReveal>

        {/* Marketing Proficiency */}
        <ScrollReveal delay={0.1}>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="glass glass-pastel-peach mt-6 rounded-2xl p-6 sm:p-8 border-amber-200/40 hover:border-amber-300 transition-colors"
          >
            <h3 className="font-(family-name:--font-cormorant) text-lg font-semibold text-foreground">
              Marketing Proficiency
            </h3>
            <p className="mt-1 text-sm text-muted">
              Hands-on experience in social media, content creation, and
              marketing tools. Each percentage represents confidence and
              expertise level.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-x-10">
              {proficiency.map((skill) => (
                <ProgressBar key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Tools & Platforms */}
        <ScrollReveal delay={0.15}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="glass mt-4 rounded-2xl p-6 sm:p-8 border-amber-500/5 hover:border-amber-500/15 transition-colors"
          >
            <h3 className="font-(family-name:--font-cormorant) text-lg font-semibold text-foreground">
              Tools &amp; Platforms
            </h3>
            <p className="mt-1 text-sm text-muted">
              The tools and platforms I use for content creation and marketing.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {tools.map((tool, i) => (
                <ToolLogo
                  key={`${tool.name}-${i}`}
                  tool={tool}
                  variants={staggerItem}
                />
              ))}
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Methodologies */}
        <ScrollReveal delay={0.2}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="glass mt-4 rounded-2xl p-6 sm:p-8 border-amber-500/5 hover:border-amber-500/15 transition-colors"
          >
            <h3 className="font-(family-name:--font-cormorant) text-lg font-semibold text-foreground">
              Methodologies &amp; Approaches
            </h3>
            <p className="mt-1 text-sm text-muted">
              Approaches that combine creativity with data-driven marketing.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {methodologies.map((m) => (
                <motion.span
                  key={m}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="cursor-default rounded-lg bg-violet-50 px-4 py-2 text-sm font-medium text-foreground border border-violet-200/30"
                >
                  {m}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Campaign Management */}
        <ScrollReveal delay={0.25}>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="glass mt-4 rounded-2xl p-6 sm:p-8 border-amber-500/5 hover:border-amber-500/15 transition-colors"
          >
            <h3 className="font-(family-name:--font-cormorant) text-lg font-semibold text-foreground">
              Campaign Management
            </h3>
            <p className="mt-1 text-sm text-muted">
              From planning to execution &mdash; how I approach marketing
              projects.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {management.map((phase) => (
                <motion.div
                  key={phase.title}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="rounded-xl bg-violet-50 p-5 border border-violet-200/40"
                >
                  <h4 className="font-(family-name:--font-cormorant) text-sm font-semibold text-foreground">
                    {phase.title}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {phase.items.map((itm) => (
                      <li
                        key={itm}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {itm}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-violet-50 p-6 text-center border border-violet-200/40">
              <p className="font-(family-name:--font-cormorant) text-sm italic text-muted sm:text-base">
                &ldquo;Don&apos;t count the clicks, make the campaigns
                count.&rdquo;
              </p>
              <p className="mt-2 text-xs font-medium text-muted">
                &mdash; Đặng Thị Yến Nhi
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
