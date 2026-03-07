"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projects } from "@/lib/data/projects";

export default function PortfolioPreview() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-beige-100/60 text-lg">
            A selection of our recent work that showcases our expertise and
            creative capabilities.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <div className="glass-card rounded-2xl overflow-hidden group">
                <div className="relative h-52 bg-forest-800/40 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-beige-100/40 group-hover:text-forest-400 transition-colors" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-beige-100 mb-2 group-hover:text-forest-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-beige-100/50 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs bg-forest-500/15 text-forest-400 border border-forest-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-forest-400 hover:bg-forest-300 text-forest-900 px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-forest-400/25"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
