"use client";

import React, { useState, useEffect, useMemo } from "react";
import { LuMenu, LuX, LuChevronDown, LuPhone } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { usePathname } from "next/navigation";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import Button from "@/components/Button/Button";

// Type definitions
export interface NavItem {
  name: string;
  href?: string;
  path?: string;
  sectionId?: string;
  current?: boolean;
  disabled?: boolean;
  children?: NavItem[];
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  description?: string;
}

export interface NavConfig {
  navigationItems: NavItem[];
  showNavigation?: boolean;
}

export interface NavProps {
  navigationConfig?: NavConfig;
  items?: NavItem[];
  navMode?: "single" | "multi";
  variant?: "standard" | "glass" | "minimal";
  position?: "top";
  theme?: "light" | "dark" | "auto";
  cta?: {
    show: boolean;
    text?: string;
    href?: string;
    phoneNumber?: string;
  };
  logo?: {
    light: string;
    dark: string;
    width?: number;
    height?: number;
  };
  showThemeSwitcher?: boolean;
  mobileFullScreen?: boolean;
  transparent?: boolean;
  glassMorphism?: boolean;
  className?: string;
}

// Helper function for class conditionals
function classNames(...classes: (string | false | undefined)[]): string {
  return classes.filter((c): c is string => Boolean(c)).join(" ");
}

