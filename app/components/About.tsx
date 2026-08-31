"use client";

import { motion } from "framer-motion";
import ScrollReveal, { staggerContainer, staggerItem } from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const socials = [
  {
    label: "LinkedIn",
    handle: "Connect on LinkedIn",
    href: "https://linkedin.com/in/yennhi-dang",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Instagram",
    handle: "@_hni.miu15",
    href: "https://www.instagram.com/_hni.miu15",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "TikTok",
    handle: "@_miuboo",
    href: "https://www.tiktok.com/@_miuboo",
    path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="01" title="About Me" />

        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {/* Story */}
          <ScrollReveal className="lg:col-span-3">
            <div className="card-paper h-full rounded-xl p-6 sm:p-8">
              <p className="font-(family-name:--font-cormorant) text-xl leading-snug text-foreground sm:text-2xl">
                Marketing với tôi là kể một câu chuyện{" "}
                <em className="text-accent">đáng nghe</em> — bằng dữ liệu, sự
                thấu hiểu người xem và một chút liều lĩnh sáng tạo.
              </p>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
                <p>
                  I aim to develop my career in marketing, especially digital
                  marketing, brand building, and market research. I apply my
                  knowledge of social media management, creative content, and
                  data analysis to contribute to effective communication
                  campaigns.
                </p>
                <p>
                  I enjoy reading marketing blogs and books such as
                  &ldquo;Contagious: Why Things Catch On&rdquo; and
                  &ldquo;Building a StoryBrand&rdquo;. I&apos;m passionate about
                  exploring brand building, consumer behavior, and digital
                  marketing trends.
                </p>
                <p>
                  In my free time, I create content for social media and
                  experiment with design tools. I regularly follow marketing
                  case studies, advertising campaigns, and industry news for
                  learning and inspiration.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Connect */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="card-paper h-full rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-olive">
                Connect
              </h3>
              <div className="mt-5 space-y-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="group flex cursor-pointer items-center gap-3 rounded-lg border border-(--line) p-3.5 transition-colors hover:border-(--line-strong) hover:bg-card-hover"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--line) transition-colors group-hover:border-foreground group-hover:bg-foreground">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-foreground transition-colors group-hover:text-background"
                        fill="currentColor"
                      >
                        <path d={s.path} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted">{s.label}</p>
                      <p className="text-sm font-semibold text-foreground">
                        {s.handle}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <p className="mt-6 border-t border-(--line) pt-4 font-(family-name:--font-cormorant) text-sm italic text-muted">
                &ldquo;Don&apos;t count the clicks, make the campaigns
                count.&rdquo;
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
