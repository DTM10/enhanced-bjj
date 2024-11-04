import styles from './KidsSession.module.scss';
import kidsImg from '../../assets/images/kids.webp';

export default function KidsSession() {
  return (
    <section className={styles['kids-session']}>
      <div className={styles['kids-session-container']}>
        <h2>Empower Kids with Our BJJ Kids Program</h2>
        <div className={styles['content-container']}>
          <img src={kidsImg} alt="Kids Class" />
          <p>
            Our Kids Program is focused on empowering young champions. Through
            carefully designed classes, kids learn discipline, respect, and
            self-confidence while having fun. Our experienced instructors ensure
            a safe and supportive environment for all participants.
          </p>
        </div>
      </div>
    </section>
  );
}
