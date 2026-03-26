"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const rafId = useRef<number | null>(null);
  const isVisibleRef = useRef(true);
  const isMenuOpenRef = useRef(false);

  useEffect(() => {
    function setHeaderVisible(nextVisible: boolean) {
      if (isVisibleRef.current === nextVisible) {
        return;
      }

      isVisibleRef.current = nextVisible;
      setIsVisible(nextVisible);
    }

    function closeMenuOnScroll() {
      if (!isMenuOpenRef.current) {
        return;
      }

      isMenuOpenRef.current = false;
      setIsMenuOpen(false);
    }

    function updateHeader() {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY.current;
      const isNearTop = currentScrollY <= 24;

      if (isNearTop) {
        setHeaderVisible(true);
      } else if (delta > 6) {
        setHeaderVisible(false);
        closeMenuOnScroll();
      } else if (delta < -6) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
      rafId.current = null;
    }

    function handleScroll() {
      if (ticking.current) {
        return;
      }

      ticking.current = true;
      rafId.current = window.requestAnimationFrame(updateHeader);
    }

    updateHeader();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  function toggleMenu() {
    setIsMenuOpen((open) => {
      const next = !open;
      isMenuOpenRef.current = next;
      return next;
    });
  }

  function closeMenu() {
    if (!isMenuOpenRef.current) {
      return;
    }

    isMenuOpenRef.current = false;
    setIsMenuOpen(false);
  }

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(36,22,79,0.08)] bg-white/95 shadow-[0_8px_28px_rgba(35,24,74,0.04)] backdrop-blur-md transition-transform duration-300 will-change-transform"
        style={{ transform: isVisible ? "translateY(0)" : "translateY(-120px)" }}
      >
        <div className="mx-auto w-full max-w-[1360px] px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-[rgba(36,22,79,0.06)] bg-white px-3 py-2.5 sm:px-5 lg:px-7 lg:py-3.5">
            <Link href="/" className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                <Image
                  src="/Seohub-transparent.png"
                  alt="SeoHub logo"
                  width={96}
                  height={96}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div className="flex items-baseline gap-1 text-[24px] font-bold leading-none tracking-[-0.02em]">
                <span>
                  <span className="text-[#ffb300]">Seo</span>
                  <span className="text-[#1f1b39]">Hub</span>
                </span>
                <span className="font-bold uppercase text-[#1f1b39]">LTD</span>
              </div>
            </Link>

            <div className="flex items-center gap-3 lg:gap-6">
              <nav className="hidden items-center gap-1 text-[14px] font-semibold text-[#000000] md:flex lg:gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-[15px] font-semibold transition-transform duration-200 hover:scale-105 hover:text-[#24164f]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/register"
                className="hidden min-w-[126px] items-center justify-center rounded-full bg-[#ffb300] px-6 py-3 text-[14px] font-semibold text-[#24164f] shadow-[0_10px_22px_rgba(255,179,0,0.25)] transition hover:bg-[#f6ab00] md:inline-flex"
              >
                Join Us
              </Link>

              <button
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(36,22,79,0.12)] text-[#24164f] transition hover:bg-[#fff5d9] md:hidden"
              >
                <span className="flex flex-col gap-1.5">
                  <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                  <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </span>
              </button>
            </div>
          </div>

          {isMenuOpen ? (
            <div className="mt-3 rounded-[1.5rem] border border-[rgba(36,22,79,0.08)] bg-white p-3 shadow-[0_16px_32px_rgba(35,24,74,0.08)] md:hidden">
              <nav className="grid gap-2 text-sm font-medium text-[#000000]">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-[15px] font-semibold transition-transform duration-200 hover:scale-[1.02] hover:text-[#24164f]"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-[#ffb300] px-4 py-3 font-semibold text-[#24164f]"
                >
                  Join Us
                </Link>
              </nav>
            </div>
          ) : null}
        </div>
      </header>

      <div className="h-[82px] sm:h-[90px] md:h-[98px]" />
    </>
  );
}
