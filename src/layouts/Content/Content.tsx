import styles from "./Content.module.css";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Content: React.FC<Props> = ({ title, children }) => {
  return (
    <article className={styles.Content}>
      <h2 className={styles.Title}>{title}</h2>
      <div className={styles.Container}>{children}</div>
    </article>
  );
};
