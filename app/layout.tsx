import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "Puvanakopis — AI/ML Engineer",
  description:
    "AI/ML-focused Software Engineering undergraduate experienced in LLMs, RAG pipelines, and intelligent systems. Building scalable AI and web applications.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "RAG",
    "LLMs",
    "FastAPI",
    "React",
    "Next.js",
    "Python",
    "Sri Lanka",
    "Puvanakopis",
  ],
  authors: [{ name: "Puvanakopis", url: "https://github.com/puvanakopis" }],
  creator: "Puvanakopis",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Puvanakopis — AI/ML Engineer",
    description:
      "AI/ML-focused Software Engineering undergraduate experienced in LLMs, RAG pipelines, and intelligent systems.",
    siteName: "Puvanakopis Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puvanakopis — AI/ML Engineer",
    description:
      "AI/ML-focused Software Engineering undergraduate experienced in LLMs, RAG pipelines, and intelligent systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
