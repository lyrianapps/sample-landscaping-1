import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Varela_Round } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sample Landscaping Services",
  description: "A sampel application showcasing landscaping services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${varelaRound.variable} antialiased font-sans`}
        style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
      >
        <style>
          {`
            h1, h2, h3, h4, h5, h6 {
              font-family: var(--font-varela-round), sans-serif;
            }
          `}
        </style>
        {children}
      </body>
    </html>
  );
}
