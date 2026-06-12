import { createFileRoute } from "@tanstack/react-router";
import { Bell, Lock, Globe, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/portal/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="eyebrow">Account</p>
        <h1 className="editorial-h2 mt-2 text-foreground">Profile &amp; settings</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">Manage your personal details, communication preferences and security.</p>
      </header>

      <section className="lift-card p-8 grid md:grid-cols-[auto_1fr] gap-8 items-start">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/15 text-primary font-display text-3xl">AA</div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full name" value="Mr. Ahmed Al Mansoori" />
          <Field label="Email" value="ahmed@almansoori.ae" />
          <Field label="Mobile" value="+971 50 555 0190" />
          <Field label="Preferred language" value="English" />
          <Field label="Nationality" value="United Arab Emirates" />
          <Field label="Client since" value="February 2022" />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Setting icon={Bell} title="Notifications" desc="Email + in-app alerts for renewals, messages and milestones." />
        <Setting icon={Lock} title="Two-factor authentication" desc="Enabled · authenticator app · last verified 12 Mar." />
        <Setting icon={Globe} title="Time zone" desc="Gulf Standard Time (GMT+4)" />
        <Setting icon={ShieldCheck} title="Data &amp; privacy" desc="Your documents are encrypted at rest and never shared outside FELTA." />
      </section>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-1.5 text-sm font-medium">{value}</p>
    </div>
  );
}

function Setting({ icon: Icon, title, desc }: { icon: typeof Bell; title: string; desc: string }) {
  return (
    <div className="lift-card p-6 flex items-start gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary"><Icon className="h-4 w-4 text-primary" /></span>
      <div className="flex-1">
        <p className="font-display text-lg">{title}</p>
        <p className="text-xs text-muted-foreground mt-1">{desc}</p>
      </div>
      <button className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors">Edit</button>
    </div>
  );
}