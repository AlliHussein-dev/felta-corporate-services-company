import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/about", label: "The FELTA Story" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/journeys", label: "Journeys" },
  { to: "/advisors", label: "Advisors" },
  { to: "/insights", label: "Insights" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" className="flex items-center gap-3 group" aria-label="FELTA home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary font-display text-lg leading-none">
            F
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl tracking-tight">FELTA</span>
            <span className="eyebrow text-[10px] tracking-[0.28em] text-muted-foreground">
              Abu Dhabi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground"
          aria-label="Open menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-6 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-base text-foreground/90"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}