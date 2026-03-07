"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const res = await fetch("/api/contact", {
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

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-beige-100/60 text-lg leading-relaxed">
              Have a question or ready to start a project? We&apos;d love to
              hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-forest-500/15 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-forest-400" />
                    </div>
                    <div>
                      <p className="text-beige-100/80 font-medium mb-1">Email</p>
                      <p className="text-beige-100/50 text-sm">
                        contact@flarontech.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-forest-500/15 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-forest-400" />
                    </div>
                    <div>
                      <p className="text-beige-100/80 font-medium mb-1">Phone</p>
                      <p className="text-beige-100/50 text-sm">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-forest-500/15 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-forest-400" />
                    </div>
                    <div>
                      <p className="text-beige-100/80 font-medium mb-1">
                        Office
                      </p>
                      <p className="text-beige-100/50 text-sm">
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h3 className="font-heading text-lg font-semibold mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl glass-light flex items-center justify-center text-beige-100/60 hover:text-forest-400 hover:border-forest-400/40 transition-all"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <div className="glass-card rounded-2xl p-8 sm:p-10">
                <h2 className="font-heading text-2xl font-bold mb-6">
                  Send a Message
                </h2>

                {status === "success" && (
                  <div className="flex items-center gap-3 bg-forest-500/10 border border-forest-500/20 rounded-xl p-4 mb-6">
                    <CheckCircle2 className="w-5 h-5 text-forest-400 shrink-0" />
                    <p className="text-forest-400 text-sm">
                      Message sent successfully! We&apos;ll get back to you
                      soon.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-beige-100/70 mb-2"
                      >
                        Full Name
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
                        Email Address
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

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm text-beige-100/70 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      {...register("subject")}
                      className="w-full px-4 py-3 rounded-xl bg-forest-800/40 border border-forest-700/30 text-beige-100 placeholder:text-beige-100/30 focus:outline-none focus:border-forest-400/50 transition-colors"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1.5">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-beige-100/70 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-xl bg-forest-800/40 border border-forest-700/30 text-beige-100 placeholder:text-beige-100/30 focus:outline-none focus:border-forest-400/50 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1.5">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-forest-400 hover:bg-forest-300 disabled:opacity-50 disabled:cursor-not-allowed text-forest-900 px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-forest-400/25 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
