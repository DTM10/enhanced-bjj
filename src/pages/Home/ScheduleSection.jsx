import styles from './ScheduleSection.module.scss';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import { schedule } from '../../constants/data';

export default function ScheduleSection() {
  return (
    <section className={styles['schedule-section']}>
      <div className={styles['schedule-section-container']}>
        <h2>Enhanced BJJ Schedule</h2>
        <p>
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
        <div className={styles['app-btns-container']}>
          <p>Schedule a 3 class free trial right in the app</p>
          {/* TODO: Add app buttons */}
        </div>
      </div>
    </section>
  );
}
