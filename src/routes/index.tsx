import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../components/reveal";
import heroAbuDhabi from "../assets/hero-abudhabi.jpg";
import heroConsultation from "../assets/hero-consultation.jpg";
import officeInterior from "../assets/office-interior.jpg";
import serviceFormation from "../assets/service-formation.jpg";
import serviceResidency from "../assets/service-residency.jpg";
import serviceFinancial from "../assets/service-financial.jpg";
import serviceGovernment from "../assets/service-government.jpg";
import industryTech from "../assets/industry-tech.jpg";
import industryRealestate from "../assets/industry-realestate.jpg";
import industryHealthcare from "../assets/industry-healthcare.jpg";
import journey1 from "../assets/journey-1.jpg";
import advisor1 from "../assets/advisor-1.jpg";
import advisor2 from "../assets/advisor-2.jpg";
import advisor3 from "../assets/advisor-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FELTA Trusted Corporate Services Partner in Abu Dhabi" },
      {
        name: "description",
        content:
          "From company formation and residency to financial management and compliance, FELTA delivers personalized advisory designed around your ambitions in the UAE.",
      },
      { property: "og:title", content: "FELTA Trusted Corporate Services Partner in Abu Dhabi" },
      {
        property: "og:description",
        content:
          "A premium Abu Dhabi advisory firm for investors, entrepreneurs and international enterprises.",
      },
      { property: "og:image", content: heroAbuDhabi },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "FELTA Corporate Services Provider",
          image: heroAbuDhabi,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hamdan Street, Al Danah, Zone 1",
            addressLocality: "Abu Dhabi",
            addressCountry: "AE",
          },
          areaServed: "AE",
          description:
            "Business formation, residency, accounting, compliance and government relations advisory in Abu Dhabi.",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustRibbon />
      <StoryTeaser />
      <ServicesShowcase />
      <IndustriesTeaser />
      <JourneyTeaser />
      <AdvisorsTeaser />
      <ExperienceTimeline />
      <ContactCTA />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative h-dvh min-h-[760px] w-full overflow-hidden">
      <motion.img
        src={heroAbuDhabi}
        alt="Abu Dhabi skyline at golden hour seen from the Corniche"
        style={{ y, opacity }}
        className="absolute inset-0 h-[120%] w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/45 to-foreground/80" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 lg:px-12 lg:pb-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-highlight"
        >
          <span className="rule-divider mr-3 bg-highlight" />
          Abu Dhabi · Established Corporate Advisory
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-h1 mt-6 max-w-4xl text-background"
        >
          Your trusted partner for building and growing businesses in the UAE.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-background/85"
        >
          From company formation and residency solutions to financial management and
          corporate compliance, FELTA delivers personalized advisory services designed
          around your ambitions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Book a Private Consultation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/portal"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Access Client Concierge
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TrustRibbon() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-[1400px] px-6 py-7 lg:px-12">
        <p className="text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          <span className="rule-divider mr-4" />
          Supporting investors, entrepreneurs, family businesses, and international
          enterprises.
          <span className="rule-divider ml-4" />
        </p>
      </div>
    </section>
  );
}

function StoryTeaser() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative">
          <img
            src={officeInterior}
            alt="FELTA executive office with warm ivory walls and walnut desk"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
            width={1600}
            height={1100}
          />
          <div className="absolute -bottom-8 -right-4 hidden h-40 w-40 items-center justify-center rounded-full bg-highlight text-highlight-foreground sm:flex">
            <div className="text-center">
              <p className="font-display text-3xl leading-none">15+</p>
              <p className="eyebrow mt-2 text-[10px] text-foreground/70">
                Years of advisory
              </p>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow"><span className="rule-divider mr-3" />The FELTA Story</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="editorial-h2 mt-6 max-w-xl">
              A trusted business companion through every chapter of your UAE journey.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Based in Al Danah on Hamdan Street, FELTA was founded on a simple
              conviction: businesses thrive when they are guided by advisors who treat
              every relationship as a long-term partnership. We pair deep local
              knowledge of Abu Dhabi with an international perspective shaped by
              clients on five continents.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We do not process documents. We build companies, manage compliance, and
              steward growth quietly, attentively, and for the long term.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Read our full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    no: "01",
    title: "Business Formation & Expansion",
    blurb:
      "Mainland and Free Zone registration, corporate restructuring, and strategic entry guidance for founders and international groups.",
    img: serviceFormation,
    alt: "Founders reviewing a company formation document with a senior advisor",
  },
  {
    no: "02",
    title: "Residency & Immigration",
    blurb:
      "Investor, executive and family residency journeys handled with discretion, accuracy, and personal care.",
    img: serviceResidency,
    alt: "International family receiving residency paperwork from an Emirati advisor",
  },
  {
    no: "03",
    title: "Financial Management & Compliance",
    blurb:
      "Accounting, bookkeeping, VAT services and audit preparation, shaped around how your business actually runs.",
    img: serviceFinancial,
    alt: "Financial advisors studying P&L reports and a dashboard tablet on marble desk",
  },
  {
    no: "04",
    title: "Government Relations & PRO",
    blurb:
      "Official documentation, licensing support and regulatory coordination, delivered by people who know the corridors.",
    img: serviceGovernment,
    alt: "Government relations officer reviewing official UAE business licenses",
  },
];

