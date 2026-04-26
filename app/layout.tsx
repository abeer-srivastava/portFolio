import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { DebugProvider } from "@/components/providers/DebugProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <DebugProvider>
            {children}
          </DebugProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
