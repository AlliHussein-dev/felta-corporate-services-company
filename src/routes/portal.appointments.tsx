import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus, Video, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/portal/appointments")({
  component: AppointmentsPage,
});

const UPCOMING = [
  { title: "Quarterly business review", with: "Khalid Al Hashimi", date: "Tue, 18 Mar · 11:00 GST", mode: "In person", location: "FELTA HQ, Hamdan Street, Abu Dhabi" },
  { title: "ADGM registration walkthrough", with: "Layla Saeed", date: "Thu, 20 Mar · 14:30 GST", mode: "Virtual", location: "Microsoft Teams" },
  { title: "Trade licence renewal DED", with: "Government liaison desk", date: "Mon, 24 Mar · 09:00 GST", mode: "Government", location: "DED Service Centre, Mussafah" },
];

function AppointmentsPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Executive calendar</p>
          <h1 className="editorial-h2 mt-2 text-foreground">Appointments</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">Reserve time with your advisor, request urgent consultations, or track upcoming government appointments.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          <CalendarPlus className="h-4 w-4" /> Request meeting
        </button>
      </header>

      <div className="grid gap-4">
        {UPCOMING.map((m) => {
          const Icon = m.mode === "Virtual" ? Video : m.mode === "Government" ? MapPin : MapPin;
          return (
            <article key={m.title} className="lift-card lift-card-hover p-6 flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-primary">{m.mode}</span>
                  <span className="text-[10px] text-muted-foreground">·</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground"><Clock className="h-3 w-3" /> {m.date}</span>
                </div>
                <h3 className="font-display text-xl mt-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">With {m.with} · {m.location}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-xs px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors">Reschedule</button>
                <button className="text-xs px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity">Join</button>
              </div>
            </article>
          );
        })}
      </div>

      <section className="lift-card p-7 grid md:grid-cols-3 gap-6">
        <div>
          <p className="eyebrow text-[10px]">Need to speak now?</p>
          <h3 className="font-display text-xl mt-2">Urgent consultation</h3>
          <p className="text-xs text-muted-foreground mt-2">Concierge desk responds within 30 minutes during business hours.</p>
        </div>
        <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
          <button className="text-sm px-5 py-2.5 rounded-full border border-border hover:bg-secondary transition-colors">Schedule a call</button>
          <button className="text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Request now</button>
        </div>
      </section>
    </div>
  );
}