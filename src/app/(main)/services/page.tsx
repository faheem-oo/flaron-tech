import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services — Flaron Tech",
  description:
    "Explore our comprehensive digital services: web development, mobile apps, full stack development, documentation, domain registration, web hosting, and email hosting.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
              Our Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Digital Solutions That{" "}
              <span className="gradient-text">Grow With You</span>
            </h1>
            <p className="text-beige-100/60 text-lg leading-relaxed">
              From concept to deployment, we offer a full spectrum of technology
              services designed to help your business flourish in the digital
              landscape.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.slug} delay={i * 0.08}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="block group"
                  >
                    <div className="glass-card rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
                      <div className="w-14 h-14 rounded-xl bg-forest-500/20 flex items-center justify-center shrink-0 group-hover:bg-forest-400/20 transition-colors">
                        <Icon className="w-7 h-7 text-forest-400" />
                      </div>
                      <div className="flex-grow">
                        <h2 className="font-heading text-2xl font-bold text-beige-100 mb-2 group-hover:text-forest-400 transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-beige-100/50 leading-relaxed mb-4">
                          {service.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.technologies.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-xs bg-forest-500/10 text-forest-400/80 border border-forest-500/15"
                            >
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 5 && (
                            <span className="px-3 py-1 rounded-full text-xs text-beige-100/40">
                              +{service.technologies.length - 5} more
                            </span>
                          )}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-forest-400 text-sm font-medium group-hover:gap-3 transition-all">
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-10 sm:p-16 text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-beige-100/60 text-lg mb-8 max-w-xl mx-auto">
                Tell us about your project and we&apos;ll recommend the best
                approach for your goals and budget.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-forest-400 hover:bg-forest-300 text-forest-900 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-forest-400/25"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
