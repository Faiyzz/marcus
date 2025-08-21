// components/HeroFlow.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type HeroFlowProps = {
  images?: string[]; // 9:16 portraits
  titleTop?: string;
  titleBold?: string;
  subtext?: string;
  cta?: { label: string; href: string };
};

const DEFAULT_IMAGES = [
  "/images/p1.png",
  "/images/p1.png",
  "/images/p1.png",
  "/images/p1.png",
  "/images/p1.png",
  "/images/p1.png",
];

export default function HeroFlow({
  images = DEFAULT_IMAGES,
  titleTop = "Bring Stories to Life,",
  titleBold = "One Edit at a Time",
  subtext = "Crafting cinematic, scroll-stopping short-form videos for TikTok, Reels, and YouTube Shorts.",
  cta = { label: "Let’s Create Together", href: "#" },
}: HeroFlowProps) {
  // keep an internal rotating list so the row feels alive
  const [roll, setRoll] = useState(0);
  const pics = useMemo(
    () => images.length ? images : DEFAULT_IMAGES,
    [images]
  );

  useEffect(() => {
    const id = setInterval(() => setRoll((r) => (r + 1) % pics.length), 2800);
    return () => clearInterval(id);
  }, [pics.length]);

  const ordered = useMemo(() => {
    // rotate array by `roll`
    return pics.map((_, i) => pics[(i + roll) % pics.length]);
  }, [pics, roll]);

  // subtle arc positions & tilts to mimic the reference UI
  const offsets = [-10, -18, -22, -18, -10, -4]; // translateY (px)
  const tilts = [-7, -4, -1, 1, 4, 7]; // rotate (deg)
  const opac = [0.9, 0.95, 1, 1, 0.95, 0.9];

  return (
    <section className="relative mx-auto w-full max-w-9xl px-4 sm:px-6 lg:px-8">
      {/* Soft card-like backdrop */}
      <div className="relative overflow-hidden rounded-[28px] bg-white px-6 pb-14 pt-16 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:px-10">
        {/* Top nav spacer (your real Navbar already exists; this keeps spacing consistent) */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5" />

        {/* Heading */}
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-light leading-tight text-neutral-900 sm:text-5xl">
            {titleTop}
            <br />
            <span className="font-semibold">{titleBold}</span>
          </h1>

          <p className="mt-4 text-base text-neutral-600 sm:text-lg">
            {subtext}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition hover:opacity-90"
            >
              {cta.label}
            </Link>
          </div>
        </div>

        {/* Curved “carousel” of portrait cards */}
        <div className="relative mx-auto mt-12 flex w-ful max-w-9xl items-end justify-center gap-4 sm:gap-6">
          {ordered.slice(0, 6).map((src, i) => (
            <Card
              key={`${src}-${i}`}
              src={src}
              tilt={tilts[i]}
              offsetY={offsets[i]}
              opacity={opac[i]}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

function Card({
  src,
  tilt = 0,
  offsetY = 0,
  opacity = 1,
}: {
  src: string;
  tilt?: number;
  offsetY?: number;
  opacity?: number;
}) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
      style={{
        transform: `translateY(${offsetY}px) rotate(${tilt}deg)`,
        opacity,
        transition: "transform 600ms ease, opacity 600ms ease",
      }}
    >
      {/* Maintain EXACT mobile aspect ratio */}
      <div className="relative aspect-[9/16] w-[140px] sm:w-[160px] md:w-[280px]">
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 180px"
          className="object-cover"
          priority
        />
      </div>

      {/* Subtle overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
    </div>
  );
}
