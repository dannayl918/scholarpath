"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Globe2,
  GraduationCap,
  Menu,
  Moon,
  Search,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Users,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const features = [
  {
    icon: GraduationCap,
    title: "Find Universities",
    description:
      "Explore universities and programs that align with your academic goals, destination and budget.",
    href: "/universities",
  },
  {
    icon: Award,
    title: "Discover Scholarships",
    description:
      "Find funding opportunities using a profile-based matching experience built for international students.",
    href: "/scholarships",
  },
  {
    icon: Sparkles,
    title: "Get AI Guidance",
    description:
      "Plan your applications, compare options and get personalized guidance from ScholarPath AI.",
    href: "/ai-assistant",
  },
  {
    icon: CheckCircle2,
    title: "Track Applications",
    description:
      "Keep deadlines, documents, essays and application progress organized in one place.",
    href: "/applications",
  },
];

const universities = [
  {
    name: "Northbridge University",
    location: "Massachusetts, USA",
    programs: ["Computer Science", "Engineering", "Business"],
    aid: "Financial aid available",
    tag: "Demo data",
  },
  {
    name: "Pacific Crest University",
    location: "California, USA",
    programs: ["Computer Science", "Data Science", "Economics"],
    aid: "Scholarships available",
    tag: "Demo data",
  },
  {
    name: "Lakeside Institute",
    location: "Illinois, USA",
    programs: ["Engineering", "Business", "Biology"],
    aid: "International aid",
    tag: "Demo data",
  },
];

const scholarships = [
  {
    name: "Global Scholars Award",
    organization: "ScholarPath Demo Foundation",
    coverage: "Full tuition",
    match: 96,
    deadline: "Demo deadline",
  },
  {
    name: "Future Leaders Scholarship",
    organization: "Education Partners Demo",
    coverage: "Partial tuition",
    match: 91,
    deadline: "Demo deadline",
  },
  {
    name: "International Excellence Award",
    organization: "Global Education Demo",
    coverage: "Merit award",
    match: 87,
    deadline: "Demo deadline",
  },
];

const steps = [
  {
    number: "01",
    title: "Build your profile",
    description:
      "Tell ScholarPath about your education, interests, intended major, budget and target countries.",
  },
  {
    number: "02",
    title: "Discover opportunities",
    description:
      "Explore universities, scholarships and resources organized around your goals.",
  },
  {
    number: "03",
    title: "Get personalized guidance",
    description:
      "Use your profile to understand your options and plan the next steps in your application journey.",
  },
  {
    number: "04",
    title: "Track your journey",
    description:
      "Manage applications, deadlines, documents and progress from one focused workspace.",
  },
];

