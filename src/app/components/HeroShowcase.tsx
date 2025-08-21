// components/HeroShowcase.tsx
"use client";

import Link from "next/link";
import { useMemo } from "react";

type Item = {
  poster: string;          // thumbnail image (required)
  src?: string;            // optional .mp4 (plays on hover)
  label?: string;          // small caption under the card
  alt?: string;
};

export default function HeroShowcase({
  items = [],
  heading = (
    <>
      Short-Form Edits <span className="text-red-600">Built to Perform</span>
    </>
  ),
  subtext = "Clean, fast, platform-native cuts for TikTok · Reels · Shorts.",
  cta = { label: "See Work", href: "#work" },
}: {
  items: Item[];
  heading?: React.ReactNode;
  subtext?: string;
  cta?: { label: string; href: string };
}) {
  const safeItems = useMemo(() => (items.length ? items : demoItems), [items]);

  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      {/* Heading block */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl">
          {heading}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-600 sm:text-lg">
          {subtext}
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href={cta.href}
            className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-red-700"
          >
            {cta.label}
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-red-600 px-5 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Curved mobile-ratio cards */}
      <div className="mt-12">
        {/* Desktop / large: curved layout */}
        <div
          className="relative hidden justify-center gap-6 md:flex"
          style={{ perspective: "1400px" }}
        >
          {safeItems.map((item, i) => {
            const count = safeItems.length;
            const mid = (count - 1) / 2;
            const offset = i - mid;

            const rotate = offset * -10;
            const translateY = Math.abs(offset) * 10;
            const translateZ = 140 - Math.abs(offset) * 70;
            const opacity = 1 - Math.abs(offset) * 0.08;

            return (
              <figure
                key={i}
                className="group flex w-[160px] flex-col items-center md:w-[180px] lg:w-[200px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="relative w-full overflow-hidden rounded-2xl bg-white shadow-[0_18px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-transform duration-500"
                  style={{
                    transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotate}deg)`,
                    opacity,
                    aspectRatio: "9 / 16",
                  }}
                >
                  {item.src ? (
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      poster={item.poster}
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) =>
                        (e.currentTarget as HTMLVideoElement).play()
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget as HTMLVideoElement).pause()
                      }
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.poster}
                      alt={item.alt || "thumbnail"}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
                </div>

                {item.label ? (
                  <figcaption className="mt-3 text-center text-sm font-medium text-neutral-700">
                    {item.label}
                  </figcaption>
                ) : null}
              </figure>
            );
          })}
        </div>

        {/* Mobile: simple horizontal scroller */}
        <div className="md:hidden">
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
            {safeItems.map((item, i) => (
              <figure key={i} className="w-[60%] min-w-[220px] snap-center">
                <div
                  className="relative w-full overflow-hidden rounded-2xl bg-white shadow-[0_18px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
                  style={{ aspectRatio: "9 / 16" }}
                >
                  {item.src ? (
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      poster={item.poster}
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.poster}
                      alt={item.alt || "thumbnail"}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </div>
                {item.label ? (
                  <figcaption className="mt-2 text-center text-sm font-medium text-neutral-700">
                    {item.label}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const demoItems: Item[] = [
  { poster: "/images/p1.png", src: "/videos/v1.mp4", label: "Reels — UGC Ad" },
  { poster: "/images/p1.png", src: "/videos/v1.mp4", label: "Shorts — Tutorial" },
  { poster: "/images/p1.png", src: "/videos/v1.mp4", label: "TikTok — Promo" },
  { poster: "/images/p1.png", src: "/videos/v1.mp4", label: "Reels — Founder Cut" },
  { poster: "/images/p1.png", src: "/videos/v1.mp4", label: "Shorts — Product" },
  { poster: "/images/p1.png", src: "/videos/v1.mp4", label: "TikTok — Story" },
];
