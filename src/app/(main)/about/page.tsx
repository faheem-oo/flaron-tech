import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Heart, Lightbulb, Leaf } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { team } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "About Us — Flaron Tech",
  description:
    "Learn about Flaron Tech's mission, values, and the team behind our nature-inspired technology solutions.",
};

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    desc: "We exist to empower businesses with digital tools that create real impact. Every project is a step toward a more connected, efficient world.",
  },
  {
    icon: Heart,
    title: "Client-Centered",
    desc: "Your success is our success. We listen deeply, communicate transparently, and treat every project as if it were our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Always",
    desc: "We never settle for the conventional. Our team constantly explores new technologies and creative approaches to solve problems.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Inspired by nature, we build solutions that are efficient, long-lasting, and respectful of both digital and natural ecosystems.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
              About Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              The Roots Behind{" "}
              <span className="gradient-text">Flaron Tech</span>
            </h1>
            <p className="text-beige-100/60 text-lg leading-relaxed">
              We are a team of five passionate technologists who believe that the
              best digital solutions are inspired by the wisdom, resilience, and
              beauty of the natural world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 mb-6">
                Growing Digital Ecosystems That{" "}
                <span className="gradient-text">Thrive</span>
              </h2>
              <div className="space-y-4 text-beige-100/60 leading-relaxed">
                <p>
                  Flaron Tech was founded on a simple yet powerful idea: technology
                  should grow naturally alongside the businesses it serves. Like a
                  forest ecosystem where every organism plays a vital role, we
                  believe every line of code, every design decision, and every
                  strategic choice should contribute to a thriving digital whole.
                </p>
                <p>
                  Our mission is to deliver technology solutions that are not just
                  functional, but transformative. We combine deep technical
                  expertise with creative innovation to build digital experiences
                  that captivate users, drive growth, and stand the test of time.
                </p>
                <p>
                  We serve businesses of all sizes — from ambitious startups
                  planting their first digital seed to established enterprises
                  looking to revitalize their online presence. Whatever your vision,
                  we have the skills and passion to make it flourish.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-forest-400/10 rounded-full blur-[60px]" />
                <div className="relative space-y-8">
                  {[
                    { number: "01", text: "Understand your vision and goals" },
                    { number: "02", text: "Design solutions rooted in research" },
                    { number: "03", text: "Build with precision and care" },
                    { number: "04", text: "Launch, support, and evolve together" },
                  ].map((step) => (
                    <div key={step.number} className="flex items-start gap-4">
                      <span className="font-heading text-2xl font-bold text-forest-400/40">
                        {step.number}
                      </span>
                      <p className="text-beige-100/70 text-lg pt-1">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              What Drives <span className="gradient-text">Us</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-forest-500/20 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-forest-400" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-beige-100 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-beige-100/50 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
              Our Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Nature &times; Technology
            </h2>
            <p className="text-beige-100/60 text-lg leading-relaxed mb-6">
              We find our deepest inspiration in the patterns of the natural world.
              Forests teach us about resilient systems — how diverse elements
              work together, adapt to change, and grow stronger over time.
            </p>
            <p className="text-beige-100/60 text-lg leading-relaxed">
              This philosophy is woven into everything we create. Our designs echo
              organic forms. Our architectures mirror natural ecosystems. Our team
              dynamics reflect the collaborative spirit of the wild. The result?
              Technology solutions that feel as natural as they are powerful.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
              Meet The Team
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              The <span className="gradient-text">Guardians</span> of the
              Digital Forest
            </h2>
            <p className="text-beige-100/60 text-lg">
              Each member brings unique strengths, symbolized by an animal that
              represents their spirit and approach to technology.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.slug} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 text-center group h-full flex flex-col">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-forest-500/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform border-2 border-forest-500/20 group-hover:border-forest-400/40 overflow-hidden">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={96}
                      height={96}
                      className={`w-full h-full object-cover ${member.slug === 'faheem' ? 'scale-50' : (member.slug === 'ronak' || member.slug === 'aravind' ? 'scale-75' : '')}`}
                    />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-beige-100 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-forest-400 font-medium mb-1">
                    {member.animal}
                  </p>
                  <p className="text-beige-100/50 text-sm mb-4">{member.role}</p>

                  <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                    {member.traits.map((trait) => (
                      <span
                        key={trait}
                        className="text-xs px-3 py-1 rounded-full bg-forest-500/10 text-forest-400/80 border border-forest-500/15"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>

                  <p className="text-beige-100/40 text-sm leading-relaxed mb-6 flex-grow">
                    {member.shortBio}
                  </p>

                  <Link
                    href={`/team/${member.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-forest-400/10 hover:bg-forest-400/20 text-forest-400 px-6 py-2.5 rounded-xl text-sm font-medium transition-all border border-forest-400/20 hover:border-forest-400/40 group/btn"
                  >
                    View Portfolio
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
