import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageSquare, CalendarPlus, ShieldCheck, FileText, Building2, Sparkles } from "lucide-react";
import advisorPortrait from "../assets/advisor-1.jpg";

export const Route = createFileRoute("/portal/")({
  component: DashboardHome,
});

const QUICK_STATS = [
  { label: "Active companies", value: "3", hint: "Mainland & free zone" },
  { label: "Open milestones", value: "2", hint: "On schedule" },
  { label: "Documents secured", value: "47", hint: "Encrypted vault" },
  { label: "Next renewal", value: "84 days", hint: "Trade licence — Sahel Tech LLC" },
];

const TIMELINE = [
  { label: "Initial Consultation", status: "complete" },
  { label: "Documentation Review", status: "complete" },
  { label: "Government Submission", status: "current" },
  { label: "Licence Approval", status: "upcoming" },
  { label: "Visa Processing", status: "upcoming" },
  { label: "Ongoing Compliance", status: "upcoming" },
];

function DashboardHome() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="space-y-10">
      {/* Welcome */}
      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="lift-card p-8 lg:p-10">
          <p className="eyebrow">Private client concierge</p>
          <h1 className="editorial-h2 mt-3 text-foreground">
            {greeting}, Mr. Ahmed.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Your dedicated FELTA corporate advisor is available to assist you. Three matters
            are progressing this week — all on schedule.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={"/portal/messages" as string}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <MessageSquare className="h-4 w-4" /> Open private chat
            </Link>
            <Link
              to={"/portal/appointments" as string}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
            >
              <CalendarPlus className="h-4 w-4" /> Schedule a meeting
            </Link>
          </div>
        </div>

        {/* Advisor card */}
        <div className="lift-card overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 p-6 border-b border-border/50">
              <img
                src={advisorPortrait}
                alt="Khalid Al Hashimi"
                className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <p className="eyebrow text-[10px]">Your dedicated advisor</p>
                <p className="font-display text-xl mt-1">Khalid Al Hashimi</p>
                <p className="text-xs text-muted-foreground">Senior Corporate Partner</p>
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1">
              <a href="tel:+97125550100" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                +971 2 555 0100
              </a>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Available Sun–Thu, 8:30–18:30 GST. For urgent matters outside business hours, our concierge desk responds within 30 minutes.
              </p>
            </div>
            <div className="grid grid-cols-2 border-t border-border/50">
              <Link to={"/portal/messages" as string} className="py-3 text-center text-xs font-medium border-r border-border/50 hover:bg-secondary transition-colors">
                Message
              </Link>
              <Link to={"/portal/appointments" as string} className="py-3 text-center text-xs font-medium hover:bg-secondary transition-colors">
                Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {QUICK_STATS.map((s) => (
          <div key={s.label} className="lift-card p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
            <p className="font-display text-3xl mt-3 text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1.5">{s.hint}</p>
          </div>
        ))}
      </section>

      {/* Journey */}
      <section>
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="eyebrow">Corporate journey</p>
            <h2 className="editorial-h2 mt-2 text-3xl">Where your matter stands today</h2>
          </div>
          <Link to={"/portal/journey" as string} className="hidden md:inline-flex items-center gap-1 text-sm text-primary hover:opacity-80">
            Full timeline <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lift-card p-6 md:p-8 overflow-x-auto">
          <ol className="flex items-start gap-2 min-w-[720px]">
            {TIMELINE.map((step, i) => (
              <li key={step.label} className="flex-1 flex flex-col items-center text-center">
                <div className="flex items-center w-full">
                  <div className={`flex-1 h-px ${i === 0 ? "opacity-0" : step.status === "upcoming" ? "bg-border" : "bg-primary"}`} />
                  <div className={`relative h-9 w-9 rounded-full flex items-center justify-center text-[11px] font-medium border ${
                    step.status === "complete"
                      ? "bg-primary text-primary-foreground border-primary"
                      : step.status === "current"
                        ? "bg-highlight text-highlight-foreground border-primary ring-4 ring-primary/15"
                        : "bg-card text-muted-foreground border-border"
                  }`}>
                    {i + 1}
                  </div>
                  <div className={`flex-1 h-px ${i === TIMELINE.length - 1 ? "opacity-0" : step.status === "complete" ? "bg-primary" : "bg-border"}`} />
                </div>
                <p className="mt-3 text-xs font-medium text-foreground/90 max-w-[110px]">{step.label}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{step.status}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Two-column quick actions */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="lift-card p-7">
          <div className="flex items-center gap-2 text-primary"><Sparkles className="h-4 w-4" /><p className="eyebrow text-[10px]">This week</p></div>
          <h3 className="font-display text-2xl mt-2">Three matters in motion</h3>
          <ul className="mt-5 space-y-4">
            {[
              { icon: Building2, title: "Sahel Tech LLC — trade licence renewal", date: "Submitted to DED · awaiting confirmation" },
              { icon: FileText, title: "Shareholder agreement — Capella Holdings", date: "Drafted · ready for your review" },
              { icon: ShieldCheck, title: "VAT quarterly filing", date: "Due 28 days — handled by FELTA" },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lift-card p-7">
          <p className="eyebrow text-[10px]">Concierge note</p>
          <h3 className="font-display text-2xl mt-2">A personal message from Khalid</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            "Welcome back, Mr. Ahmed. I've reviewed the updated draft of the Capella shareholder
            agreement and added two comments for your consideration. The DED renewal is on
            track — I expect confirmation within the week. Please let me know if Tuesday at
            11:00 GST works for our quarterly review."
          </p>
          <Link to={"/portal/messages" as string} className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
            Reply privately <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}