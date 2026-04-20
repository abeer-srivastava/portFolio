import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abeer Srivastava | Backend Engineer",
  description: "Backend Engineer specializing in distributed systems, REST/GraphQL APIs, and cloud-native infrastructure.",
  keywords: ["Backend Engineer", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Distributed Systems"],
  authors: [{ name: "Abeer Srivastava" }],
  openGraph: {
    title: "Abeer Srivastava | Backend Engineer",
    description: "Backend Engineer specializing in distributed systems, REST/GraphQL APIs, and cloud-native infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${jetbrainsMono.variable} ${spaceMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

