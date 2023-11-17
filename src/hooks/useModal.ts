import { useState } from "react";

export type TUseModal = {
  visible: boolean;
  open: () => void;
  close: () => void;
};

export const useModal = (initialVisibility?: boolean): TUseModal => {
  const [visible, setVisible] = useState(initialVisibility || false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return { visible, open, close };
};
