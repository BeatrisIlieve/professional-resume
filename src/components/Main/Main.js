import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import styles from "./Main.module.css";

export const Main = () => {
  return (
    <section className={styles["main"]}>
      <div className={styles["left"]}>
        <div className={styles["video"]}>
          <h3 className={styles["media-title"]}>Demo Video on Desktop:</h3>
          <a
            href="https://www.youtube.com/watch?v=vduKmyrec2k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/vduKmyrec2k/maxresdefault.jpg"
              alt="Watch the video"
            />
          </a>
        </div>
        <ul className={styles["description-list"]} role="list">
          <li className={styles["list-item"]}>
            <FontAwesomeIcon
              icon={faCode}
              className={styles["description-icon"]}
            />{" "}
            Built with <b>MongoDB</b>, <b>Express</b>.js, <b>React</b> and{" "}
            <b>Node</b>.js
          </li>
          <li className={styles["list-item"]}>
            <FontAwesomeIcon
              icon={faCode}
              className={styles["description-icon"]}
            />{" "}
            Hosted on <b>Amazon Web Services</b> EC2 Instance
          </li>
          <li className={styles["list-item"]}>
            <FontAwesomeIcon
              icon={faCode}
              className={styles["description-icon"]}
            />
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
            <FontAwesomeIcon
              icon={faCode}
              className={styles["description-icon"]}
            />{" "}
            Optimized performance with React's <b>useMemo</b>,{" "}
            <b>useCallback</b> and <b>memo</b>
          </li>
          <li className={styles["list-item"]}>
            <FontAwesomeIcon
              icon={faCode}
              className={styles["description-icon"]}
            />{" "}
            Custom <b>Forms</b>
          </li>
          <li className={styles["list-item"]}>
            <FontAwesomeIcon
              icon={faCode}
              className={styles["description-icon"]}
            />{" "}
            Input Validation providing{" "}
            <b>immediate feedback before submission</b>
          </li>
          <li className={styles["list-item"]}>
            <FontAwesomeIcon
              icon={faCode}
              className={styles["description-icon"]}
            />{" "}
            Error Handling delivering notifications for <b>backend</b> issues
          </li>
          <li className={styles["list-item"]}>
            <FontAwesomeIcon
              icon={faCode}
              className={styles["description-icon"]}
            />{" "}
            <b>Database aggregations</b> for Product Filtering and Availability
            Tracking
          </li>
          <li className={styles["list-item"]}>
            <FontAwesomeIcon
              icon={faCode}
              className={styles["description-icon"]}
            />{" "}
            <b>Responsive Design</b> - optimized for all device sizes via media queries
          </li>
        </ul>
        <div className={styles["links"]}>
          <div className={styles["media-title"]}>
            <FontAwesomeIcon icon={faLink} className={styles["link-icon"]} />{" "}
            Website:
            <a
              href="http://ec2-15-236-191-107.eu-west-3.compute.amazonaws.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              http://ec2-15-236-191-107.eu-west-3.compute.amazonaws.com
            </a>
          </div>
          <div className={styles["media-title"]}>
            <FontAwesomeIcon icon={faLink} className={styles["link-icon"]} />{" "}
            Frontend Repository:
            <a
              href="https://github.com/BeatrisIlieve/mern-gems-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              https://github.com/BeatrisIlieve/mern-gems-frontend
            </a>
          </div>
          <div className={styles["media-title"]}>
            <FontAwesomeIcon icon={faLink} className={styles["link-icon"]} />{" "}
            Backend Repository:
            <a
              href="https://github.com/BeatrisIlieve/mern-gems-backend"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              https://github.com/BeatrisIlieve/mern-gems-backend
            </a>
          </div>
        </div>
      </div>
      <div className={styles["right"]}>
        <h3 className={styles["media-title"]}>On Mobile:</h3>
        <div className={styles["right-wrapper"]}>
          <div className={styles["half"]}>
            <a
              href="https://res.cloudinary.com/deztgvefu/image/upload/mobile/login_imeoyy.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/login_imeoyy.png"
                alt=""
                className={styles["mobile-images-style"]}
              />
            </a>
            <a
              href="https://res.cloudinary.com/deztgvefu/image/upload/mobile/home_dpk40t.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/home_dpk40t.png"
                alt=""
                className={styles["mobile-images-style"]}
              />
            </a>
          </div>
          <div className={styles["half"]}>
            <a
              href="https://res.cloudinary.com/deztgvefu/image/upload/mobile/collection_fkxgvc.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/collection_fkxgvc.png"
                alt=""
                className={styles["mobile-images-style"]}
              />
            </a>
            <a
              href="https://res.cloudinary.com/deztgvefu/image/upload/mobile/bag_wurlyj.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/bag_wurlyj.png"
                alt=""
                className={styles["mobile-images-style"]}
              />
            </a>
          </div>
          <div className={styles["half"]}>
            <a
              href="https://res.cloudinary.com/deztgvefu/image/upload/mobile/wishlist_gs1tbv.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/wishlist_gs1tbv.png"
                alt=""
                className={styles["mobile-images-style"]}
              />
            </a>
            <a
              href="https://res.cloudinary.com/deztgvefu/image/upload/mobile/order-confirmation_gwrn5n.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/order-confirmation_gwrn5n.png"
                alt=""
                className={styles["mobile-images-style"]}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
