"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Syed Ali Ahmed",
    role: "Senior SEO Specialist",
    image: "/team/ali-bhai.webp",
    alt: "Syed Ali Ahmed team portrait"
  },
  {
    name: "Muhammad Umer",
    role: "Co-Founder",
    image: "/team/umar-bhai.webp",
    alt: "Muhammad Umer team portrait"
  },
  {
    name: "Lajwanti Harani",
    role: "Senior Developer",
    image: "/team/lajwanti.webp",
    alt: "Lajwanti Harani team portrait"
  },
  {
    name: "Muhammad Anas",
    role: "Senior Graphics Designer",
    image: "/team/anas.webp",
    alt: "Muhammad Anas team portrait"
  },
  {
    name: "Ahmed Ali",
    role: "CEO & Founder",
    image: "/team/ali-bhai-2.webp",
    alt: "Ahmed Ali team portrait"
  },
  {
    name: "Zain Asghar",
    role: "Senior Digital Marketer",
    image: "/team/zain.webp",
    alt: "Zain Asghar team portrait"
  }
] as const;

const repeatedMembers = [...teamMembers, ...teamMembers];
const STEP_INTERVAL_MS = 3000;
const STEP_TRANSITION_MS = 500;

export function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasTransition, setHasTransition] = useState(true);
  const [cardWidth, setCardWidth] = useState(230);
  const frameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateCardWidth = () => {
      const frame = frameRef.current;
      if (!frame) {
        return;
      }

      const gap = 22;
      const frameWidth = frame.clientWidth;
      const visibleCards = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 3 : 2;
      const nextWidth = (frameWidth - gap * (visibleCards - 1)) / visibleCards;
      setCardWidth(nextWidth);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setTimeout(() => {
      setHasTransition(true);
      setActiveIndex((current) => current + 1);
    }, STEP_INTERVAL_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused]);

  const handleTransitionEnd = () => {
    if (activeIndex < teamMembers.length) {
      return;
    }

    setHasTransition(false);
    setActiveIndex(0);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setHasTransition(true);
      });
    });
  };

  return (
    <section className="bg-[#ffffff] px-4 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="text-center">
          <p className="mx-auto w-fit rounded-full border border-[#d3d9e0] px-6 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.02em] text-[#000000]">
            Our Team
          </p>
          <h2 className="mt-6 text-[clamp(2.1rem,4vw,3.2rem)] font-semibold tracking-[-0.05em] text-[#111111]">
            The Geniuses Behind The Scenes
          </h2>
        </div>

        <div
          ref={frameRef}
          className="team-fade mt-10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="team-track"
            style={{
              transform: `translateX(-${activeIndex * (cardWidth + 22)}px)`,
              transition: hasTransition ? `transform ${STEP_TRANSITION_MS}ms ease-in-out` : "none",
              ["--team-card-width" as string]: `${cardWidth}px`
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {repeatedMembers.map((member, index) => (
              <article
                key={`${member.image}-${index}`}
                className="team-item group relative w-[var(--team-card-width)] shrink-0 overflow-hidden rounded-[1.7rem] bg-[#d6d6d3]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.7rem] bg-[#d6d6d3]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-5 bg-[linear-gradient(180deg,rgba(15,15,18,0)_0%,rgba(15,15,18,0.84)_62%,rgba(15,15,18,0.96)_100%)] px-5 pb-6 pt-14 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-center text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-white">
                    {member.name}
                  </p>
                  <p className="mt-1 text-center text-[0.92rem] font-medium text-[rgba(255,255,255,0.8)]">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
