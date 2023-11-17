import { AnimatePresence, motion } from "framer-motion";
import LogoIcon from "../../assets/logo.svg?react";

import styles from "./Bubble.module.css";

type Props = {};

export const Bubble: React.FC<Props> = ({}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.Bubble}
        initial={{ translateY: 15, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
      >
        <LogoIcon />
        <div className={styles.Message}>Lorem Ipsum</div>
      </motion.div>
    </AnimatePresence>
  );
};
