// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: {
    default: "OCC Events & Catering",
    template: "%s | OCC Events & Catering",
  },
  description:
    "Bespoke catering for all occasions with authentic Indian and Afghan menus.",
  keywords: ["OCC Events", "Catering", "Indian Catering", "Afghan Catering"],
  metadataBase: new URL("https://occevents.co.uk"),
  openGraph: {
    title: "OCC Events & Catering",
    description:
      "Bespoke event catering specialising in Indian and Afghan cuisine.",
    url: "https://occevents.co.uk",
    siteName: "OCC Events & Catering",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OCC Events & Catering",
    description:
      "Bespoke catering for all occasions with authentic Indian and Afghan menus.",
    images: ["/images/og-image.jpg"],
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
