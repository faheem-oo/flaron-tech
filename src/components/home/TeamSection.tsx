"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { team } from "@/lib/data/team";

export default function TeamSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-800/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={member.slug} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center group h-full flex flex-col">
                {/* Avatar with animal emoji */}
                <div className="w-20 h-20 rounded-full bg-forest-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border-2 border-forest-500/20 group-hover:border-forest-400/40 overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={80}
                    height={80}
                    className={`w-full h-full object-cover ${member.slug === 'faheem' ? 'scale-50' : (member.slug === 'ronak' || member.slug === 'aravind' ? 'scale-75' : '')}`}
                  />
                </div>

                <h3 className="font-heading text-lg font-semibold text-beige-100 mb-1">
                  {member.name}
                </h3>
                <p className="text-forest-400 text-sm font-medium mb-1">
                  {member.animal}
                </p>
                <p className="text-beige-100/50 text-xs mb-2">
                  {member.role}
                </p>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.traits.map((trait) => (
                    <span
                      key={trait}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-forest-500/10 text-forest-400/80"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                <p className="text-beige-100/40 text-xs leading-relaxed mb-5 flex-grow">
                  {member.shortBio}
                </p>

                <Link
                  href={`/team/${member.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-forest-400 hover:text-glow-green transition-colors group/btn"
                >
                  View Portfolio
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
