// src/app/layout.tsx

import type { Metadata } from "next";
// 1. Import the Tangerine font directly from the special 'next/font/google' module
import { Tangerine } from "next/font/google";
import "./globals.css";

// 2. Configure the font. Tangerine only comes in 400 and 700 weights.
//    We are including both weights for normal style (Tangerine doesn't have italic).
const tangerineFont = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: 'swap',
  // This variable is a CSS variable that makes it easy to use the font if you need to
  variable: '--font-tangerine', 
});

// Your metadata can stay the same
export const metadata: Metadata = {
  title: "Happy Birthday!",
  description: "A special project for a special person",
};

// This is the main layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
        3. Apply the font to the <body> tag.
           We use a template literal `${tangerineFont.className}` to do this.
           This tells every element on your page to use the Tangerine font by default.
      */}
      <body className={tangerineFont.className}>
        {children}
      </body>
    </html>
  );
}