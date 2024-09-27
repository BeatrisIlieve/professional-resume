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
      <div className={styles["outer-wrapper"]}>
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
            {/* <div className={styles["contact-item"]}>
              <FontAwesomeIcon icon={faPhone} /> 0877566691
            </div> */}
          </div>
        </div>
        <ul className={styles["skills-list"]} role="list">
          <li className={styles["list-item"]}>React</li>
          <li className={styles["list-item"]}>JavaScript ES6</li>
          <li className={styles["list-item"]}>AJAX</li>
          <li className={styles["list-item"]}>CSS3</li>
          <li className={styles["list-item"]}>HTML5</li>
          <li className={styles["list-item"]}>Handlebars</li>
          <li className={styles["list-item"]}>Node.js</li>
          <li className={styles["list-item"]}>Express.js</li>
          <li className={styles["list-item"]}>Python</li>
          <li className={styles["list-item"]}>Django</li>
          <li className={styles["list-item"]}>PostgreSQL</li>
          <li className={styles["list-item"]}>MongoDB</li>
          <li className={styles["list-item"]}>Mongoose</li>
          <li className={styles["list-item"]}>Jest</li>
          <li className={styles["list-item"]}>GitHub Actions</li>
          <li className={styles["list-item"]}>Amazon Web Services</li>
          <li className={styles["list-item"]}>Visual Studio Code</li>
          <li className={styles["list-item"]}>Pycharm</li>
          <li className={styles["list-item"]}>Docker</li>
        </ul>
      </div>
    </header>
  );
};
