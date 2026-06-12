import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, AlertTriangle, CalendarClock, FileCheck2 } from "lucide-react";

export const Route = createFileRoute("/portal/compliance")({
  component: CompliancePage,
});

const ITEMS = [
  { entity: "Sahel Tech LLC", item: "Trade licence renewal", due: "84 days", state: "Upcoming", note: "FELTA will file 21 days before expiry." },
  { entity: "Capella Holdings", item: "ADGM annual return", due: "212 days", state: "Upcoming", note: "Documentation collected — review in Q3." },
  { entity: "Sahel Tech LLC", item: "VAT return — Q1 2025", due: "28 days", state: "In Review", note: "Draft prepared by finance team for your approval." },
  { entity: "Mr. Ahmed Al Mansoori", item: "Investor visa renewal", due: "146 days", state: "Upcoming", note: "Medical scheduling will commence 60 days out." },
  { entity: "Sahel Tech LLC", item: "ESR notification", due: "Filed", state: "Completed", note: "Submitted to Ministry of Finance · 02 Feb 2025." },
];

const TONE: Record<string, string> = {
  Upcoming: "border-border text-muted-foreground bg-secondary/40",
  "In Review": "border-primary/40 text-primary bg-primary/5",
  Completed: "border-accent/40 text-accent bg-accent/5",
};

function CompliancePage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="eyebrow">Business health</p>
        <h1 className="editorial-h2 mt-2 text-foreground">Compliance &amp; renewals</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">A refined view of every regulatory obligation — quietly monitored on your behalf.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "All clear", value: "12", icon: ShieldCheck },
          { label: "In review", value: "3", icon: FileCheck2 },
          { label: "Action needed", value: "1", icon: AlertTriangle },
          { label: "Next 30 days", value: "2", icon: CalendarClock },
        ].map((s) => (
          <div key={s.label} className="lift-card p-5">
            <div className="flex items-center gap-2 text-primary"><s.icon className="h-4 w-4" /><p className="eyebrow text-[10px]">{s.label}</p></div>
            <p className="font-display text-3xl mt-3">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="lift-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-[10px] uppercase tracking-[0.18em] text-muted-foreground text-left">
            <tr>
              <th className="px-6 py-4 font-medium">Entity</th>
              <th className="px-6 py-4 font-medium">Obligation</th>
              <th className="px-6 py-4 font-medium hidden md:table-cell">Note</th>
              <th className="px-6 py-4 font-medium">Due</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {ITEMS.map((row) => (
              <tr key={`${row.entity}-${row.item}`} className="hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4 font-medium">{row.entity}</td>
                <td className="px-6 py-4">{row.item}</td>
                <td className="px-6 py-4 hidden md:table-cell text-muted-foreground text-xs">{row.note}</td>
                <td className="px-6 py-4 text-muted-foreground">{row.due}</td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border ${TONE[row.state]}`}>{row.state}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}