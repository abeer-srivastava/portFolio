import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
  title: "Abeer Srivastava | Full-Stack Developer",
  description: "Full-Stack Developer building scalable, AI-powered applications. Specializing in cloud-native architectures, real-time systems, and modern web technologies.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Cloud", "AI/ML"],
  authors: [{ name: "Abeer Srivastava" }],
  openGraph: {
    title: "Abeer Srivastava | Full-Stack Developer",
    description: "Full-Stack Developer building scalable, AI-powered applications",
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