function ServicesShowcase() {
  return (
    <section className="bg-secondary/70 py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-3xl">
          <p className="eyebrow"><span className="rule-divider mr-3" />Signature Services</p>
          <h2 className="editorial-h2 mt-6">
            Four practices. One advisory standard.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every engagement begins with understanding. From the first conversation,
            your dedicated advisor designs a path forward that fits your ambitions,
            your timing, and your risk appetite.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.06}>
              <Link
                to="/services"
                className="lift-card lift-card-hover group block overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    width={1400}
                    height={1000}
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl text-primary">{s.no}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl lg:text-3xl">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground">{s.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Explore the practice
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesTeaser() {
  const items = [
    { img: industryTech, label: "Technology" },
    { img: industryRealestate, label: "Real Estate" },
    { img: industryHealthcare, label: "Healthcare" },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal className="max-w-2xl">
          <p className="eyebrow"><span className="rule-divider mr-3" />Industries we serve</p>
          <h2 className="editorial-h2 mt-6">
            A practice shaped by the diversity of our clients.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View all industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 0.08}>
            <Link
              to="/industries"
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src={it.img}
                alt={it.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                width={1200}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <h3 className="font-display text-2xl text-background">{it.label}</h3>
                <ArrowUpRight className="h-5 w-5 text-background transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function JourneyTeaser() {
  return (
    <section className="bg-foreground text-background py-28 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:px-12">
        <Reveal>
          <img
            src={journey1}
            alt="European entrepreneur on a balcony with the Abu Dhabi skyline behind her"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
            width={1200}
            height={1500}
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow text-highlight"><span className="rule-divider mr-3 bg-highlight" />A Success Journey</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="editorial-h2 mt-6 text-background">
              “FELTA carried us from a first conversation to a fully operating UAE
              business and then stayed.”
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-background/75">
              A European founder arrived in Abu Dhabi with an ambitious plan and
              limited time. Our team handled the licensing, residency, and bank
              relationships and continues to support the company as it scales across
              the GCC.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/journeys"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-highlight"
            >
              Read client journeys
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AdvisorsTeaser() {
  const advisors = [
    { img: advisor1, name: "Layla Al-Mansoori", role: "Managing Partner" },
    { img: advisor2, name: "Saif Al-Hashimi", role: "Government Relations Director" },
    { img: advisor3, name: "Priya Raman", role: "Financial Compliance Lead" },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
      <Reveal className="max-w-3xl">
        <p className="eyebrow"><span className="rule-divider mr-3" />Meet our advisors</p>
        <h2 className="editorial-h2 mt-6">
          Senior professionals who answer their own phones.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {advisors.map((a, i) => (
          <Reveal key={a.name} delay={i * 0.08} className="group">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={a.img}
                alt={`Portrait of ${a.name}`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                width={900}
                height={1100}
              />
            </div>
            <h3 className="mt-6 font-display text-2xl">{a.name}</h3>
            <p className="mt-1 eyebrow text-muted-foreground text-[11px]">{a.role}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-12">
        <Link
          to="/advisors"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary"
        >
          Meet the full team
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}

const STEPS = [
  ["01", "Private Discovery Meeting", "We listen first ambitions, constraints, timeline."],
  ["02", "Strategic Business Planning", "A bespoke roadmap built around your structure of choice."],
  ["03", "Documentation & Preparation", "Every form, attestation and translation, handled with care."],
  ["04", "Government Coordination", "Direct liaison with the right desks and authorities."],
  ["05", "Company Launch", "Trade licence in hand, operations ready, banking open."],
  ["06", "Continuous Partnership", "Ongoing compliance, advisory and quiet stewardship."],
] as const;

function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || !containerRef.current) return;

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    if (!isMobile) return;

    const container = containerRef.current;
    const items = Array.from(container.querySelectorAll("li"));
    if (items.length === 0) return;

    let current = 0;
    const interval = setInterval(() => {
      current = (current + 1) % items.length;
      items[current].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="bg-secondary/70 py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-3xl">
          <p className="eyebrow"><span className="rule-divider mr-3" />The FELTA Experience</p>
          <h2 className="editorial-h2 mt-6">Six chapters of a long partnership.</h2>
        </Reveal>
        <div
          ref={containerRef}
          className="mt-16 overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0"
        >
          <ol className="grid min-w-[900px] grid-cols-6 gap-6 lg:min-w-0">
            {STEPS.map(([no, title, desc], i) => (
              <Reveal as="div" delay={i * 0.05} key={no}>
                <li className="relative pt-6 list-none">
                  <div className="absolute left-0 right-0 top-0 h-px bg-border" />
                  <div className="absolute left-0 top-[-4px] h-2 w-2 rounded-full bg-primary" />
                  <p className="eyebrow text-primary">{no}</p>
                  <h3 className="mt-4 font-display text-xl leading-tight">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
      <Reveal className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-20 text-center text-background lg:px-20 lg:py-28">
        <img
          src={heroConsultation}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative">
          <p className="eyebrow text-highlight">
            <span className="rule-divider mr-3 bg-highlight" />
            Begin the conversation
          </p>
          <h2 className="editorial-h2 mx-auto mt-6 max-w-3xl text-background">
            Begin your UAE business journey with a private consultation.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-background/80">
            Visit us in Al Danah, Zone 1, on Hamdan Street, or arrange a virtual
            meeting with a senior advisor at a time that suits you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Book a Private Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-background/40 px-7 py-3.5 text-sm font-medium text-background hover:bg-background/10"
            >
              Visit our office
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
