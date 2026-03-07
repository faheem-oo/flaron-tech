"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projects, categories } from "@/lib/data/projects";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
              Portfolio
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-beige-100/60 text-lg leading-relaxed">
              Explore our portfolio of successful projects across web, mobile,
              design, and system development.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Filter + Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <AnimatedSection className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeFilter === cat.key
                    ? "bg-forest-400 text-forest-900"
                    : "glass-light text-beige-100/70 hover:text-forest-400 hover:border-forest-400/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="relative h-52 bg-forest-800/40 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-9 h-9 rounded-lg glass flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-forest-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-forest-400/70 text-xs font-medium uppercase tracking-wider mb-2">
                      {
                        categories.find((c) => c.key === project.category)
                          ?.label
                      }
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-beige-100 mb-2 group-hover:text-forest-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-beige-100/50 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs bg-forest-500/10 text-forest-400/80 border border-forest-500/15"
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

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-beige-100/40 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