function GlobeVisual() {
  return (
    <div className="relative mx-auto h-[420px] w-[420px] max-w-full">
      <div className="absolute inset-8 rounded-full bg-indigo-500/10 blur-3xl" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-indigo-400/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 rounded-full border border-sky-300/10"
      />

      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/20 bg-slate-950/80 shadow-[0_0_100px_rgba(99,102,241,0.18)] backdrop-blur-xl">
        <div className="absolute inset-5 rounded-full border border-white/5 bg-[radial-gradient(circle_at_35%_30%,rgba(129,140,248,.22),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,.12),transparent_50%)]" />

        <div className="absolute left-[28%] top-[25%] h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_18px_rgba(165,180,252,1)]" />
        <div className="absolute left-[62%] top-[34%] h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,1)]" />
        <div className="absolute left-[48%] top-[63%] h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_18px_rgba(165,180,252,1)]" />
        <div className="absolute left-[72%] top-[67%] h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,1)]" />
        <div className="absolute left-[23%] top-[58%] h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_18px_rgba(165,180,252,1)]" />

        <svg
          viewBox="0 0 256 256"
          className="absolute inset-0 h-full w-full opacity-50"
          aria-hidden="true"
        >
          <path
            d="M72 75 C120 105 140 85 158 88 S205 120 185 145"
            fill="none"
            stroke="rgba(129,140,248,.65)"
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M60 148 C95 128 125 145 150 128 S180 108 192 88"
            fill="none"
            stroke="rgba(125,211,252,.55)"
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M70 75 C90 115 92 145 123 160 S155 180 183 145"
            fill="none"
            stroke="rgba(165,180,252,.45)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <Globe2 className="mx-auto mb-2 h-8 w-8 text-indigo-300" />
          <p className="text-sm font-semibold text-white">Global pathways</p>
          <p className="mt-1 text-xs text-slate-400">Built for ambitious students</p>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute left-0 top-16 rounded-2xl px-4 py-3 shadow-premium"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-500/15 p-2 text-indigo-300">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400">University match</p>
            <p className="font-semibold text-white">94% aligned</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute bottom-14 right-0 rounded-2xl px-4 py-3 shadow-premium"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-sky-500/15 p-2 text-sky-300">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400">Scholarship match</p>
            <p className="font-semibold text-white">96% aligned</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setLight(isLight);
  }, []);

  function toggle() {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("scholarpath-theme", next ? "light" : "dark");
    setLight(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="rounded-xl border border-slate-800 p-2.5 text-slate-300 transition hover:border-slate-700 hover:text-white light:border-slate-200 light:text-slate-600 light:hover:text-slate-900"
    >
      {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6 },
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="glow-orb left-[15%] top-[8%] h-64 w-64 bg-indigo-500/10" />
        <div className="glow-orb right-[10%] top-[25%] h-72 w-72 bg-sky-500/10" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/75 backdrop-blur-xl light:border-slate-200/70 light:bg-white/80">
        <div className="container-premium flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">ScholarPath</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link className="text-sm text-slate-400 transition hover:text-white light:text-slate-600 light:hover:text-slate-950" href="/universities">
              Universities
            </Link>
            <Link className="text-sm text-slate-400 transition hover:text-white light:text-slate-600 light:hover:text-slate-950" href="/scholarships">
              Scholarships
            </Link>
            <Link className="text-sm text-slate-400 transition hover:text-white light:text-slate-600 light:hover:text-slate-950" href="/resources">
              Resources
            </Link>
            <Link className="text-sm text-slate-400 transition hover:text-white light:text-slate-600 light:hover:text-slate-950" href="/tools">
              Tools
            </Link>
            <Link className="text-sm text-slate-400 transition hover:text-white light:text-slate-600 light:hover:text-slate-950" href="/ai-assistant">
              ScholarPath AI
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              href="/login"
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white light:text-slate-700 light:hover:text-slate-950"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-500"
            >
              Get started
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            className="rounded-xl border border-slate-800 p-2.5 text-slate-300 md:hidden"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-800/70 px-4 py-5 md:hidden light:border-slate-200">
            <nav className="container-premium flex flex-col gap-2">
              {[
                ["Universities", "/universities"],
                ["Scholarships", "/scholarships"],
                ["Resources", "/resources"],
                ["Tools", "/tools"],
                ["ScholarPath AI", "/ai-assistant"],
                ["Applications", "/applications"],
                ["Dashboard", "/dashboard"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/5 light:text-slate-700 light:hover:bg-slate-100"
                >
                  {label}
                </Link>
              ))}

              <div className="mt-3 flex items-center gap-3 border-t border-slate-800 pt-4 light:border-slate-200">
                <ThemeToggle />
                <Link
                  href="/signup"
                  className="flex-1 rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Get started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="container-premium grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="max-w-3xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/5 px-3.5 py-2 text-xs font-medium text-indigo-200 light:border-indigo-200 light:bg-indigo-50 light:text-indigo-700">
              <Zap className="h-3.5 w-3.5" />
              Built for the next generation of global students
            </div>

            <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.045em] text-gradient sm:text-6xl lg:text-7xl">
              Your Future Starts With the Right Opportunity.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl light:text-slate-600">
              Discover universities, scholarships, financial aid and application
              opportunities matched to your goals.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/scholarships"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-500"
              >
                Find My Scholarships
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/universities"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.07] light:border-slate-300 light:bg-white light:text-slate-900 light:hover:bg-slate-50"
              >
                Explore Universities
                <Globe2 className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Free to explore
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Built for international students
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Demo data clearly labeled
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.15 }}
          >
            <GlobeVisual />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="container-premium pb-16">
          <div className="grid overflow-hidden rounded-3xl border border-slate-800 bg-white/[0.025] sm:grid-cols-3 light:border-slate-200 light:bg-white">
            {[
              ["50K+", "Students", Users],
              ["1,200+", "Universities", GraduationCap],
              ["8,500+", "Scholarships", Award],
            ].map(([number, label, Icon], index) => (
              <motion.div
                key={label as string}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-slate-800 p-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 light:border-slate-200"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-indigo-400" />
                  <span className="text-3xl font-bold tracking-tight">
                    {number as string}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{label as string}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-3 text-center text-[11px] text-slate-600">
            Demo interface figures — not verified real-world statistics.
          </p>
        </div>
      </section>

      {/* Feature section */}
      <section className="border-t border-slate-800/70 py-24 light:border-slate-200">
        <div className="container-premium">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              One focused workspace
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Your journey, simplified.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400 light:text-slate-600">
              Everything you need to move from “I want to study abroad” to a
              clear, organized application plan.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: shouldReduceMotion ? 0 : 0.5,
                        delay: index * 0.08,
                      },
                    },
                  }}
                >
                  <Link
                    href={feature.href}
                    className="card-hover group block h-full rounded-3xl border border-slate-800 bg-white/[0.025] p-7 light:border-slate-200 light:bg-white"
                  >
                    <div className="flex items-start justify-between">
                      <div className="rounded-2xl border border-indigo-400/15 bg-indigo-400/10 p-3.5 text-indigo-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-600 transition group-hover:translate-x-1 group-hover:text-indigo-400" />
                    </div>

                    <h3 className="mt-7 text-xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-lg leading-7 text-slate-500">
                      {feature.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* University discovery */}
      <section className="py-24">
        <div className="container-premium">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                University explorer
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Discover where you could belong.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-400 light:text-slate-600">
                Search by destination, major, tuition and financial aid
                preferences.
              </p>
            </div>

            <Link
              href="/universities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Explore all universities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {universities.map((university) => (
              <article
                key={university.name}
                className="card-hover rounded-3xl border border-slate-800 bg-white/[0.025] p-6 light:border-slate-200 light:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-indigo-300 light:bg-slate-100">
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  <span className="rounded-full border border-slate-700 px-2.5 py-1 text-[10px] text-slate-500 light:border-slate-200">
                    {university.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {university.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {university.location}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {university.programs.map((program) => (
                    <span
                      key={program}
                      className="rounded-lg bg-slate-800/80 px-2.5 py-1.5 text-xs text-slate-400 light:bg-slate-100"
                    >
                      {program}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-slate-800 pt-5 text-sm text-emerald-400 light:border-slate-200">
                  <WalletCards className="h-4 w-4" />
                  {university.aid}
                </div>

                <Link
                  href="/universities"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400"
                >
                  View university
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-slate-600">
            Universities shown above use demo data until verified external
            university data is connected.
          </p>
        </div>
      </section>

      {/* Scholarships */}
      <section className="border-y border-slate-800/70 py-24 light:border-slate-200">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                <Target className="h-6 w-6" />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Scholarship finder
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Find scholarships built around you.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400 light:text-slate-600">
                Start with your academic profile, intended major, destination
                and budget. ScholarPath can then score demo opportunities
                against your profile.
              </p>

              <Link
                href="/scholarships"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Start matching
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {scholarships.map((scholarship) => (
                <article
                  key={scholarship.name}
                  className="rounded-2xl border border-slate-800 bg-white/[0.025] p-5 light:border-slate-200 light:bg-white"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                        <Award className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold">{scholarship.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {scholarship.organization}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2 text-xs">
                          <span className="rounded-lg bg-emerald-400/10 px-2.5 py-1.5 text-emerald-400">
                            {scholarship.coverage}
                          </span>
                          <span className="rounded-lg bg-slate-800 px-2.5 py-1.5 text-slate-500 light:bg-slate-100">
                            {scholarship.deadline}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-[130px]">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">Demo match</span>
                        <span className="font-semibold text-indigo-300">
                          {scholarship.match}%
                        </span>
                      </div>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800 light:bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${scholarship.match}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9 }}
                          className="h-full rounded-full bg-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-7 text-center text-xs text-slate-600">
            Scholarship names, organizations, deadlines and match scores above
            are demo data, not verified opportunities.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              How ScholarPath works
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From ambition to an organized plan.
            </h2>

            <p className="mt-5 leading-7 text-slate-400 light:text-slate-600">
              One profile powers a more focused discovery and planning
              experience.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: index * 0.08,
                }}
                className="relative rounded-3xl border border-slate-800 bg-white/[0.025] p-6 light:border-slate-200 light:bg-white"
              >
                <span className="text-sm font-bold text-indigo-400">
                  {step.number}
                </span>

                <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview */}
      <section className="pb-24">
        <div className="container-premium">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-indigo-500/10 via-transparent to-sky-500/5 p-8 sm:p-12 light:border-slate-200">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  One student workspace
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Stop keeping your application journey in ten different
                  places.
                </h2>

                <p className="mt-5 leading-7 text-slate-400 light:text-slate-600">
                  Save universities, compare options, track applications and
                  keep upcoming deadlines visible.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    ["Application tracking", CheckCircle2],
                    ["Deadline planning", TrendingUp],
                    ["Profile matching", BarChart3],
                  ].map(([label, Icon]) => (
                    <span
                      key={label as string}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/40 px-3 py-2 text-xs text-slate-400 light:border-slate-200 light:bg-white"
                    >
                      <Icon className="h-4 w-4 text-indigo-400" />
                      {label as string}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-2xl light:border-slate-200 light:bg-white">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 light:border-slate-200">
                  <div>
                    <p className="text-sm font-semibold">Application overview</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Demo student workspace
                    </p>
                  </div>
                  <BarChart3 className="h-5 w-5 text-indigo-400" />
                </div>

                <div className="grid grid-cols-2 gap-3 py-5 sm:grid-cols-4">
                  {[
                    ["04", "Applications"],
                    ["12", "Matches"],
                    ["03", "Deadlines"],
                    ["07", "Saved"],
                  ].map(([number, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-800 bg-white/[0.025] p-4 light:border-slate-200"
                    >
                      <p className="text-2xl font-bold">{number}</p>
                      <p className="mt-1 text-[11px] text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {["University application", "Scholarship application", "Personal statement"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-800 p-4 light:border-slate-200"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm font-medium">{item}</p>
                            <p className="mt-1 text-xs text-slate-500">
                              {index === 0
                                ? "Preparing"
                                : index === 1
                                  ? "Documents"
                                  : "Ready"}
                            </p>
                          </div>

                          <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-800 light:bg-slate-100">
                            <div
                              className="h-full rounded-full bg-indigo-500"
                              style={{
                                width: `${[64, 42, 88][index]}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-800 py-24 light:border-slate-200">
        <div className="container-premium text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
              <Sparkles className="h-7 w-7" />
            </div>

            <h2 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl">
              Your next opportunity starts here.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400 light:text-slate-600">
              Build your profile, discover possibilities and turn your study
              abroad goals into a clear plan.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition hover:bg-indigo-500"
              >
                Start your journey
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/universities"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 light:border-slate-300 light:text-slate-900"
              >
                Explore opportunities
                <Search className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 light:border-slate-200">
        <div className="container-premium">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="font-bold">ScholarPath</span>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
                Your Future Starts With the Right Opportunity.
              </p>

              <p className="mt-4 text-xs text-slate-600">
                Demo product — opportunity data must be verified before real
                application use.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold">Discover</p>
              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <Link className="block hover:text-indigo-400" href="/universities">
                  Universities
                </Link>
                <Link className="block hover:text-indigo-400" href="/scholarships">
                  Scholarships
                </Link>
                <Link className="block hover:text-indigo-400" href="/compare">
                  Compare
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold">Plan</p>
              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <Link className="block hover:text-indigo-400" href="/applications">
                  Applications
                </Link>
                <Link className="block hover:text-indigo-400" href="/resources">
                  Resources
                </Link>
                <Link className="block hover:text-indigo-400" href="/tools">
                  Tools
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold">ScholarPath</p>
              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <Link className="block hover:text-indigo-400" href="/ai-assistant">
                  AI Assistant
                </Link>
                <Link className="block hover:text-indigo-400" href="/dashboard">
                  Dashboard
                </Link>
                <Link className="block hover:text-indigo-400" href="/profile">
                  Profile
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between light:border-slate-200">
            <p>© 2026 ScholarPath. Demo product.</p>
            <p>Built for the future of international education.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
