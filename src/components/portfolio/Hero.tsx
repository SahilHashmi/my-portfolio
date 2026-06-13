import { motion } from "framer-motion";
import { ArrowUpRight, Download, MousePointerClick } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const headline = ["Building", "the Future", "with Code", "& Innovation."];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28">
      {/* Background gradient & glow */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute left-1/2 top-[20%] h-[320px] w-full max-w-[820px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px] sm:h-[520px]" />
        <div className="absolute left-[15%] top-[60%] h-[160px] w-[160px] rounded-full bg-primary/20 blur-[110px] float-slow sm:h-[260px] sm:w-[260px]" />
        <div className="absolute right-[10%] top-[30%] h-[140px] w-[140px] rounded-full bg-indigo-500/20 blur-[110px] float-slow sm:h-[220px] sm:w-[220px]" style={{ animationDelay: "-3s" }} />
        <div className="noise" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-6 flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-center text-[11px] text-muted-foreground backdrop-blur sm:mb-8 sm:text-xs"
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span>Available for freelance · remote · contract</span>
          <span className="mx-1 hidden h-3 w-px bg-white/15 sm:block" />
          <span className="text-foreground/80">India · GMT+5:30</span>
        </motion.div>

        {/* Headline */}
        <h1 className="mx-auto max-w-5xl text-center font-display text-[clamp(2.2rem,8.5vw,7rem)] font-semibold leading-[0.95] tracking-tight text-balance">
          {headline.map((word, i) => (
            <span key={i} className="mr-2 inline-block overflow-hidden align-bottom sm:mr-3">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.95, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block ${i === 3 ? "accent-text" : "gradient-text"}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base md:text-lg text-pretty"
        >
          I'm <span className="text-foreground">Sahil Hashmi</span> — a Full Stack Developer crafting{" "}
          <span className="text-foreground/90">AI-powered applications</span>,{" "}
          <span className="text-foreground/90">scalable SaaS systems</span>, and elegant product experiences for ambitious teams worldwide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10"
        >
          <MagneticButton asLink="#projects" variant="primary">
            View selected work
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
          <MagneticButton asLink="#contact" variant="ghost">
            <Download size={15} />
            Hire me
          </MagneticButton>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] sm:mt-16 sm:grid-cols-3"
        >
          {[
            { k: "4+", v: "Years experience" },
            { k: "40+", v: "Projects shipped" },
            { k: "12+", v: "Stacks mastered" },
          ].map((s) => (
            <div key={s.v} className="bg-background/40 px-5 py-4 text-center backdrop-blur sm:py-5">
              <div className="font-display text-xl text-foreground sm:text-2xl">{s.k}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground sm:bottom-8"
      >
        <div className="flex flex-col items-center gap-2">
          <MousePointerClick size={14} />
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px overflow-hidden bg-white/10">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-b from-transparent via-primary to-transparent"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}