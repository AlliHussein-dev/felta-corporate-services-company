import { createFileRoute } from "@tanstack/react-router";
import { Download, CreditCard, Landmark, Lock } from "lucide-react";

export const Route = createFileRoute("/portal/invoices")({
  component: InvoicesPage,
});

const INVOICES = [
  { id: "INV-2025-019", desc: "Trade licence renewal Sahel Tech LLC", date: "12 Mar 2025", amount: "AED 8,420", status: "Due" },
  { id: "INV-2025-014", desc: "ADGM registration Capella Holdings", date: "01 Mar 2025", amount: "AED 21,300", status: "Paid" },
  { id: "INV-2025-009", desc: "Quarterly VAT filing", date: "28 Feb 2025", amount: "AED 1,500", status: "Paid" },
  { id: "INV-2025-004", desc: "Investor visa processing 2 applicants", date: "14 Jan 2025", amount: "AED 6,800", status: "Paid" },
];

function InvoicesPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="eyebrow">Financial centre</p>
        <h1 className="editorial-h2 mt-2 text-foreground">Invoices &amp; billing</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">A discreet record of every service charge and government fee, with secure payment options.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="lift-card p-6">
          <p className="eyebrow text-[10px]">Outstanding</p>
          <p className="font-display text-3xl mt-3">AED 8,420</p>
          <p className="text-xs text-muted-foreground mt-1">1 invoice · due in 9 days</p>
        </div>
        <div className="lift-card p-6">
          <p className="eyebrow text-[10px]">Year to date</p>
          <p className="font-display text-3xl mt-3">AED 38,020</p>
          <p className="text-xs text-muted-foreground mt-1">Across 7 services</p>
        </div>
        <div className="lift-card p-6">
          <p className="eyebrow text-[10px]">Upcoming fees</p>
          <p className="font-display text-3xl mt-3">AED 12,150</p>
          <p className="text-xs text-muted-foreground mt-1">Government fees Q2 2025</p>
        </div>
      </div>

      <div className="lift-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-[10px] uppercase tracking-[0.18em] text-muted-foreground text-left">
            <tr>
              <th className="px-6 py-4 font-medium">Invoice</th>
              <th className="px-6 py-4 font-medium hidden md:table-cell">Service</th>
              <th className="px-6 py-4 font-medium hidden lg:table-cell">Date</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {INVOICES.map((inv) => (
              <tr key={inv.id} className="hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4 font-medium">{inv.id}</td>
                <td className="px-6 py-4 hidden md:table-cell text-muted-foreground">{inv.desc}</td>
                <td className="px-6 py-4 hidden lg:table-cell text-muted-foreground">{inv.date}</td>
                <td className="px-6 py-4 font-medium">{inv.amount}</td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border ${
                    inv.status === "Paid"
                      ? "border-accent/40 text-accent bg-accent/5"
                      : "border-primary/40 text-primary bg-primary/5"
                  }`}>{inv.status}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    {inv.status === "Due" && (
                      <button className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Pay securely</button>
                    )}
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary" aria-label="Download"><Download className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="lift-card p-7">
          <div className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-primary" /><p className="eyebrow text-[10px]">Card on file</p></div>
          <p className="font-display text-2xl mt-3">•••• •••• •••• 4421</p>
          <p className="text-xs text-muted-foreground mt-1">Visa Platinum · expires 04 / 27</p>
          <div className="mt-4 flex items-center gap-2 text-[11px] text-muted-foreground">
            <Lock className="h-3 w-3" /> PCI-DSS Level 1 · 3-D Secure
          </div>
        </div>
        <div className="lift-card p-7">
          <div className="flex items-center gap-2"><Landmark className="h-4 w-4 text-primary" /><p className="eyebrow text-[10px]">Bank transfer</p></div>
          <p className="font-display text-2xl mt-3">First Abu Dhabi Bank</p>
          <p className="text-xs text-muted-foreground mt-1">IBAN AE07 0331 ••• ••• 0421 · Beneficiary: FELTA Corporate Services Provider</p>
        </div>
      </section>
    </div>
  );
}