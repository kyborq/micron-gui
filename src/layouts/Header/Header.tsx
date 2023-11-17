import {
  FileIcon,
  OpenIcon,
  PlayIcon,
  SaveIcon,
  ShareIcon,
} from "../../assets/icons";
import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton";
import { Logo } from "../../components/Logo";

import styles from "./Header.module.css";

type Props = {
  onCompile?: () => void;
};

export const Header: React.FC<Props> = ({ onCompile }) => {
  return (
    <header className={styles.Header}>
      <Logo label="Микрон" />
      <div className={styles.Actions}>
        <IconButton icon={<FileIcon />} />
        <IconButton icon={<OpenIcon />} />
        <IconButton icon={<SaveIcon />} />
      </div>
      <div className={styles.Navigation}>
        <IconButton icon={<ShareIcon />} />
        <Button label="Запустить" icon={<PlayIcon />} onClick={onCompile} />
      </div>
    </header>
  );
};
