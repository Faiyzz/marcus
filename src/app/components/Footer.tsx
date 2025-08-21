// components/Footer.tsx
"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { BrandIcon } from "./BrandIcon";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-top border-t-2 border-red-600 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-red-600">
                Marcus
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-600">
              Freelance short‑form video editor. Clean, fast, platform‑native edits for TikTok, Reels, and Shorts.
            </p>
          </div>

          {/* Links */}
          <nav className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-2">
            <div>
              <h4 className="text-sm font-semibold text-neutral-900">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li><Link href="/#work" className="hover:text-neutral-900">Work</Link></li>
                <li><Link href="/#about" className="hover:text-neutral-900">About</Link></li>
                <li><Link href="/#process" className="hover:text-neutral-900">Process</Link></li>
                <li><Link href="/#pricing" className="hover:text-neutral-900">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-900">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li><Link href="/#services" className="hover:text-neutral-900">Short‑Form Editing</Link></li>
                <li><Link href="/#services" className="hover:text-neutral-900">Captions & SFX</Link></li>
                <li><Link href="/#services" className="hover:text-neutral-900">UGC Ads</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-900">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li><Link href="/#contact" className="hover:text-neutral-900">Contact</Link></li>
                <li><Link href="/terms" className="hover:text-neutral-900">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-neutral-900">Privacy</Link></li>
              </ul>
            </div>
          </nav>

          {/* Contact / Socials */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-600" />
                <a href="mailto:hello@example.com" className="hover:text-neutral-900">
                  hello@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-600" />
                <a href="tel:+1234567890" className="hover:text-neutral-900">+1 (234) 567‑890</a>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="TikTok" className="rounded-full border border-neutral-200 p-2 hover:bg-neutral-50">
                <BrandIcon name="tiktok" className="h-4 w-4 text-neutral-800" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full border border-neutral-200 p-2 hover:bg-neutral-50">
                <BrandIcon name="instagram" className="h-4 w-4 text-neutral-800" />
              </a>
              <a href="#" aria-label="YouTube" className="rounded-full border border-neutral-200 p-2 hover:bg-neutral-50">
                <BrandIcon name="youtube" className="h-4 w-4 text-neutral-800" />
              </a>
            </div>

            <Link
              href="#contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-red-700"
            >
              Book a Cut
            </Link>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-neutral-200" />
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Marcus — All rights reserved.</p>
          <p>
            Built for <span className="font-semibold text-neutral-700">short‑form performance</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
