import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "../components/reveal";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import office from "../assets/gallery-reception.jpg";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FELTA — Begin Your UAE Business Journey" },
      { name: "description", content: "Arrange a private consultation at our office on Hamdan Street, Al Danah, Abu Dhabi — or speak with a senior advisor remotely." },
      { property: "og:title", content: "Contact FELTA" },
      { property: "og:description", content: "Begin your UAE business journey." },
      { property: "og:image", content: office },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Reveal><p className="eyebrow"><span className="rule-divider mr-3" />Begin the conversation</p></Reveal>
          <Reveal delay={0.05}><h1 className="editorial-h1 mt-6 max-w-4xl">Begin your UAE business journey.</h1></Reveal>
          <Reveal delay={0.1}><p className="mt-8 max-w-2xl text-lg text-muted-foreground">Tell us a little about your plans. A senior advisor will respond within one business day to arrange a private consultation, in person or virtually.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] grid gap-12 px-6 pb-24 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:px-12">
        <Reveal className="lift-card p-8 lg:p-12">
          {sent ? (
            <div className="py-12 text-center">
              <p className="eyebrow text-primary">Received</p>
              <h2 className="editorial-h2 mt-4">Thank you — we will be in touch.</h2>
              <p className="mt-6 text-muted-foreground">A senior advisor will reply within one business day.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Your message has been received.");
              }}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone (optional)" name="phone" />
              </div>
              <div>
                <label className="eyebrow text-muted-foreground text-[11px]">How can we help?</label>
                <textarea required name="message" rows={6} className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="A few sentences about your plans for the UAE." />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">Request consultation</button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          <img src={office} alt="FELTA reception" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div className="mt-8 space-y-5 text-base">
            <Detail icon={MapPin} title="Visit">Hamdan Street, Al Danah<br />Zone 1, Abu Dhabi, UAE</Detail>
            <Detail icon={Clock} title="Hours">Sunday – Thursday · 9:00 – 18:00</Detail>
            <Detail icon={Phone} title="Call">+971 (0)2 000 0000</Detail>
            <Detail icon={Mail} title="Email">advisors@felta.example</Detail>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-32 lg:px-12">
        <Reveal className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="FELTA office location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=54.36%2C24.48%2C54.39%2C24.50&amp;layer=mapnik"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-muted-foreground text-[11px]">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}

function Detail({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><Icon className="h-4 w-4" /></span>
      <div>
        <p className="eyebrow text-muted-foreground text-[11px]">{title}</p>
        <p className="mt-1 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}