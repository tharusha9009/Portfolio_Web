// portfolio-nextjs/src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style.css"; // Import custom global styles
import Layout from "./components/Layout"; // Import the new Layout component
import AppProviders from "./components/AppProviders"; // Import AppProviders

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TharushaL.dev - Portfolio", // Updated title
  description: "The portfolio of Tharusha Lakshan, a Game developer/designer and Web developer.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Add to html or body */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning // More specific to body if only body class changes
      >
        <AppProviders>
          <Layout>{children}</Layout> {/* Layout component is now wrapped by AppProviders */}
        </AppProviders>
      </body>
    </html>
  );
}
