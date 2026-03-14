"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img from "../../public/yn.jpg";
import {
  Globe,
  MessageCircle,
  Rocket,
  Monitor,
  GraduationCap,
  Star,
} from "lucide-react";

const infoCards = [
  { icon: Globe, label: "Ho Chi Minh City, VN", color: "text-sky-600" },
  {
    icon: MessageCircle,
    label: "Vietnamese & English",
    color: "text-pink-600",
  },
  { icon: Rocket, label: "Content Marketing", color: "text-violet-600" },
  { icon: Monitor, label: "Digital Marketer", color: "text-emerald-600" },
  { icon: GraduationCap, label: "HUTECH Marketing", color: "text-pink-600" },
  { icon: Star, label: "Social Media & Brand", color: "text-amber-600" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
          {/* Left Column: Avatar, Status, Name */}
          <motion.div
            variants={item}
            className="flex flex-col items-start lg:min-w-[280px]"
          >
            {/* Avatar */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="relative h-72 w-36 shrink-0 overflow-hidden rounded-2xl sm:h-44 sm:w-44 ring-2 ring-violet-300 ring-offset-2 ring-offset-background"
            >
              <Image
                src={img}
                alt="Đặng Thị Yến Nhi"
                fill
                className="object-cover"
                priority
                sizes="176px"
              />
            </motion.div>

            {/* Status Badge */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400/80 animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-pink-600">
                Available For Hire
              </span>
            </div>

            {/* Name */}
            <h1 className="mt-4 font-(family-name:--font-cormorant) text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Đặng Thị Yến Nhi
            </h1>
          </motion.div>

          {/* Right Column: 2x3 Grid of Info Cards */}
          <motion.div
            variants={container}
            className="grid flex-1 grid-cols-2 gap-3 sm:gap-4 lg:max-w-md"
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.label}
                variants={item}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex cursor-default items-center gap-3 rounded-2xl bg-white/80 border border-violet-200/50 p-4 hover:border-violet-300 transition-colors shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                  <card.icon size={18} className={card.color} />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {card.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
