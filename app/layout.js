import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/customCursor";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://portfolio-me-kappa-weld.vercel.app"),

  title: "Afeef M | Frontend Developer",
  description:
    "Frontend Developer portfolio showcasing projects built with React, Next.js, and Tailwind CSS.",

  icons: {
    icon: "/icon.svg",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Afeef M | Frontend Developer",
    description:
      "Frontend Developer portfolio showcasing projects built with React, Next.js, and Tailwind CSS.",
    url: "https://portfolio-me-kappa-weld.vercel.app",
    siteName: "Afeef M Portfolio",
    images: [
      {
        url: "https://portfolio-me-kappa-weld.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Afeef M | Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
         <CustomCursor />
        {children}
         <Footer />
      </body>
    </html>
  );
}
