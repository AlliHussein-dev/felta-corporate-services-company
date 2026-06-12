import { type ReactNode, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Building2,
  FolderLock,
  Route as RouteIcon,
  CalendarClock,
  Receipt,
  ShieldCheck,
  MessagesSquare,
  BookOpen,
  UserCog,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";

type NavItem = {
  to: string;
  label: string;
  icon: typeof LayoutDashboard;
  exact?: boolean;
};

const NAV: NavItem[] = [
  { to: "/portal", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/portal/companies", label: "My Companies", icon: Building2 },
  { to: "/portal/documents", label: "Documents", icon: FolderLock },
  { to: "/portal/journey", label: "Business Journey", icon: RouteIcon },
  { to: "/portal/appointments", label: "Appointments", icon: CalendarClock },
  { to: "/portal/invoices", label: "Invoices", icon: Receipt },
  { to: "/portal/compliance", label: "Compliance", icon: ShieldCheck },
  { to: "/portal/messages", label: "Messages", icon: MessagesSquare },
  { to: "/portal/insights", label: "Insights", icon: BookOpen },
  { to: "/portal/profile", label: "Profile & Settings", icon: UserCog },
];

export function PortalShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  const isActive = (to: string, exact?: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar — desktop */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-border/60 bg-card lg:flex lg:flex-col">
        <div className="flex items-center gap-3 px-7 py-7 border-b border-border/50">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 text-primary font-display text-xl leading-none">
            F
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl">FELTA</span>
            <span className="eyebrow text-[10px] text-muted-foreground">Private Client</span>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="eyebrow px-3 pb-3 text-[10px] text-muted-foreground">Concierge</p>
          <ul className="space-y-0.5">
            {NAV.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.to, item.exact);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to as string}
                    className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/75 hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-border/50 px-6 py-5">
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            ← Back to felta.ae
          </Link>
        </div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-72 flex-col bg-card border-r border-border/60">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
              <span className="font-display text-xl">FELTA</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-5">
              <ul className="space-y-0.5">
                {NAV.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.to, item.exact);
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to as string}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
                          active ? "bg-primary/10 text-primary" : "text-foreground/80"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border/50 bg-background/85 backdrop-blur px-5 py-4 lg:px-10">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden flex-1 md:flex">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search documents, advisors, invoices…"
                className="h-10 w-full rounded-full border border-border/70 bg-secondary/40 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 hover:bg-secondary transition-colors" aria-label="Notifications">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
            </button>
            <div className="flex items-center gap-3 rounded-full border border-border/70 bg-card pl-1 pr-4 py-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-medium">
                AA
              </span>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xs font-medium">Mr. Ahmed Al Mansoori</span>
                <span className="text-[10px] text-muted-foreground">Private client</span>
              </div>
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-[1280px] px-5 py-8 lg:px-10 lg:py-12">{children}</main>
      </div>
    </div>
  );
}