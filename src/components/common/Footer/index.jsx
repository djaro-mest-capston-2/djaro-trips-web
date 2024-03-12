import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-white p-5 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h1
            className={`${styles.footerTitle} text-lg font-bold mb-4`}
          >
            Support
          </h1>
          <ul>
            <li className={styles.footerItem}>
              <a
                href="#faq"
                className="hover:text-secondary transition-colors"
              >
                FAQ
              </a>
            </li>
            <li className={styles.footerItem}>
              <a
                href="#help-centre"
                className="hover:text-secondary transition-colors"
              >
                Help Centre
              </a>
            </li>
            <li className={styles.footerItem}>
              <a
                href="#manage-trip"
                className="hover:text-secondary transition-colors"
              >
                Manage Your Trip
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1
            className={`${styles.footerTitle} text-lg font-bold mb-4`}
          >
            Partners
          </h1>
          <ul>
            <li className={styles.footerItem}>
              <a
                href="#partners-faq"
                className="hover:text-secondary transition-colors"
              >
                List your group trips{" "}
              </a>
            </li>
            <li className={styles.footerItem}>
              <a
                href="#partners-help"
                className="hover:text-secondary transition-colors"
              >
                Partner login
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1
            className={`${styles.footerTitle} text-lg font-bold mb-4`}
          >
            Terms and Conditions
          </h1>
          <ul>
            <li className={styles.footerItem}>
              <a
                href="#terms"
                className="hover:text-secondary transition-colors"
              >
                Privacy and cookies
              </a>
            </li>
            <li className={styles.footerItem}>
              <a
                href="#conditions"
                className="hover:text-secondary transition-colors"
              >
                Privacy and cookies
              </a>
            </li>
            <li className={styles.footerItem}>
              <a
                href="#terms-manage"
                className="hover:text-secondary transition-colors"
              >
                Manage Your Trip
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1
            className={`${styles.footerTitle} text-lg font-bold mb-4`}
          >
            About Us
          </h1>
          <ul>
            <li className={styles.footerItem}>
              <a
                href="#about-faq"
                className="hover:text-secondary transition-colors"
              >
                About Gomogi
              </a>
            </li>
            <li className={styles.footerItem}>
              <a
                href="#about-help"
                className="hover:text-secondary transition-colors"
              >
                Features
              </a>
            </li>
            <li className={styles.footerItem}>
              <a
                href="#about-manage"
                className="hover:text-secondary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
