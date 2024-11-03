import styles from './Footer.module.scss';
// import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        {/* <span>
          Enhanced BJJ - Follow us on social media{' '}
          <a href="https://www.instagram.com/enhancedbjj">
            <FaInstagram className={styles['instagram']} />
          </a>
        </span> */}
        <p className={styles['copyright']}>
          Copyright © 2022 Enhanced BJJ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
