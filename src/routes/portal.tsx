import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PortalShell } from "../components/portal-shell";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Private Client Portal — FELTA" },
      { name: "description", content: "Your private FELTA concierge workspace." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: () => (
    <PortalShell>
      <Outlet />
    </PortalShell>
  ),
});