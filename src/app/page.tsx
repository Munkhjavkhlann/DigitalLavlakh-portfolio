"use client";
import styles from "./page.module.scss";
import Landing from "@/components/landing";
import Description from "@/components/description";
import Projects from "@/components/projects";
import SlidingImages from "@/components/sliding-images";
import Contact from "@/components/contact";

export default function Home() {

  return (
    <main className={styles.page}>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}