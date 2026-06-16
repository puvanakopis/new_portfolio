import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.puvanakopis.me"),
  title: "Puvanakopis — AI Engineer",
  description:
    "Portfolio of Puvanakopis Mehanathan, a Software Engineering undergraduate specializing in AI Engineering, Agentic AI Systems, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Full-Stack AI Applications.",
  authors: [{ name: "Puvanakopis Mehanathan" }],
  openGraph: {
    title: "Puvanakopis — AI Engineer",
    description:
      "Building intelligent AI-powered applications using LLMs, RAG pipelines, AI agents, and modern full-stack technologies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@puvanakopis",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}