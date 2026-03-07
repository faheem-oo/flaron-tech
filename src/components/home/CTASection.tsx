"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-glow-green/20 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-400/20 rounded-full blur-[100px]" />
            </div>

            {/* Content */}
            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
             

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-2xl mx-auto">
                Ready to Grow Your{" "}
                <span className="gradient-text">Digital Presence?</span>
              </h2>

              <p className="text-beige-100/60 text-lg max-w-xl mx-auto mb-10">
                Partner with Flaron Tech and watch your ideas take root, grow,
                and flourish into powerful digital solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="group bg-forest-400 hover:bg-forest-300 text-forest-900 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:shadow-lg hover:shadow-forest-400/25 flex items-center gap-2"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl font-semibold text-base glass-light text-beige-100 hover:border-forest-400/40 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
