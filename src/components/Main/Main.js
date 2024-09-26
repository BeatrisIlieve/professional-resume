export const Main = () => {
  return (
    <ul className={styles["list"]} role="list">
      <li className={styles["list-item-more-pad"]}>
        Built with <b>MongoDB</b>, <b>Express</b>.js, <b>React</b> and{" "}
        <b>Node</b>.js
      </li>
      <li className={styles["list-item-more-pad"]}>
        Hosted on <b>Amazon Web Services</b> EC2 Instance
      </li>
      <li className={`${styles["list-item-more-pad"]}`}>
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
          <span>
            (<b>AI</b> has been a great help)
          </span>
        </div>
      </li>
      <li className={styles["list-item-more-pad"]}>
        Optimized performance with React's <b>useMemo</b>, <b>useCallback</b>,
        and <b>memo</b>
      </li>
      <li className={styles["list-item-more-pad"]}>
        Custom <b>Forms</b>
      </li>
      <li className={styles["list-item-more-pad"]}>
        Input Validation providing <b>immediate feedback before submission</b>
      </li>
      <li className={styles["list-item-more-pad"]}>
        Error Handling delivering notifications for <b>backend</b> issues
      </li>
      <li className={styles["list-item-more-pad"]}>
        <b>Database aggregations</b> for Product Filtering and Real-Time
        Availability Tracking
      </li>
      <li className={styles["list-item-more-pad"]}>
        <b>Responsive Design</b> - fully optimized for all device sizes
        <div className={styles["grid-container"]}>
          <a
            href="https://res.cloudinary.com/deztgvefu/image/upload/v1726649931/mobile/login_cpsdjd.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/deztgvefu/image/upload/v1726649931/mobile/login_cpsdjd.png"
              alt=""
              className={styles["mobile-images-style"]}
            />
          </a>
          <a
            href="https://res.cloudinary.com/deztgvefu/image/upload/v1726649932/mobile/home_airjiz.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/deztgvefu/image/upload/v1726649932/mobile/home_airjiz.png"
              alt=""
              className={styles["mobile-images-style"]}
            />
          </a>
          <a
            href="https://res.cloudinary.com/deztgvefu/image/upload/v1726649931/mobile/collection_phoiru.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/deztgvefu/image/upload/v1726649931/mobile/collection_phoiru.png"
              alt=""
              className={styles["mobile-images-style"]}
            />
          </a>
          <a
            href="https://res.cloudinary.com/deztgvefu/image/upload/v1726649930/mobile/item_c6b12l.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/deztgvefu/image/upload/v1726649930/mobile/item_c6b12l.png"
              alt=""
              className={styles["mobile-images-style"]}
            />
          </a>
          <a
            href="https://res.cloudinary.com/deztgvefu/image/upload/v1726649930/mobile/bag_rc7nkx.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/deztgvefu/image/upload/v1726649930/mobile/bag_rc7nkx.png"
              alt=""
              className={styles["mobile-images-style"]}
            />
          </a>
          <a
            href="https://res.cloudinary.com/deztgvefu/image/upload/v1726649930/mobile/order-confirmation_umr84p.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/deztgvefu/image/upload/v1726649930/mobile/order-confirmation_umr84p.png"
              alt=""
              className={styles["mobile-images-style"]}
            />
          </a>
          <a
            href="https://res.cloudinary.com/deztgvefu/image/upload/v1726649929/mobile/account_qdrxfh.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/deztgvefu/image/upload/v1726649929/mobile/account_qdrxfh.png"
              alt=""
              className={styles["mobile-images-style"]}
            />
          </a>
          <a
            href="https://res.cloudinary.com/deztgvefu/image/upload/v1726649930/mobile/wishlist_fwclxh.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/deztgvefu/image/upload/v1726649930/mobile/wishlist_fwclxh.png"
              alt=""
              className={styles["mobile-images-style"]}
            />
          </a>
        </div>
      </li>
    </ul>
  );
};
