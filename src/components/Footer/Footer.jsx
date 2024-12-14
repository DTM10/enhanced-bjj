import styles from './Footer.module.scss';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <span className={styles['social']}>
          <a
            href="https://www.instagram.com/enhancedbjj"
            className={styles.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram />
          </a>
          <a href="mailto:contact@enhancedbjj.com" className={styles.email}>
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/people/Enhanced-BJJ/100089549310457/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
            className={styles.facebook}
          >
            <FaFacebook />
          </a>
        </span>
        <p className={styles['copyright']}>
          Copyright © 2022 Enhanced BJJ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
