import styles from './ScheduleSection.module.scss';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import { schedule } from '../../constants/data';
import { FaApple } from 'react-icons/fa';
// import { GrAppleAppStore } from 'react-icons/gr';
import { FaGooglePlay } from 'react-icons/fa';
import OutlinedButton from '../../components/OutlinedButton/OutlinedButton';

export default function ScheduleSection() {
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
    <section className={styles['schedule-section']}>
      <div className={styles['schedule-section-container']}>
        <h2>Enhanced BJJ Schedule</h2>
        <p className={styles['expeption']}>
          <span>*</span> Subject to change based on holidays, for more info,
          please check the App
        </p>
        <ul className={styles['cards-container']}>
          {schedule.map((weekday) => (
            <ScheduleCard
              key={weekday.day}
              weekday={weekday.day}
              classes={weekday.classes}
            />
          ))}
        </ul>
        <p>
          Schedule a <strong>3 class free trial</strong> right in the app
        </p>
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
