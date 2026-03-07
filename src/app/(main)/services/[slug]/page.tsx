import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — Flaron Tech`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <div className="pt-32">
      {/* Breadcrumb */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-beige-100/50 hover:text-forest-400 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-forest-500/20 flex items-center justify-center shrink-0">
                <Icon className="w-8 h-8 text-forest-400" />
              </div>
              <div>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
                  {service.title}
                </h1>
                <p className="text-beige-100/60 text-lg leading-relaxed max-w-3xl">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-5 h-5 text-forest-400" />
                <h2 className="font-heading text-2xl font-bold">Overview</h2>
              </div>
              <p className="text-beige-100/60 text-lg leading-relaxed">
                {service.overview}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-forest-400" />
                  <h3 className="font-heading text-lg font-semibold">
                    Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm bg-forest-500/10 text-forest-400 border border-forest-500/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold mb-10 text-center">
              Key <span className="gradient-text">Benefits</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex gap-3 p-5 rounded-xl glass-light">
                  <CheckCircle2 className="w-5 h-5 text-forest-400 shrink-0 mt-0.5" />
                  <p className="text-beige-100/70 text-sm leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold mb-10 text-center">
              Example <span className="gradient-text">Use Cases</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.useCases.map((useCase, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-card rounded-xl p-5 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-forest-500/20 flex items-center justify-center shrink-0">
                    <span className="text-forest-400 font-heading font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-beige-100/70">{useCase}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-10 sm:p-16 text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-beige-100/60 text-lg mb-8 max-w-xl mx-auto">
                Tell us about your {service.title.toLowerCase()} needs and
                we&apos;ll create a tailored solution for your business.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-forest-400 hover:bg-forest-300 text-forest-900 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-forest-400/25"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
