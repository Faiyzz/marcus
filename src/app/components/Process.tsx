// components/Process.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle, Film, Scissors, Rocket } from "lucide-react";

const steps = [
  {
    title: "Send Your Footage",
    desc: "Share your raw clips with us securely.",
    icon: Film,
  },
  {
    title: "Editing Magic",
    desc: "We cut, enhance, add captions, and optimize pacing.",
    icon: Scissors,
  },
  {
    title: "Delivery",
    desc: "Receive polished videos ready to post & perform.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          How It <span className="text-red-600">Works</span>
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base text-neutral-600">
          A simple, streamlined process that keeps you focused on creating while
          we handle the edits.
        </p>
      </div>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-red-200" />

        <div className="space-y-24">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Step Content */}
                <div className="w-1/2 px-6">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-neutral-600">{step.desc}</p>
                </div>

                {/* Step Marker */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Spacer */}
                <div className="w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
