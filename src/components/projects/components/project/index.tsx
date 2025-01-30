"use client";
import React from "react";
import styles from "./style.module.scss";

interface ProjectProps {
  index: number;
  title: string;
  manageModal: (show: boolean, index: number, x: number, y: number) => void;
}

export default function Project({ index, title, manageModal }: ProjectProps) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
