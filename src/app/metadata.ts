import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "OCC Events & Catering",
    template: "%s | OCC Events & Catering",
  },
  description:
    "OCC Events & Catering offers bespoke catering for all types of events with standout Indian and Afghan menus.",
  keywords: [
    "OCC Events",
    "Catering",
    "Indian Catering",
    "Afghan Catering",
    "Bespoke Events",
  ],
  metadataBase: new URL("https://occevents.co.uk"),
  openGraph: {
    title: "OCC Events & Catering",
    description:
      "Bespoke event catering specialising in Indian and Afghan cuisine.",
    url: "https://occevents.co.uk",
    siteName: "OCC Events & Catering",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "OCC Events & Catering",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  // Optional: Uncomment and update for Twitter Card support
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Your Site Name",
  //   description: "Twitter description here",
  //   images: ["/images/og-image.png"],
  //   site: "@yourhandle",
  // },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
  },
};
