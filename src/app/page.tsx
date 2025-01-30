"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Landing from "@/components/landing";
import Preloader from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
import Description from "@/components/description";
import Projects from "@/components/projects";
import SlidingImages from "@/components/sliding-images";
import Contact from "@/components/contact";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.page}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
