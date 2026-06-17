import { createFileRoute } from "@tanstack/react-router";
import { Building2, ArrowRight, MapPin, Calendar, UserRound } from "lucide-react";

export const Route = createFileRoute("/portal/companies")({
  component: CompaniesPage,
});

const COMPANIES = [
  {
    name: "Sahel Tech LLC",
    status: "Active",
    activity: "Software & IT Consulting",
    jurisdiction: "Abu Dhabi Mainland · DED",
    registered: "12 March 2022",
    renewal: "84 days",
    advisor: "Khalid Al Hashimi",
    tone: "primary",
  },
  {
    name: "Capella Holdings",
    status: "Active",
    activity: "Investment Holding",
    jurisdiction: "ADGM Free Zone",
    registered: "08 September 2023",
    renewal: "212 days",
    advisor: "Layla Saeed",
    tone: "accent",
  },
  {
    name: "Mira Hospitality FZ-LLC",
    status: "In Setup",
    activity: "Boutique Hospitality Operator",
    jurisdiction: "Twofour54 Free Zone",
    registered: "Pending May 2026",
    renewal: " ",
    advisor: "Khalid Al Hashimi",
    tone: "highlight",
  },
];

function CompaniesPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="eyebrow">Portfolio</p>
        <h1 className="editorial-h2 mt-2 text-foreground">My business portfolio</h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          A consolidated view of every entity FELTA manages on your behalf across mainland and free zone jurisdictions.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {COMPANIES.map((c) => (
          <article key={c.name} className="lift-card lift-card-hover p-7 flex flex-col">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                  <Building2 className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-display text-xl leading-tight">{c.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.activity}</p>
                </div>
              </div>
              <span className={`text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border ${
                c.status === "Active" ? "border-primary/40 text-primary bg-primary/5" : "border-highlight text-foreground bg-highlight/40"
              }`}>{c.status}</span>
            </div>

            <dl className="mt-6 space-y-3 text-sm flex-1">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <dt className="text-xs text-muted-foreground">Jurisdiction</dt>
                  <dd>{c.jurisdiction}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <dt className="text-xs text-muted-foreground">Registered</dt>
                  <dd>{c.registered}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UserRound className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <dt className="text-xs text-muted-foreground">Lead advisor</dt>
                  <dd>{c.advisor}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Next renewal</p>
                <p className="text-sm font-medium mt-0.5">{c.renewal}</p>
              </div>
              <button className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:opacity-80">
                View profile <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}