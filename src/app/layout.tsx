"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import Header from "@/components/header";
import Preloader from "@/components/preloader";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const scroll = new LocomotiveScroll

    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflow = "auto";
    }, 2000);

    return () => {
      clearTimeout(timeout);
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Header />
        <main data-scroll-section>{children}</main>
      </body>
    </html>
  );
}