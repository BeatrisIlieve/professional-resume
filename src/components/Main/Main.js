import styles from "./Main.module.css";

export const Main = () => {
  return (
    <ul className={styles["list"]} role="list">
      <li className={styles["list-item"]}>
        Built with <b>MongoDB</b>, <b>Express</b>.js, <b>React</b> and{" "}
        <b>Node</b>.js
      </li>
      <li className={styles["list-item"]}>
        Hosted on <b>Amazon Web Services</b> EC2 Instance
      </li>
      <li className={`${styles["list-item"]}`}>
        <div className={`${styles["testing-wrapper"]}`}>
          <span>Testing - Jest</span>
          <span>
            <img
              src="https://img.shields.io/badge/Frontend-80%25-brightgreen.svg"
              alt="Coverage Status"
            />
          </span>
          <span>
            <img
              src="https://img.shields.io/badge/Backend-84%25-brightgreen.svg"
              alt="Coverage Status"
            />
          </span>
        </div>
      </li>
      <li className={styles["list-item"]}>
        Optimized performance with React's <b>useMemo</b>, <b>useCallback</b>,
        and <b>memo</b>
      </li>
      <li className={styles["list-item"]}>
        Custom <b>Forms</b>
      </li>
      <li className={styles["list-item"]}>
        Input Validation providing <b>immediate feedback before submission</b>
      </li>
      <li className={styles["list-item"]}>
        Error Handling delivering notifications for <b>backend</b> issues
      </li>
      <li className={styles["list-item"]}>
        <b>Database aggregations</b> for Product Filtering and Real-Time
        Availability Tracking
      </li>
      <li className={styles["list-item"]}>
        <b>Responsive Design</b> - fully optimized for all device sizes
      </li>
    </ul>
  );
};
