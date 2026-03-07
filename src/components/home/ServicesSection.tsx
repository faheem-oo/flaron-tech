"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data/services";

export default function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-beige-100/60 text-lg">
            Comprehensive digital solutions to help your business thrive in the
            modern landscape.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div className="glass-card rounded-2xl p-6 h-full group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-forest-500/20 flex items-center justify-center mb-4 group-hover:bg-forest-400/20 transition-colors">
                      <Icon className="w-6 h-6 text-forest-400" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-beige-100 mb-2 group-hover:text-forest-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-beige-100/50 text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-forest-400 text-sm font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-forest-400 hover:bg-forest-300 text-forest-900 px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-forest-400/25"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
