import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export const Route = createFileRoute("/portal/journey")({
  component: JourneyPage,
});

const STEPS = [
  { title: "Initial Consultation", date: "10 Feb 2025", status: "complete", body: "Discovery meeting with Khalid Al Hashimi. Outlined goals for Sahel Tech LLC expansion into ADGM." },
  { title: "Documentation Review", date: "22 Feb 2025", status: "complete", body: "Passports, MoA, board resolutions and supporting evidence reviewed and uploaded to your secure vault." },
  { title: "Government Submissions", date: "08 Mar 2025", status: "current", body: "Applications filed with DED and ADGM Registration Authority. Tracking confirmation — expected within the week." },
  { title: "Licence Approvals", date: "Expected late March", status: "upcoming", body: "Trade licence and commercial registration issuance. We coordinate notarisation and translations on your behalf." },
  { title: "Visa Processing", date: "April 2025", status: "upcoming", body: "Investor and employment visas, Emirates ID enrolment, and medical scheduling — fully concierged." },
  { title: "Ongoing Compliance", date: "Quarterly", status: "upcoming", body: "VAT filings, ESR reports, UBO declarations and annual renewals — handled silently in the background." },
];

function JourneyPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="eyebrow">Business journey</p>
        <h1 className="editorial-h2 mt-2 text-foreground">Your corporate journey, chapter by chapter</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A transparent narrative of every milestone in your engagement with FELTA — past, present and forthcoming.
        </p>
      </header>

      <div className="lift-card p-8 lg:p-12">
        <ol className="relative border-l border-border/70 pl-8 space-y-10">
          {STEPS.map((s) => {
            const Icon = s.status === "complete" ? CheckCircle2 : s.status === "current" ? Clock : Circle;
            const tone =
              s.status === "complete"
                ? "text-primary"
                : s.status === "current"
                  ? "text-foreground"
                  : "text-muted-foreground";
            return (
              <li key={s.title} className="relative">
                <span className={`absolute -left-[44px] top-0 flex h-9 w-9 items-center justify-center rounded-full border bg-background ${
                  s.status === "complete" ? "border-primary" : s.status === "current" ? "border-primary ring-4 ring-primary/15" : "border-border"
                }`}>
                  <Icon className={`h-4 w-4 ${tone}`} />
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.date}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-2xl">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}