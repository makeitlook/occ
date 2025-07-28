import { FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { IconType } from "react-icons";
import IconWrapper from "@/components/IconWrapper/IconWrapper";

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
    <footer className="bg-neutral-dimmed">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm"
        >
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-text-secondary hover:text-elements-primary-main transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <IconWrapper icon={item.icon} className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} OCC Events & Catering, All rights
          reserved. Created by{" "}
          <a
            href="https://makeitlook.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-elements-primary-main hover:text-elements-primary-hover transition-colors duration-300 font-medium"
          >
            Make It Look
          </a>
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;
