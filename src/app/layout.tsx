import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EsHTML | Lenguaje de marcado con sintaxis en Español basado en HTML",
  description: "EsHTML permite escribir HTML usando etiquetas en español, eliminando la barrera del idioma en el desarrollo web. Compatible con todos los navegadores.",
  keywords: "HTML, español, desarrollo web, programación, aprendizaje, español HTML, HTML en español, web development, Spanish, lenguaje de marcado",
  openGraph: {
    title: "EsHTML | Lenguaje de marcado en Español",
    description: "Escribe HTML usando etiquetas en español",
    type: "website",
    locale: "es",
    siteName: "EsHTML",
  },
  twitter: {
    card: "summary_large_image",
    title: "EsHTML | Lenguaje de marcado en Español",
    description: "Escribe HTML usando etiquetas en español",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
