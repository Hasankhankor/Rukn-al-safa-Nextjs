import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MobileStickyFooter from "./components/MobileStickyFooter";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { ClerkProvider, SignIn, SignedOut, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rukn Al Safa",
  description: "Reliable Care at Your Fingertip",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          {/* Navbar should always be at the top */}
          <Navbar />

          {/* Page content */}
          {children}

          {/* Scroll and Footer */}
          <ScrollToTopButton />
          <MobileStickyFooter />

          {/* SignIn modal will be handled by the useSignIn hook */}
        </ClerkProvider>
      </body>
    </html>
  );
}
