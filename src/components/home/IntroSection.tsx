"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { TreePine, Zap, Shield } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Where <span className="gradient-text">Creativity</span> Meets{" "}
            <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-beige-100/60 text-lg leading-relaxed">
            At Flaron Tech, we believe the best digital solutions grow
            organically deeply rooted in understanding, branching out with
            innovation, and blooming with results. Our approach blends the wisdom
            of nature with the power of modern technology.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: TreePine,
              title: "Rooted in Quality",
              desc: "Every project starts with deep research and a solid foundation—ensuring sustainable growth for your digital presence.",
            },
            {
              icon: Zap,
              title: "Powered by Innovation",
              desc: "We use cutting-edge technologies and creative thinking to deliver solutions that set you apart from the competition.",
            },
            {
              icon: Shield,
              title: "Built to Last",
              desc: "Like ancient trees, our solutions are built for longevity — secure, scalable, and adaptable to changing seasons.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="glass-card rounded-2xl p-8 h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-forest-500/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-forest-400" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-beige-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-beige-100/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
