import "./globals.css";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import TransitionProvider from "../providers/TransitionProvider";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});


export const metadata = {
  title: "SVG Stroke Page Transition",
  description: "SVG Stroke Page Transition with Next.js and GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
};
