import styles from "./Side.module.css";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Side: React.FC<Props> = ({ title, children }) => {
  return (
    <article className={styles.Side}>
      <h2 className={styles.Title}>{title}</h2>
      <div className={styles.Container}>{children}</div>
    </article>
  );
};
