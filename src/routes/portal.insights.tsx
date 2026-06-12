import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import i1 from "../assets/insight-1.jpg";
import i2 from "../assets/insight-2.jpg";
import i3 from "../assets/insight-3.jpg";
import i4 from "../assets/insight-4.jpg";
import i5 from "../assets/insight-5.jpg";

export const Route = createFileRoute("/portal/insights")({
  component: InsightsLounge,
});

const FEATURED = { tag: "Regulatory", title: "What the 2026 UAE corporate-tax recalibration means for holding structures", read: "9 min read", img: i1 };
const ARTICLES = [
  { tag: "Compliance", title: "ESR notifications: a quiet revolution in evidence requirements", read: "5 min", img: i2 },
  { tag: "Growth", title: "From Abu Dhabi mainland to ADGM — when a redomiciliation pays off", read: "7 min", img: i3 },
  { tag: "Tax", title: "Quarterly VAT health check: five reconciliations worth automating", read: "4 min", img: i4 },
  { tag: "Market", title: "Sectoral opportunities in Abu Dhabi's 2026 industrial roadmap", read: "8 min", img: i5 },
];

function InsightsLounge() {
  return (
    <div className="space-y-10">
      <header>
        <p className="eyebrow">Insights lounge</p>
        <h1 className="editorial-h2 mt-2 text-foreground">Curated reading for the FELTA client</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">Editorial commentary on regulation, growth, tax and the UAE business landscape — written by our advisory team.</p>
      </header>

      <article className="lift-card lift-card-hover overflow-hidden grid md:grid-cols-2">
        <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
          <img src={FEATURED.img} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <p className="eyebrow text-[10px]">{FEATURED.tag} · Featured</p>
          <h2 className="editorial-h2 mt-3 text-3xl lg:text-4xl">{FEATURED.title}</h2>
          <p className="mt-4 text-sm text-muted-foreground">{FEATURED.read}</p>
          <button className="mt-6 inline-flex items-center gap-1 text-sm text-primary w-fit">Read essay <ArrowRight className="h-4 w-4" /></button>
        </div>
      </article>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {ARTICLES.map((a) => (
          <article key={a.title} className="lift-card lift-card-hover overflow-hidden flex flex-col">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={a.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="eyebrow text-[10px]">{a.tag}</p>
              <h3 className="font-display text-xl mt-2 leading-snug flex-1">{a.title}</h3>
              <p className="text-xs text-muted-foreground mt-3">{a.read}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}