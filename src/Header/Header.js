import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <img
        className={styles["image"]}
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1706895025/template_images/p_maerv8.jpg"
        alt="author"
      />
      <div className={styles["wrapper"]}>
        <h1 className={styles["name"]}>Beatris Ilieva</h1>
        <div className={styles["contact-details"]}>
          <div className={styles["contact-item"]}>
            <FontAwesomeIcon icon={faGithub} />
            <a
              href="https://github.com/BeatrisIlieve"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              https://github.com/BeatrisIlieve
            </a>
          </div>
          <div className={styles["contact-item"]}>
            <FontAwesomeIcon icon={faEnvelope} /> beatrisilieve@icloud.com
          </div>
          <div className={styles["contact-item"]}>
            <FontAwesomeIcon icon={faHouse} /> Sofia, Bulgaria
          </div>
          <div className={styles["contact-item"]}>
            <FontAwesomeIcon icon={faPhone} /> 0877566691
          </div>
        </div>
      </div>
    </header>
  );
};
