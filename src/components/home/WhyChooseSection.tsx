"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Lightbulb,
  Users,
  Clock,
  Code2,
  Headphones,
  Leaf,
} from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We stay ahead of the curve, adopting the latest technologies and methodologies to deliver forward-thinking solutions.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Five skilled professionals each bringing unique strengths, working collaboratively on every project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your timelines and deliver projects on schedule without compromising on quality.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Our codebase is maintainable, well-documented, and follows industry best practices for long-term reliability.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "We don't disappear after launch. Our team provides continuous support and maintenance for all projects.",
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    desc: "Eco-inspired, performance-optimized solutions that are efficient in both resource usage and environmental impact.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-800/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
            Why Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Why Choose{" "}
            <span className="gradient-text">Flaron Tech</span>
          </h2>
          <p className="text-beige-100/60 text-lg">
            We combine technical expertise with creative vision to deliver
            solutions that truly make a difference.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.1}>
              <div className="flex gap-4 p-6 rounded-2xl glass-light hover:bg-forest-800/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-forest-500/15 flex items-center justify-center shrink-0 group-hover:bg-forest-400/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-forest-400" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-beige-100 mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-beige-100/50 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
