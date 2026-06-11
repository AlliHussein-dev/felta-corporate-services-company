import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-highlight/50 text-highlight font-display text-lg">
                F
              </span>
              <span className="font-display text-2xl">FELTA</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
              A trusted corporate services partner in Abu Dhabi, helping investors,
              entrepreneurs and international enterprises build, operate and grow in the
              UAE.
            </p>
            <div className="mt-8 text-sm leading-relaxed text-background/70">
              <p>Al Danah, Zone 1</p>
              <p>Hamdan Street, Abu Dhabi</p>
              <p>United Arab Emirates</p>
            </div>
          </div>

          <FooterCol
            title="Firm"
            links={[
              { to: "/about", label: "The FELTA Story" },
              { to: "/advisors", label: "Our Advisors" },
              { to: "/experience", label: "Client Experience" },
              { to: "/gallery", label: "Office Gallery" },
            ]}
          />
          <FooterCol
            title="Practice"
            links={[
              { to: "/services", label: "Signature Services" },
              { to: "/industries", label: "Industries" },
              { to: "/journeys", label: "Success Journeys" },
              { to: "/insights", label: "Insights" },
            ]}
          />
          <FooterCol
            title="Engage"
            links={[
              { to: "/contact", label: "Private Consultation" },
              { to: "/contact", label: "Visit Our Office" },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-background/15 pt-8 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FELTA Corporate Services Provider. All rights reserved.</p>
          <p className="font-mono-sans tracking-[0.2em] uppercase">
            Trusted partnership · Abu Dhabi · Est. heritage of advisory care
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="eyebrow text-highlight text-[11px]">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-background/80">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="hover:text-highlight transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}