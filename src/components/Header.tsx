"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#company", label: "Company" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#framework", label: "Framework" },
  { href: "#platforms", label: "Platforms" },
  { href: "#governance", label: "Governance" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-dark font-display text-lg font-bold text-background shadow-lg shadow-gold/20 group-hover:shadow-gold/40 transition-shadow">
              A
            </span>
            <span className="hidden sm:block text-sm font-semibold tracking-wide text-zinc-100">
              AUSTONIX GOLDEN HEIRS LTD
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  active === item.href.slice(1) ? "text-gold" : "text-muted hover:text-gold"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-gold-light hover:-translate-y-0.5"
          >
            Contact Austonix
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={cn("block h-0.5 w-6 bg-zinc-100 transition-all", mobileOpen && "translate-y-2 rotate-45")} />
            <span className={cn("block h-0.5 w-6 bg-zinc-100 transition-all", mobileOpen && "opacity-0")} />
            <span className={cn("block h-0.5 w-6 bg-zinc-100 transition-all", mobileOpen && "-translate-y-2 -rotate-45")} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-surface"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition",
                    active === item.href.slice(1)
                      ? "bg-gold/10 text-gold"
                      : "text-muted hover:bg-white/5 hover:text-gold"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg bg-gold px-4 py-3 text-center text-sm font-semibold text-background"
              >
                Contact Austonix
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}