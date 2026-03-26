"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Header = dynamic(() => import("@/components/header").then((module) => module.Header));
const Footer = dynamic(() => import("@/components/footer").then((module) => module.Footer));

const HIDDEN_SHELL_ROUTES = new Set(["/forgot-password", "/reset-password"]);

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const hideShell = pathname ? HIDDEN_SHELL_ROUTES.has(pathname) : false;

  if (hideShell) {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8eb_0%,#ffffff_28%,#ffffff_100%)]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top,rgba(255,195,74,0.18),transparent_52%)]" />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
