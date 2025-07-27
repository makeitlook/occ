import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IconType } from "react-icons";
import { LuHouse, LuInfo, LuFile, LuPhone } from "react-icons/lu";

// Define navigation item structure
export interface NavigationItem {
  name: string;
  sectionId?: string; // For anchor-based single-page nav
  path?: string; // For route-based multi-page nav
  current: boolean;
  icon?: IconType;
  description?: string;
  children?: NavigationItem[];
  disabled?: boolean;
}

// Hook-based config (e.g. for dynamic use in app)
export function useNavigationConfig(): {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} {
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = useMemo(
    () => [
      {
        name: "Home",
        sectionId: "home",
        path: "/",
        current: pathname === "/",
        icon: LuHouse,
      },
      {
        name: "About",
        sectionId: "about",
        path: "/about",
        current: pathname === "/about",
        icon: LuInfo,
      },
      {
        name: "Services",
        sectionId: "services",
        path: "/services",
        current: pathname.startsWith("/services"),
        icon: LuFile,
        children: [
          {
            name: "Event Catering",
            sectionId: "event-catering",
            path: "/services/event-catering",
            current: pathname === "/services/event-catering",
            icon: LuFile,
            description: "Catering for weddings and events",
          },
          {
            name: "Private Dining",
            sectionId: "private-dining",
            path: "/services/private-dining",
            current: pathname === "/services/private-dining",
            icon: LuFile,
            description: "Restaurant-quality meals at home",
          },
          {
            name: "Partnered Venues",
            sectionId: "partnered-venues",
            path: "/services/partnered-venues",
            current: pathname === "/services/partnered-venues",
            icon: LuFile,
            description: "Trusted event locations",
          },
          {
            name: "Bespoke Catering",
            sectionId: "bespoke-catering",
            path: "/services/bespoke-catering",
            current: pathname === "/services/bespoke-catering",
            icon: LuFile,
            description: "Custom menus for any occasion",
          },
        ],
      },
      {
        name: "Gallery",
        sectionId: "gallery",
        path: "/gallery",
        current: pathname === "/gallery",
        icon: LuFile,
      },
      {
        name: "Contact",
        sectionId: "contact",
        path: "/contact",
        current: pathname === "/contact",
        icon: LuPhone,
      },
    ],
    [pathname]
  );

  return {
    navigationItems,
    showNavigation: true,
  };
}

// Predefined configs for different layout needs
export const mainNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    { name: "Home", sectionId: "home", path: "/", current: true },
    { name: "About", sectionId: "about", path: "/about", current: false },
    {
      name: "Services",
      sectionId: "services",
      path: "/services",
      current: false,
      children: [
        {
          name: "Event Catering",
          sectionId: "event-catering",
          path: "/services/event-catering",
          current: false,
          icon: LuFile,
          description: "Catering for weddings and events",
        },
        {
          name: "Private Dining",
          sectionId: "private-dining",
          path: "/services/private-dining",
          current: false,
          icon: LuFile,
          description: "Restaurant-quality meals at home",
        },
        {
          name: "Partnered Venues",
          sectionId: "partnered-venues",
          path: "/services/partnered-venues",
          current: false,
          icon: LuFile,
          description: "Trusted event locations",
        },
        {
          name: "Bespoke Catering",
          sectionId: "bespoke-catering",
          path: "/services/bespoke-catering",
          current: false,
          icon: LuFile,
          description: "Custom menus for any occasion",
        },
      ],
    },
    { name: "Gallery", sectionId: "gallery", path: "/gallery", current: false },
    { name: "Contact", sectionId: "contact", path: "/contact", current: false },
  ],
  showNavigation: true,
};

export const minimalistNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    { name: "Home", sectionId: "home", path: "/", current: true },
    { name: "Contact", sectionId: "contact", path: "/contact", current: false },
  ],
  showNavigation: true,
};

export const fullNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    { name: "Home", sectionId: "home", path: "/", current: true },
    { name: "About", sectionId: "about", path: "/about", current: false },
    {
      name: "Services",
      sectionId: "services",
      path: "/services",
      current: false,
      children: [
        {
          name: "Event Catering",
          sectionId: "event-catering",
          path: "/services/event-catering",
          current: false,
          icon: LuFile,
          description: "Catering for weddings and events",
        },
        {
          name: "Private Dining",
          sectionId: "private-dining",
          path: "/services/private-dining",
          current: false,
          icon: LuFile,
          description: "Restaurant-quality meals at home",
        },
        {
          name: "Partnered Venues",
          sectionId: "partnered-venues",
          path: "/services/partnered-venues",
          current: false,
          icon: LuFile,
          description: "Trusted event locations",
        },
        {
          name: "Bespoke Catering",
          sectionId: "bespoke-catering",
          path: "/services/bespoke-catering",
          current: false,
          icon: LuFile,
          description: "Custom menus for any occasion",
        },
      ],
    },
    { name: "Gallery", sectionId: "gallery", path: "/gallery", current: false },
    { name: "Contact", sectionId: "contact", path: "/contact", current: false },
  ],
  showNavigation: true,
};
