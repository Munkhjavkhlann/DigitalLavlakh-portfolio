"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { text, curve, translate } from "./animation";

interface CurveProps {
  children: React.ReactNode;
  backgroundColor: string;
}

type Dimensions = {
  width: number | null;
  height: number | null;
};

type SVGProps = {
  height: number;
  width: number;
};

const routes: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const anim = (variants: Variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }: CurveProps) {
  const pathname = usePathname(); // Use usePathname to get the current route
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width === null ? 1 : 0 }}
        className="background"
      />
      <motion.p className="route" {...anim(text)}>
        {routes[pathname] || "Home"}
      </motion.p>
      {dimensions.width !== null && dimensions.height !== null && (
        <SVG height={dimensions.height} width={dimensions.width} />
      )}
      {children}
    </div>
  );
}

const SVG = ({ height, width }: SVGProps) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};