import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services/website-design-development", label: "Web Development" },
    { href: "/services/mobile-app-development", label: "Mobile Apps" },
    { href: "/services/full-stack-development", label: "Full Stack" },
    { href: "/services/documentation-services", label: "Documentation" },
    { href: "/services/domain-registration", label: "Domain Registration" },
    { href: "/services/web-hosting", label: "Web Hosting" },
    { href: "/services/email-hosting", label: "Email Hosting" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/quote", label: "Request Quote" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-900/80 border-t border-forest-700/30">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image
                  src="/mainlogo.png"
                  alt="Flaron Tech"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading text-xl font-bold text-beige-100">
                Flaron Tech
              </span>
            </Link>
            <p className="text-beige-100/60 text-sm leading-relaxed mb-6">
              Growing your digital presence. We blend nature-inspired
              design with cutting-edge technology to deliver powerful digital
              solutions.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-beige-100/60 hover:text-glow-green hover:border-forest-400/40 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-beige-100 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-beige-100/60 hover:text-forest-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-beige-100 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-beige-100/60 hover:text-forest-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-beige-100 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-beige-100/60 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <span>contact@flarontech.com</span>
              </li>
              <li className="flex items-start gap-3 text-beige-100/60 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <span>+91 9150904940</span>
              </li>
              <li className="flex items-start gap-3 text-beige-100/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-beige-100/40 text-xs">
            © {new Date().getFullYear()} Flaron Tech. All rights reserved.
          </p>
          <p className="text-beige-100/40 text-xs">
            Built with 🌲 and modern technology
          </p>
        </div>
      </div>
    </footer>
  );
}
