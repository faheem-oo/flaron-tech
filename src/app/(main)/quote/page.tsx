"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, TreePine } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  timeline: z.string().min(1, "Please select a timeline"),
  description: z.string().min(20, "Please describe your project (min 20 chars)"),
});

type QuoteForm = z.infer<typeof quoteSchema>;

const projectTypes = [
  "Website Design & Development",
  "Mobile Application Development",
  "Full Stack Development",
  "Documentation Services",
  "Domain Registration",
  "Web Hosting Services",
  "Email Hosting Services",
  "Multiple Services",
  "Other",
];

const timelines = [
  "ASAP",
  "1 - 2 weeks",
  "1 month",
  "2 - 3 months",
  "3 - 6 months",
  "Flexible",
];

export default function QuotePage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteForm>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteForm) => {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const selectClasses =
    "w-full px-4 py-3 rounded-xl bg-forest-800/40 border border-forest-700/30 text-beige-100 focus:outline-none focus:border-forest-400/50 transition-colors appearance-none";

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
              Get Started
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Request a <span className="gradient-text">Quote</span>
            </h1>
            <p className="text-beige-100/60 text-lg leading-relaxed">
              Tell us about your project and we&apos;ll provide a tailored
              proposal within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 sm:p-10">
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-forest-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-forest-400" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold mb-3">
                    Quote Request Received!
                  </h2>
                  <p className="text-beige-100/60 mb-6">
                    Thank you for your interest. Our team will review your
                    requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-forest-400 hover:text-glow-green text-sm font-medium"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <TreePine className="w-6 h-6 text-forest-400" />
                    <h2 className="font-heading text-2xl font-bold">
                      Project Details
                    </h2>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm text-beige-100/70 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          {...register("name")}
                          className="w-full px-4 py-3 rounded-xl bg-forest-800/40 border border-forest-700/30 text-beige-100 placeholder:text-beige-100/30 focus:outline-none focus:border-forest-400/50 transition-colors"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1.5">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm text-beige-100/70 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="w-full px-4 py-3 rounded-xl bg-forest-800/40 border border-forest-700/30 text-beige-100 placeholder:text-beige-100/30 focus:outline-none focus:border-forest-400/50 transition-colors"
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1.5">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm text-beige-100/70 mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          id="company"
                          {...register("company")}
                          className="w-full px-4 py-3 rounded-xl bg-forest-800/40 border border-forest-700/30 text-beige-100 placeholder:text-beige-100/30 focus:outline-none focus:border-forest-400/50 transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm text-beige-100/70 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          className="w-full px-4 py-3 rounded-xl bg-forest-800/40 border border-forest-700/30 text-beige-100 placeholder:text-beige-100/30 focus:outline-none focus:border-forest-400/50 transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm text-beige-100/70 mb-2"
                      >
                        Project Type *
                      </label>
                      <select id="projectType" {...register("projectType")} className={selectClasses}>
                        <option value="" className="bg-forest-900">
                          Select a service
                        </option>
                        {projectTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                            className="bg-forest-900"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="text-red-400 text-xs mt-1.5">
                          {errors.projectType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm text-beige-100/70 mb-2"
                      >
                        Timeline *
                      </label>
                      <select id="timeline" {...register("timeline")} className={selectClasses}>
                        <option value="" className="bg-forest-900">
                          Select timeline
                        </option>
                        {timelines.map((t) => (
                          <option
                            key={t}
                            value={t}
                            className="bg-forest-900"
                          >
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.timeline && (
                        <p className="text-red-400 text-xs mt-1.5">
                          {errors.timeline.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm text-beige-100/70 mb-2"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="description"
                        rows={6}
                        {...register("description")}
                        className="w-full px-4 py-3 rounded-xl bg-forest-800/40 border border-forest-700/30 text-beige-100 placeholder:text-beige-100/30 focus:outline-none focus:border-forest-400/50 transition-colors resize-none"
                        placeholder="Describe your project requirements, goals, and any specific features you need..."
                      />
                      {errors.description && (
                        <p className="text-red-400 text-xs mt-1.5">
                          {errors.description.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-forest-400 hover:bg-forest-300 disabled:opacity-50 disabled:cursor-not-allowed text-forest-900 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-forest-400/25 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
