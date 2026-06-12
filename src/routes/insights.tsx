import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import i1 from "../assets/insight-1.jpg";
import i2 from "../assets/insight-2.jpg";
import i3 from "../assets/insight-3.jpg";
import i4 from "../assets/insight-4.jpg";
import i5 from "../assets/insight-5.jpg";
import i6 from "../assets/insight-6.jpg";
import i7 from "../assets/insight-7.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Knowledge Center — FELTA" },
      { name: "description", content: "Editorial guides on UAE business setup, regulatory updates, VAT, and investor strategy from the FELTA advisory team." },
      { property: "og:title", content: "FELTA Insights" },
      { property: "og:description", content: "Editorial guides on UAE business, finance and compliance." },
      { property: "og:image", content: i1 },
    ],
  }),
  component: InsightsPage,
});

const ARTICLES = [
  { img: i1, tag: "Guide", title: "Choosing the right UAE jurisdiction in 2026", read: "8 min read" },
  { img: i2, tag: "Finance", title: "A practical primer on VAT for new UAE companies", read: "6 min read" },
  { img: i3, tag: "Investor", title: "What international investors should know before arriving", read: "5 min read" },
  { img: i4, tag: "Regulatory", title: "Corporate tax updates: what changes for SMEs", read: "7 min read" },
  { img: i5, tag: "Operations", title: "Year-end closing without the late nights", read: "4 min read" },
  { img: i6, tag: "Strategy", title: "Building a holding structure that ages well", read: "9 min read" },
  { img: i7, tag: "Advisory", title: "Employee visa quotas and workforce planning for 2026", read: "6 min read" },
];

function InsightsPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Reveal><p className="eyebrow"><span className="rule-divider mr-3" />Insights & Knowledge</p></Reveal>
          <Reveal delay={0.05}><h1 className="editorial-h1 mt-6 max-w-4xl">An editorial library for the UAE business builder.</h1></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-12">
        <Reveal className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <img src={ARTICLES[0].img} alt={ARTICLES[0].title} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div>
            <p className="eyebrow text-primary">Featured · {ARTICLES[0].tag}</p>
            <h2 className="editorial-h2 mt-4">{ARTICLES[0].title}</h2>
            <p className="mt-6 text-lg text-muted-foreground">A practical overview of Mainland, Free Zone and Offshore options, with the questions to ask before committing.</p>
            <p className="mt-6 eyebrow text-muted-foreground text-[11px]">{ARTICLES[0].read}</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] grid gap-10 px-6 pb-32 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {ARTICLES.slice(1).map((a, i) => (
          <Reveal key={i} delay={i * 0.05} className="group">
            <div className="overflow-hidden rounded-2xl">
              <img src={a.img} alt={a.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            </div>
            <p className="eyebrow mt-5 text-primary">{a.tag}</p>
            <h3 className="mt-3 font-display text-2xl leading-snug">{a.title}</h3>
            <p className="mt-3 eyebrow text-muted-foreground text-[11px]">{a.read}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}