const ConfigurableNavigation: React.FC<NavProps> = ({
  navigationConfig,
  navMode = "multi",
  items,
  variant = "standard",
  position = "top",
  theme = "auto",
  cta = { show: false },
  logo,
  showThemeSwitcher = false,
  mobileFullScreen = false,
  transparent = false,
  glassMorphism = false,
  className = "",
}) => {
  // State management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Get navigation items from either navigationConfig or items prop
  const navigationItems = useMemo(() => {
    return navigationConfig?.navigationItems || items || [];
  }, [navigationConfig?.navigationItems, items]);
  const showNavigation = navigationConfig?.showNavigation !== false;

  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Function to close the mobile menu
  const closeMenu = () => setMobileMenuOpen(false);

  // Scroll detection for dynamic navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navMode !== "single") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -80% 0px" }
    );

    navigationItems.forEach((item) => {
      if (item.sectionId) {
        const el = document.getElementById(item.sectionId);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [navMode, navigationItems]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.toggle(
      "smooth-scroll",
      navMode === "single"
    );
  }, [navMode]);

  // Component mounting effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen && mobileFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, mobileFullScreen]);

  // Exit early if navigation should not be shown or not mounted
  if (!showNavigation || !mounted) return null;

  // Component styling based on variant and position
  const getNavStyles = () => {
    let styles = {
      container: "",
      wrapper: "",
      header: "",
      navItem: {
        base: "relative inline-flex items-center px-4 py-2 text-sm font-normal rounded-md transition-all duration-300 ease-out",
        active: "",
        inactive: "",
        disabled: "opacity-40 cursor-not-allowed",
        hover: "", // Removed the transform hover effects
      },
      dropdown: {
        container:
          "absolute left-1/2 z-50 mt-3 flex w-screen max-w-max -translate-x-1/2",
        panel:
          "w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-neutral-dimmed-heavy/95 backdrop-blur-2xl border border-border-dimmed/10 shadow-xl shadow-neutral-900/[0.08]",
        item: "group relative flex gap-x-4 rounded-md p-4 hover:bg-neutral/40 transition-all duration-300 ease-out",
      },
      mobileMenu: {
        container: "",
        backdrop: "",
        panel:
          "sm:hidden bg-card-background/95 backdrop-blur-xl border-b border-border-dimmed/20 shadow-lg",
        item: {
          base: "flex items-center px-4 py-3 text-base font-medium rounded-md transition-all duration-300",
          active:
            "text-elements-primary-main relative after:absolute after:bottom-1 after:left-4 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-elements-primary-main after:to-elements-secondary-main after:rounded-full",
          inactive: "text-text-secondary hover:text-elements-primary-main",
        },
      },
    };

    // Apply variant styles
    switch (variant) {
      case "glass":
        styles.container =
          scrolled || !transparent
            ? "bg-card-background/70 backdrop-blur-xl border-b border-border-dimmed/20 shadow-lg shadow-neutral-900/5"
            : "bg-transparent";
        styles.navItem.active =
          "text-elements-primary-main relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-elements-primary-main after:to-elements-secondary-main after:rounded-full";
        styles.navItem.inactive =
          "text-text-secondary hover:text-elements-primary-main transition-all duration-300";
        break;

      case "minimal":
        styles.container = "bg-transparent";
        styles.navItem.active =
          "text-elements-primary-main font-semibold relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-elements-primary-main after:to-elements-secondary-main after:rounded-full";
        styles.navItem.inactive =
          "text-text-secondary hover:text-elements-primary-main transition-all duration-300";
        break;

      case "standard":
      default:
        styles.container =
          scrolled || !transparent
            ? "bg-card-background/90 backdrop-blur-xl border-b border-border-dimmed/10 shadow-sm"
            : "bg-transparent";
        styles.navItem.active =
          "text-elements-primary-main relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-elements-primary-main after:to-elements-secondary-main after:rounded-full";
        styles.navItem.inactive =
          "text-text-secondary hover:text-elements-primary-main transition-all duration-300";
        break;
    }

    return styles;
  };

  const styles = getNavStyles();

  // Logo component with enhanced styling
  const LogoComponent = () => {
    if (logo) {
      const logoSrc = logo.dark; // Use dark logo for light mode
      return (
        <div className="relative">
          <Image
            src={logoSrc}
            alt="Logo"
            width={logo.width || 140}
            height={logo.height || 44}
            className="transition-all duration-300 hover:scale-105"
          />
        </div>
      );
    }

    // Fallback text logo when no image is provided
    return (
      <span className="text-xl font-bold bg-gradient-to-r from-elements-primary-main to-elements-secondary-main bg-clip-text text-transparent">
        LOGO
      </span>
    );
  };

  // Enhanced CTA Button component
  const CTAButton = () => {
    if (!cta.show) return null;

    return (
      <div className="relative">
        <Link
          href={cta.href || (cta.phoneNumber ? `tel:${cta.phoneNumber}` : "#")}
          className="relative inline-flex items-center px-6 py-2.5 text-sm font-semibold text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:text-elements-primary-main group"
          onClick={closeMenu}
        >
          {cta.phoneNumber && (
            <IconWrapper icon={LuPhone} className="mr-2 h-4 w-4" />
          )}
          {cta.text || "Contact Us"}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-elements-primary-main to-elements-secondary-main rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        </Link>
      </div>
    );
  };

  // Enhanced desktop nav item renderer
  const renderNavItem = (item: NavItem) => {
    const href =
      navMode === "single" && item.sectionId
        ? `#${item.sectionId}`
        : item.path || item.href || "/";
    const isActive =
      navMode === "single"
        ? activeSection === item.sectionId
        : pathname === item.path;

    if (item.disabled) {
      return (
        <span
          key={item.name}
          className={classNames(styles.navItem.base, styles.navItem.disabled)}
          aria-disabled="true"
        >
          {item.name}
        </span>
      );
    }

    if (item.children && item.children.length > 0) {
      return (
        <div key={item.name} className="relative">
          <Button
            type="text"
            extraClassNames={classNames(
              styles.navItem.base,
              item.current || isActive
                ? "text-elements-primary-main"
                : "group text-text-secondary hover:text-elements-primary-main transition-all duration-300",
              "px-0 py-0 shadow-none"
            )}
            onClick={() =>
              setDropdownOpen(dropdownOpen === item.name ? null : item.name)
            }
          >
            <span className="relative">
              {item.name}
              {isActive ? (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-elements-primary-main to-elements-secondary-main rounded-full" />
              ) : (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-elements-primary-main to-elements-secondary-main rounded-full transition-all duration-300 group-hover:w-full" />
              )}
            </span>
            <IconWrapper
              icon={LuChevronDown}
              className={classNames(
                "ml-2 h-4 w-4 transition-transform duration-200",
                dropdownOpen === item.name ? "rotate-180" : "rotate-0"
              )}
            />
          </Button>

          <AnimatePresence>
            {dropdownOpen === item.name && mounted && (
              <div className={styles.dropdown.container}>
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={styles.dropdown.panel}
                >
                  <div className="p-2">
                    {item.children.map((subItem, index) => {
                      const Icon = subItem.icon;
                      const subHref =
                        navMode === "single" && subItem.sectionId
                          ? `#${subItem.sectionId}`
                          : subItem.path || subItem.href || "/";
                      const isSubActive =
                        navMode === "single"
                          ? activeSection === subItem.sectionId
                          : pathname === subItem.path;

                      return (
                        <div key={subItem.name}>
                          <div className={styles.dropdown.item}>
                            {Icon && (
                              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-gradient-to-br from-elements-primary-shadow/10 to-elements-secondary-shadow/10 group-hover:from-elements-primary-shadow/20 group-hover:to-elements-secondary-shadow/20 transition-all duration-300">
                                <Icon className="h-5 w-5 text-elements-primary-main group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-text-primary group-hover:text-elements-primary-main transition-colors duration-300">
                                {subItem.name}
                              </p>
                              {subItem.description && (
                                <p className="mt-1 text-xs leading-relaxed text-text-tertiary group-hover:text-text-secondary transition-colors duration-300">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                            {!subItem.disabled && (
                              <Link
                                href={subHref}
                                scroll={href.startsWith("#")}
                                prefetch={false}
                                onClick={() => {
                                  setDropdownOpen(null);
                                  closeMenu();
                                }}
                                className="absolute inset-0 rounded-md"
                                aria-label={subItem.name}
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <div key={item.name}>
        <Link
          prefetch={false}
          href={href}
          scroll={href.startsWith("#")}
          className={classNames(
            styles.navItem.base,
            isActive
              ? "text-elements-primary-main"
              : "group text-text-secondary hover:text-elements-primary-main transition-all duration-300"
          )}
          onClick={closeMenu}
        >
          <span className="relative">
            {item.name}
            {isActive ? (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-elements-primary-main to-elements-secondary-main rounded-full" />
            ) : (
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-elements-primary-main to-elements-secondary-main rounded-full transition-all duration-300 group-hover:w-full" />
            )}
          </span>
        </Link>
      </div>
    );
  };

  // Enhanced mobile nav item renderer
  const renderMobileNavItem = (item: NavItem, index: number) => {
    const href =
      navMode === "single" && item.sectionId
        ? `#${item.sectionId}`
        : item.path || item.href || "/";
    const isActive =
      navMode === "single"
        ? activeSection === item.sectionId
        : pathname === item.path;

    if (item.disabled) {
      return (
        <div key={item.name} className="opacity-40">
          <span className="flex items-center px-4 py-3 text-base font-medium">
            {item.name}
          </span>
        </div>
      );
    }

    if (item.children && item.children.length > 0) {
      return (
        <div key={item.name} className="space-y-1">
          <Button
            type="text"
            extraClassNames={classNames(
              "flex w-full items-center justify-between px-4 py-3 text-base font-medium rounded-md transition-all duration-300 relative",
              dropdownOpen === item.name
                ? "text-elements-primary-main after:absolute after:bottom-1 after:left-4 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-elements-primary-main after:to-elements-secondary-main after:rounded-full"
                : "text-text-secondary hover:text-elements-primary-main",
              "shadow-none"
            )}
            onClick={() =>
              setDropdownOpen(dropdownOpen === item.name ? null : item.name)
            }
          >
            <span>{item.name}</span>
            <IconWrapper
              icon={LuChevronDown}
              className={classNames(
                "h-5 w-5 transition-transform duration-200",
                dropdownOpen === item.name ? "rotate-180" : "rotate-0"
              )}
            />
          </Button>

          <AnimatePresence>
            {dropdownOpen === item.name && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden ml-4 space-y-1"
              >
                {item.children.map((subItem, subIndex) => {
                  const subHref =
                    navMode === "single" && subItem.sectionId
                      ? `#${subItem.sectionId}`
                      : subItem.path || subItem.href || "/";
                  const isSubActive =
                    navMode === "single"
                      ? activeSection === subItem.sectionId
                      : pathname === subItem.path;

                  return (
                    <div key={subItem.name}>
                      <Link
                        href={subHref}
                        scroll={href.startsWith("#")}
                        className={classNames(
                          "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 relative",
                          isSubActive
                            ? "text-elements-primary-main after:absolute after:bottom-0 after:left-4 after:w-6 after:h-0.5 after:bg-gradient-to-r after:from-elements-primary-main after:to-elements-secondary-main after:rounded-full"
                            : "text-text-secondary hover:text-elements-primary-main"
                        )}
                        onClick={closeMenu}
                      >
                        <div className="flex-1">
                          <div>{subItem.name}</div>
                          {subItem.description && (
                            <p className="mt-1 text-xs text-text-tertiary">
                              {subItem.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <div key={item.name}>
        <Link
          href={href}
          scroll={href.startsWith("#")}
          className={classNames(
            "flex items-center px-4 py-3 text-base font-medium rounded-md transition-all duration-300 relative",
            isActive
              ? "text-elements-primary-main after:absolute after:bottom-1 after:left-4 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-elements-primary-main after:to-elements-secondary-main after:rounded-full"
              : "text-text-secondary hover:text-elements-primary-main"
          )}
          onClick={closeMenu}
        >
          {item.name}
        </Link>
      </div>
    );
  };

  // Enhanced mobile menu button
  const renderMobileMenuButton = () => (
    <Button
      type="icon"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle menu"
      extraClassNames="p-2 text-text-secondary hover:text-text-primary hover:bg-neutral/50 transition-all duration-200"
    >
      <div
        className={classNames(
          "transition-transform duration-200",
          mobileMenuOpen ? "rotate-90" : "rotate-0"
        )}
      >
        {mobileMenuOpen ? (
          <IconWrapper icon={LuX} className="w-6 h-6" />
        ) : (
          <IconWrapper icon={LuMenu} className="w-6 h-6" />
        )}
      </div>
    </Button>
  );

  return (
    <div
      className={classNames(
        "fixed w-full top-0 z-50 transition-all duration-300",
        className
      )}
    >
      <header
        className={classNames("transition-all duration-300", styles.container)}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo section */}
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="relative z-10">
                <LogoComponent />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {navigationItems.map(renderNavItem)}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {showThemeSwitcher && (
                <div className="p-1">
                  <ThemeSwitcher />
                </div>
              )}
              <CTAButton />
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-3 md:hidden">
              {showThemeSwitcher && <ThemeSwitcher />}
              <CTAButton />
              {renderMobileMenuButton()}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.mobileMenu.panel}
          >
            <div className="px-4 py-6 space-y-1">
              {navigationItems.map((item, index) =>
                renderMobileNavItem(item, index)
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConfigurableNavigation;
