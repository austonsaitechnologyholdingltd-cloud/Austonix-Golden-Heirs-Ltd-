"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-gold mb-6">
              AUSTONIX GOLDEN HEIRS LTD
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-zinc-50 mb-6">
              Full-service technology company and technology holding company for{" "}
              <span className="text-gold">intelligent enterprises</span>.
            </h1>

            <p className="text-lg text-muted max-w-xl mb-4 leading-relaxed">
              We design, develop, integrate, secure, and operate digital technology systems across AI, enterprise software, cloud, data, cybersecurity, digital platforms, and institutional infrastructure programs.
            </p>

            <p className="text-base text-muted mb-8">
              Intelligent technology. Enterprise infrastructure. Digital capability.
              <br />
              <span className="text-gold font-medium">Build once. Empower everything.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-7 py-3.5 text-sm font-semibold text-background transition hover:bg-gold-light hover:-translate-y-0.5 shadow-lg shadow-gold/20"
              >
                Start an Enterprise Conversation
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-zinc-100 transition hover:border-gold hover:text-gold"
              >
                Explore Capabilities
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-8 sm:p-10 shadow-2xl shadow-black/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative space-y-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-sm sm:text-base font-semibold">
                  {["Data", "Knowledge", "Intelligence", "Reasoning", "Action"].map((item, i) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="text-zinc-100">{item}</span>
                      {i < 4 && <span className="text-gold/70">→</span>}
                    </span>
                  ))}
                </div>
                
                <div className="h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />
                
                <p className="text-xs uppercase tracking-widest text-muted font-medium">
                  Austonix Intelligence Core
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { label: "AI Systems", value: "Enterprise" },
                    { label: "Security", value: "Built-in" },
                    { label: "Delivery", value: "Governed" },
                    { label: "Horizon", value: "Long-term" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-background/60 border border-border/60 p-3">
                      <p className="text-xs text-muted mb-0.5">{stat.label}</p>
                      <p className="text-sm font-semibold text-gold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}