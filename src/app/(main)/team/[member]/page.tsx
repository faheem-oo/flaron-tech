import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { team } from "@/lib/data/team";

interface Props {
  params: Promise<{ member: string }>;
}

export async function generateStaticParams() {
  return team.map((m) => ({ member: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { member: slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return { title: "Team Member Not Found" };
  return {
    title: `${member.name} — ${member.animal} | Flaron Tech`,
    description: member.shortBio,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { member: slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <div className="pt-32">
      {/* Breadcrumb */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-beige-100/50 hover:text-forest-400 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Profile Header */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-8 sm:p-12 relative">
              {/* View Portfolio Button - Top Right */}
              <div className="absolute top-6 right-6">
                <a
                  href={member.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-forest-400 hover:bg-forest-300 text-forest-900 px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-forest-400/25 text-sm"
                >
                  View Portfolio
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full bg-forest-500/20 flex items-center justify-center border-2 border-forest-500/20 shrink-0 overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={128}
                    height={128}
                    className={`w-full h-full object-cover ${member.slug === 'faheem' ? 'scale-50' : (member.slug === 'ronak' || member.slug === 'aravind' ? 'scale-75' : '')}`}
                  />
                </div>

                <div className="text-center md:text-left">
                  <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-2">
                    {member.name}
                  </h1>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                    <span className="text-forest-400 font-heading text-xl font-semibold">
                      The {member.animal}
                    </span>
                    <span className="text-beige-100/30">|</span>
                    <span className="text-beige-100/60">{member.role}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                    {member.traits.map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1 rounded-full text-xs bg-forest-500/10 text-forest-400/80 border border-forest-500/15"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                  <p className="text-beige-100/60 leading-relaxed max-w-2xl">
                    {member.fullBio}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
