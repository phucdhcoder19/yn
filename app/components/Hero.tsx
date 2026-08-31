"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img from "../../public/yn.jpg";
import {
  ArrowDown,
  Globe,
  GraduationCap,
  MessageCircle,
  Monitor,
  Rocket,
  Star,
} from "lucide-react";

const facts = [
  { icon: Rocket, label: "Content Marketing" },
  { icon: Monitor, label: "Digital Marketer" },
  { icon: Globe, label: "Ho Chi Minh City, VN" },
  { icon: MessageCircle, label: "Vietnamese & English" },
  { icon: GraduationCap, label: "HUTECH Marketing" },
  { icon: Star, label: "Social Media & Brand" },
];

const stats = [
  { value: "20+", label: "TikTok scripts" },
  { value: "+30%", label: "viewer retention" },
  { value: "+25%", label: "fanpage interaction" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-32">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl"
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: editorial headline */}
          <div className="flex-1">
            <motion.p
              variants={item}
              className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-olive"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Available for hire — Content Marketing
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 font-(family-name:--font-cormorant) text-5xl leading-[1.02] font-semibold tracking-tight text-foreground sm:text-7xl lg:text-[5.2rem]"
            >
              Đặng Thị
              <br />
              Yến Nhi<span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              Tôi kể chuyện thương hiệu bằng{" "}
              <em className="font-(family-name:--font-cormorant) text-[1.15em] font-semibold not-italic italic text-foreground">
                <span className="marker">video, hình ảnh và con chữ</span>
              </em>{" "}
              — từ kịch bản TikTok, dựng phim CapCut/Premiere đến quản lý
              fanpage và hỗ trợ livestream.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent"
              >
                Xem sản phẩm của tôi
                <ArrowDown
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="pill-ink px-6 py-3 text-sm font-semibold"
              >
                Liên hệ
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={item}
              className="mt-10 flex max-w-xl divide-x divide-(--line) border-y border-(--line)"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex-1 py-4 pr-4 pl-4 first:pl-0">
                  <p className="font-(family-name:--font-cormorant) text-3xl font-semibold text-foreground sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: tilted paper-framed portrait + facts */}
          <motion.div
            variants={item}
            className="flex flex-col items-center gap-8 lg:w-[340px]"
          >
            <motion.div
              initial={{ rotate: 4 }}
              animate={{ rotate: 2.5 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="card-paper relative overflow-hidden rounded-xl p-3 pb-10">
                <div className="relative h-72 w-60 overflow-hidden sm:h-80 sm:w-64">
                  <Image
                    src={img}
                    alt="Đặng Thị Yến Nhi"
                    fill
                    className="object-cover"
                    priority
                    sizes="256px"
                  />
                </div>
                <p className="absolute bottom-3 left-0 right-0 text-center font-(family-name:--font-cormorant) text-sm italic text-muted">
                  storyteller behind the camera
                </p>
              </div>
            </motion.div>

            <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-2.5">
              {facts.map((f) => (
                <li
                  key={f.label}
                  className="flex items-center gap-2 text-[13px] font-medium text-muted"
                >
                  <f.icon size={13} className="shrink-0 text-olive" />
                  {f.label}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
