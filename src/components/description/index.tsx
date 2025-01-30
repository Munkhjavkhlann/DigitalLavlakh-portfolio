import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import RoundedButton from "@/common/rounded-button";

export default function Description() {
  const phrase =
    " From pixel-perfect design to scalable code, we turn complex ideas into seamless digital experiences.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          From pixel-perfect design to scalable code, we turn complex ideas into
          seamless digital experiences.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <RoundedButton className={styles.button}>
            <p>Explore Our Work</p>
          </RoundedButton>
        </div>
      </div>
    </div>
  );
}
