import styles from './FreeTrial.module.scss';
import OutlinedButton from '../../components/OutlinedButton/OutlinedButton';
import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
export default function FreeTrial() {
  const AppleBtnContent = () => (
    <div className={styles['app-btn-content']}>
      <FaApple />
      <div className={styles['app-btn-text']}>
        <span>Download on the</span>
        <p className={styles['btn-type']}>App Store</p>
      </div>
    </div>
  );
  const AndroidBtnContent = () => (
    <div className={styles['app-btn-content']}>
      <FaGooglePlay />
      <div className={styles['app-btn-text']}>
        <span>Get it on</span>
        <p className={styles['btn-type']}>Google Play</p>
      </div>
    </div>
  );
  const buttonsContent = [
    <AppleBtnContent key={'apple'} />,
    <AndroidBtnContent key={'android'} />,
  ];
  return (
    <section className={styles['free-trial']}>
      <div className={styles['free-trial-container']}>
        <div className={styles['text-container']}>
          <p className={styles['not-member']}>Not a member yet?</p>
          <p className={styles['free-trial-text']}>
            Get <strong>3 class free trial</strong> right in the app!
          </p>
        </div>
        <div className={styles['app-btns-container']}>
          {/* TODO: Add app buttons */}
          {buttonsContent.map((btn) => (
            <OutlinedButton key={btn.key}>{btn}</OutlinedButton>
          ))}
        </div>
      </div>
    </section>
  );
}
