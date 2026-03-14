"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal, { staggerContainer, staggerItem } from "./ScrollReveal";

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
        <ScrollReveal>
          <h2 className="font-(family-name:--font-cormorant) text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Get In Touch
          </h2>
        </ScrollReveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-5">
          {/* Contact Info */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="glass glass-pastel-sky h-full rounded-2xl p-6 sm:p-8 border-sky-200/40"
            >
              <h3 className="font-(family-name:--font-cormorant) text-lg font-semibold text-foreground">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-muted">
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
                    whileHover={{ x: 4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="group flex cursor-pointer items-center gap-3 rounded-xl bg-violet-200/5 border border-violet-200/10 p-3.5 hover:border-violet-200/20 hover:bg-violet-200/10 transition-colors"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                      <info.icon size={16} className="text-violet-600" />
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
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="glass glass-pastel-mint rounded-2xl p-6 sm:p-8 border-emerald-200/40 hover:border-emerald-300 transition-colors"
            >
              <h3 className="font-(family-name:--font-cormorant) text-lg font-semibold text-foreground">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
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
                    className="w-full rounded-xl border border-violet-200/50 bg-white px-4 py-3 text-sm text-foreground placeholder-muted/50 outline-none transition-all duration-200 focus:border-violet-400 focus:ring-1 focus:ring-violet-200"
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
                    className="w-full rounded-xl border border-violet-200/50 bg-white px-4 py-3 text-sm text-foreground placeholder-muted/50 outline-none transition-all duration-200 focus:border-violet-400 focus:ring-1 focus:ring-violet-200"
                    placeholder="your@email.com"
                  />
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
                    className="w-full resize-none rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted/50 outline-none transition-all duration-200 focus:border-white/20 focus:ring-1 focus:ring-white/10"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-violet-600 transition-colors"
                >
                  <Send size={14} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
