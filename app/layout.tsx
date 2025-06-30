import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppSettingData } from "../config/app-data/appSetting";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: `${AppSettingData.appName} - Modern Portfolio Generator`,
  description:
    "A modern portfolio generator that creates stunning developer portfolios and auto-generates professional CVs without writing code. Choose a template, update configs, deploy.",
  keywords: [
    "portfolio generator",
    "developer portfolio",
    "portfolio template",
    "open source",
    "web development",
    "cv generator",
    "resume builder",
  ],
  authors: [{ name: "IDAN-DEVS" }],
  creator: "IDAN-DEVS",
  publisher: AppSettingData.appName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${AppSettingData.appName} - Modern Portfolio Generator`,
    description:
      "Create stunning developer portfolios in minutes. Choose templates, update configs, deploy instantly.",
    siteName: AppSettingData.appName,
    images: [
      {
        url: "/images/portify_logo.png",
        width: 1200,
        height: 630,
        alt: `${AppSettingData.appName} - Portfolio Generator`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AppSettingData.appName} - Modern Portfolio Generator`,
    description:
      "Create stunning developer portfolios in minutes. Choose templates, update configs, deploy instantly.",
    images: ["/images/portify_logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
