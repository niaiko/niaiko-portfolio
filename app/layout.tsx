import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niaiko Rakoto - Full Stack Developer",
  description: "Portfolio de Niaiko Rakoto, développeur Full Stack JavaScript spécialisé en Angular, React, NestJS et technologies modernes.",
  keywords: ["Niaiko Rakoto", "Full Stack Developer", "Angular", "React", "NestJS", "JavaScript", "TypeScript", "Madagascar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
