import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { UploadCloud, ShieldCheck, FileText, Download, Eye, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/portal/documents")({
  component: DocumentsPage,
});

const CATEGORIES = [
  { key: "passports", label: "Passports", count: 6 },
  { key: "licences", label: "Trade Licences", count: 8 },
  { key: "shareholder", label: "Shareholder Agreements", count: 4 },
  { key: "financial", label: "Financial Statements", count: 12 },
  { key: "government", label: "Government Certificates", count: 17 },
];

const FILES = [
  { name: "Sahel Tech LLC Trade Licence 2025.pdf", category: "Trade Licences", size: "412 KB", date: "12 Mar 2025", expires: "12 Mar 2026", warning: true },
  { name: "Ahmed Al Mansoori Passport (UAE).pdf", category: "Passports", size: "1.2 MB", date: "04 Jan 2025", expires: " " },
  { name: "Capella Holdings Shareholder Agreement.pdf", category: "Shareholder Agreements", size: "780 KB", date: "08 Sep 2024", expires: " " },
  { name: "VAT Quarterly Return Q1 2025.pdf", category: "Financial Statements", size: "212 KB", date: "28 Apr 2025", expires: " " },
  { name: "MOIAT Industrial Activity Approval.pdf", category: "Government Certificates", size: "326 KB", date: "17 Feb 2025", expires: "17 Feb 2027" },
];

function DocumentsPage() {
  const [active, setActive] = useState<string>("all");

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Secure document vault</p>
          <h1 className="editorial-h2 mt-2 text-foreground">Documents</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            All files are encrypted at rest with AES-256 and accessible only to you and your dedicated advisor.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-primary">
          <ShieldCheck className="h-3.5 w-3.5" /> Encrypted storage
        </span>
      </header>

      {/* Upload */}
      <div className="lift-card border-dashed border-primary/30 bg-secondary/30 p-10 text-center">
        <UploadCloud className="mx-auto h-10 w-10 text-primary" />
        <p className="mt-4 font-display text-2xl">Drag files to upload</p>
        <p className="mt-2 text-sm text-muted-foreground">PDF, DOCX, JPG or PNG · Max 25 MB · Auto-encrypted on arrival</p>
        <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          Choose files
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
            active === "all" ? "bg-foreground text-background" : "bg-card border border-border hover:bg-secondary"
          }`}
        >
          All documents · {FILES.length}
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
              active === c.key ? "bg-foreground text-background" : "bg-card border border-border hover:bg-secondary"
            }`}
          >
            {c.label} · {c.count}
          </button>
        ))}
      </div>

      {/* File list */}
      <div className="lift-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-left">
            <tr className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <th className="px-6 py-4 font-medium">Document</th>
              <th className="px-6 py-4 font-medium hidden md:table-cell">Category</th>
              <th className="px-6 py-4 font-medium hidden lg:table-cell">Uploaded</th>
              <th className="px-6 py-4 font-medium hidden lg:table-cell">Expires</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {FILES.map((f) => (
              <tr key={f.name} className="hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary"><FileText className="h-4 w-4 text-primary" /></span>
                    <div>
                      <p className="font-medium text-foreground">{f.name}</p>
                      <p className="text-xs text-muted-foreground">{f.size}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 hidden md:table-cell text-muted-foreground">{f.category}</td>
                <td className="px-6 py-4 hidden lg:table-cell text-muted-foreground">{f.date}</td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  {f.warning ? (
                    <span className="inline-flex items-center gap-1 text-xs text-primary">
                      <AlertTriangle className="h-3.5 w-3.5" /> {f.expires}
                    </span>
                  ) : (
                    <span className="text-muted-foreground">{f.expires}</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-1">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary" aria-label="Preview"><Eye className="h-4 w-4" /></button>
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary" aria-label="Download"><Download className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}