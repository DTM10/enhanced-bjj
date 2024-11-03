import styles from './Home.module.scss';
import teamBanner from '../../assets/images/team-banner.webp';
import CarouselAndTextSection from './CarouselAndTextSection';
import KidsSession from './KidsSession';
import ScheduleSection from './ScheduleSection';
import Location from './Location';

export default function Home() {
  return (
    <div className={styles['home']}>
      <div className={styles['home-container']}>
        <section className={styles['banner']}>
          <img src={teamBanner} alt="grading event" />
          <div className={styles['banner-text']}>
            <h1>Brazilian Jiu-Jitsu changes lives</h1>
            <p>
              At Enhanced BJJ, we create a fantastic learning environment where
              you’ll not only learn Jiu-Jitsu but also become part of an awesome
              community. Brazilian Jiu-Jitsu has already changed the lives of so
              many people, join us and let it transform yours!
            </p>
          </div>
        </section>
        <CarouselAndTextSection />

        <KidsSession />
        <ScheduleSection />
        <Location />
      </div>
    </div>
  );
}
