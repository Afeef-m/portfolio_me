import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/customCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   icons: {
    icon: "/icon.svg",
  },
  title: "Afeef M | Frontend Developer",
  description:
    "Frontend Developer portfolio showcasing projects built with React, Next.js, and Tailwind CSS.",

  openGraph: {
    title: "Afeef M | Frontend Developer",
    description:
      "Frontend Developer portfolio showcasing projects built with React, Next.js, and Tailwind CSS.",
    url: "https://your-domain.com", 
    siteName: "Afeef M Portfolio",
    images: [
      {
        url: "/og-image.png",
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
         <CustomCursor />
        {children}
      </body>
    </html>
  );
}
