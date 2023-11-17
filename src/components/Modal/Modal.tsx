import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { TUseModal } from "../../hooks/useModal";

import styles from "./Modal.module.css";

type Props = {
  state: TUseModal;
  children?: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ state, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, state.close);

  return (
    <AnimatePresence>
      {state.visible && (
        <motion.div
          className={styles.Overlay}
          initial={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
          }}
          animate={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(24px)",
          }}
          exit={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
          }}
        >
          <motion.div
            ref={modalRef}
            className={styles.Modal}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
