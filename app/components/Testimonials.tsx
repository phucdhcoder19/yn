"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Alex transformed our digital presence completely. Our ROAS went from barely breaking even to a consistent 4.8x. The strategic thinking and attention to data is unmatched. They built a complete growth engine that continues to deliver results month after month, and their ability to combine creative storytelling with performance metrics is truly rare in this industry.",
    name: "Sarah Chen",
    title: "CEO, NovaSkin Beauty",
    initials: "SC",
  },
  {
    quote:
      "Working with Alex was a game-changer for our lead generation. We saw a 62% decrease in cost per lead while actually increasing lead quality. The multi-channel strategy was brilliantly executed.",
    name: "Michael Torres",
    title: "VP Marketing, CloudSync Pro",
    initials: "MT",
  },
  {
    quote:
      "Alex doesn't just run ads — they build growth engines. Our product launch campaign exceeded every KPI we set, and the organic strategy continues to drive results months later.",
    name: "Priya Patel",
    title: "Founder, UrbanBite Foods",
    initials: "PP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-(family-name:--font-cormorant) text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Testimonials
          </h2>
        </ScrollReveal>

        {/* Featured testimonial */}
        <ScrollReveal delay={0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="glass glass-pastel-lavender mt-6 rounded-2xl p-6 sm:p-8 border-violet-200/40"
          >
            <Quote size={28} className="mb-4 text-muted/30" />
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {testimonials[0].quote}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-xs font-bold text-muted">
                {testimonials[0].initials}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {testimonials[0].name}
                </p>
                <p className="text-xs text-muted">{testimonials[0].title}</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Secondary */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {testimonials.slice(1).map((t, i) => (
            <ScrollReveal key={t.name} delay={0.15 + i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass glass-pastel-peach rounded-2xl p-6 sm:p-8 border-amber-200/40"
              >
                <Quote size={22} className="mb-3 text-muted/30" />
                <p className="text-sm leading-relaxed text-muted">
                  {t.quote}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted">{t.title}</p>
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
