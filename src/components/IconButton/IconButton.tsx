import styles from "./IconButton.module.css";

type Props = {
  icon: React.ReactNode;
  onClick?: () => void;
};

export const IconButton: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <button className={styles.IconButton} onClick={onClick}>
      {icon}
    </button>
  );
};
