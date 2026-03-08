"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 max-md:opacity-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-500/20 rounded-full blur-[120px] animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-green/10 rounded-full blur-[100px] animate-glow [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-700/15 rounded-full blur-[150px]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(109, 190, 69, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(109, 190, 69, 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />


      </div>

      {/* Fog layer */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-forest-900 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          {/* Logo */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-forest-500/10 backdrop-blur-sm border border-forest-500/20 flex items-center justify-center mb-4 shadow-lg shadow-forest-500/10 overflow-hidden">
            <Image
              src="/mainlogo.png"
              alt="Flaron Tech Logo"
              width={128}
              height={128}
              className="w-full h-full object-contain p-2"
            />
          </div>
          
          {/* Company Name */}
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-400 tracking-wider">
            FLARON TECH
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
        >
          <span className="text-beige-100">ROOTED IN INNOVATION</span>
          <br />
          <span className="gradient-text">POWERED BY VISION</span>
          <br />
         
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-beige-100/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We craft powerful digital solutions that grow and evolve with your
          business — blending nature-inspired design with cutting-edge
          technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="group bg-forest-400 hover:bg-forest-300 text-forest-900 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:shadow-lg hover:shadow-forest-400/25 flex items-center gap-2"
          >
            Explore Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/quote"
            className="px-8 py-4 rounded-xl font-semibold text-base glass-light text-beige-100 hover:border-forest-400/40 transition-all flex items-center gap-2"
          >
            Request a Quote
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto"
        >
 
        </motion.div>
      </div>
    </section>
  );
}
