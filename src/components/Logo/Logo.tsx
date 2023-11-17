import LogoIcon from "../../assets/logo.svg?react";
import styles from "./Logo.module.css";

type Props = {
  label: string;
};

export const Logo: React.FC<Props> = ({ label }) => {
  return (
    <div className={styles.Logo}>
      <LogoIcon />
      <span className={styles.Text}>{label}</span>
    </div>
  );
};
