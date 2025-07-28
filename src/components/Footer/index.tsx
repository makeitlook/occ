import { FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { IconType } from "react-icons";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import patternBg from "../../../public/images/pattern-bg.png";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/__theocc/reels/",
      icon: FiInstagram,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@theoccevents",
      icon: SiTiktok,
    },
  ],
};

function AppFooter() {
  return (
    <footer className="bg-neutral-dimmed relative overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 -z-20"
        style={{
          backgroundImage: `url(${patternBg.src})`,
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-shadow/20 to-transparent pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 relative">
        {/* Main Navigation */}
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm mb-12"
        >
          {navigation.main.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-text-secondary hover:text-text-primary transition-all duration-300 ease-out transform hover:-translate-y-0.5"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-elements-primary-main to-elements-secondary-main rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-x-8 mb-12">
          {navigation.social.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative p-3 rounded-full text-text-secondary hover:text-elements-primary-main transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-elements-primary-main/25"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                animationDelay: `${(navigation.main.length + index) * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              <span className="sr-only">{item.name}</span>
              <div className="relative">
                <IconWrapper
                  icon={item.icon}
                  className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 rounded-full bg-elements-primary-main/20 scale-0 group-hover:scale-150 transition-transform duration-300 -z-10" />
              </div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          className="text-center"
          style={{
            animationDelay: `${
              (navigation.main.length + navigation.social.length) * 100
            }ms`,
            animation: "fadeInUp 0.6s ease-out forwards",
            opacity: 0,
          }}
        >
          <p className="text-sm text-text-secondary leading-relaxed">
            &copy; {new Date().getFullYear()} OCC Events & Catering, All rights
            reserved.
          </p>
          <p className="text-sm text-text-secondary mt-2">
            Created by{" "}
            <a
              href="https://makeitlook.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-elements-primary-main hover:text-elements-primary-hover transition-all duration-300 font-medium"
            >
              <span className="relative">
                Make It Look
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-elements-primary-main to-elements-secondary-main rounded-full transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </p>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .group:hover .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
}

export default AppFooter;
