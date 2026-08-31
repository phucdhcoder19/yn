"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal, { staggerContainer, staggerItem } from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nhi15.06.04@gmail.com",
    href: "mailto:nhi15.06.04@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84 329 305 279",
    href: "tel:+84329305279",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
    href: "https://maps.google.com/?q=Ho+Chi+Minh+City",
  },
];

const inputClass =
  "w-full rounded-lg border border-(--line) bg-card px-4 py-3 text-sm text-foreground placeholder-muted/50 outline-none transition-colors duration-200 focus:border-(--line-strong)";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="06" title="Get In Touch" />

        <ScrollReveal delay={0.05}>
          <p className="mt-6 max-w-2xl font-(family-name:--font-cormorant) text-2xl leading-snug text-foreground sm:text-3xl">
            Có một câu chuyện thương hiệu cần được kể?{" "}
            <em className="text-accent">Hãy cùng làm nó đáng nghe.</em>
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {/* Contact Info */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="card-paper h-full rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-olive">
                Contact Information
              </h3>
              <p className="mt-3 text-sm text-muted">
                Let&apos;s discuss how I can help grow your brand.
              </p>

              <div className="mt-6 space-y-3">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.label === "Location" ? "_blank" : undefined}
                    rel={
                      info.label === "Location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="group flex cursor-pointer items-center gap-3 rounded-lg border border-(--line) p-3.5 transition-colors hover:border-(--line-strong) hover:bg-card-hover"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--line) transition-colors group-hover:border-foreground group-hover:bg-foreground">
                      <info.icon
                        size={15}
                        className="text-foreground transition-colors group-hover:text-background"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted">{info.label}</p>
                      <p className="text-sm font-semibold text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <div className="card-paper rounded-xl p-6 sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-olive">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-accent"
                >
                  <Send size={14} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
