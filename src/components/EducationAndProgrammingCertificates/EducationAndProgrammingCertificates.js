import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

import styles from "./EducationAndProgrammingCertificates.module.css";

export const EducationAndProgrammingCertificates = () => {
  return (
    <section className={styles["education-and-programming-certificates"]}>
      <div className={styles["education"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["university-title"]}>
            New Bulgarian University
          </div>
          <div className={styles["education-year"]}>
            October 2016 - July 2018
          </div>
          <ul role="list">
            <li className={styles["education-title"]}>
              <FontAwesomeIcon icon={faUserGraduate} /> Master of Strategic
              Leadership
            </li>
          </ul>
        </div>
        <div className={styles["wrapper"]}>
          <div className={styles["university-title"]}>
            University of National and World Economy
          </div>
          <div className={styles["education-year"]}>
            September 2012 - July 2016
          </div>
          <ul role="list">
            <li className={styles["education-title"]}>
              <FontAwesomeIcon icon={faUserGraduate} /> Bachelor of Economics
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["certificates"]}>
        <a
          href="https://res.cloudinary.com/deztgvefu/image/upload/certificates/basics_cjsywg.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/certificates/basics_cjsywg.jpg"
            alt=""
            className={styles["certificate-image"]}
          />
        </a>
        <a
          href="https://res.cloudinary.com/deztgvefu/image/upload/certificates/fundamentals_r7mfkc.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/certificates/fundamentals_r7mfkc.jpg"
            alt=""
            className={styles["certificate-image"]}
          />
        </a>
        <a
          href="https://res.cloudinary.com/deztgvefu/image/upload/certificates/advanced_z8ngo4.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/certificates/advanced_z8ngo4.jpg"
            alt=""
            className={styles["certificate-image"]}
          />
        </a>
        <a
          href="https://res.cloudinary.com/deztgvefu/image/upload/certificates/OOP_iqpplb.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/certificates/OOP_iqpplb.jpg"
            alt=""
            className={styles["certificate-image"]}
          />
        </a>
        <a
          href="https://res.cloudinary.com/deztgvefu/image/upload/certificates/postgreSQL_cezowk.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/certificates/postgreSQL_cezowk.jpg"
            alt=""
            className={styles["certificate-image"]}
          />
        </a>
        <a
          href="https://res.cloudinary.com/deztgvefu/image/upload/certificates/ORM_mxriuq.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/certificates/ORM_mxriuq.jpg"
            alt=""
            className={styles["certificate-image"]}
          />
        </a>
      </div>
    </section>
  );
};
