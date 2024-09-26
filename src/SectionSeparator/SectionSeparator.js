import styles from "./SectionSeparator.module.css";

export const SectionSeparator = ({ text }) => {
  return (
    <div className={styles["section-separator"]}>
      <h2 className={styles["text"]}>{text}</h2>
    </div>
  );
};
