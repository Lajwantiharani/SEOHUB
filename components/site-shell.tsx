"use client";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const Header = dynamic(() => import("@/components/header").then((module) => module.Header));
const Footer = dynamic(() => import("@/components/footer").then((module) => module.Footer));
const ROUTE_VISIBILITY = {
  shell: new Set(["/forgot-password", "/reset-password"]),
  footer: new Set(["/login", "/register"])
};
type SiteShellProps = {
  children: React.ReactNode;
};
export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname() ?? "";
  const hideShell = ROUTE_VISIBILITY.shell.has(pathname);
  const hideFooter = ROUTE_VISIBILITY.footer.has(pathname);
  if (hideShell) {
    return <>{children}</>;
  }
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8eb_0%,#ffffff_28%,#ffffff_100%)]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top,rgba(255,195,74,0.18),transparent_52%)]" />
      <Header />
      {children}
      {hideFooter ? null : <Footer />}
    </div>
  );
}
