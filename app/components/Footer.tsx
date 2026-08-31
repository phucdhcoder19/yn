"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-(--line) px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <p className="font-(family-name:--font-cormorant) text-base font-semibold text-foreground">
            Yến Nhi<span className="text-accent">.Mktg</span>
          </p>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <motion.a
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className="pill-ink flex items-center gap-2 px-4 py-2 text-xs font-medium"
          aria-label="Back to top"
        >
          Back to Top
          <ArrowUp size={12} />
        </motion.a>
      </div>
    </footer>
  );
}
