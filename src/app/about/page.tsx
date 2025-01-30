"use client";

import Description from "@/components/description";
import Landing from "@/components/landing";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <main style={{ height: "200vh" }}>
      <Landing />
      <Description />
      <Projects />
    </main>
  );
}
