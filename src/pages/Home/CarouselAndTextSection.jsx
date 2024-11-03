import styles from './CarouselAndTextSection.module.scss';
import Carousel from '../../components/Carousel/Carousel';
import bjjPlaceholder from '../../assets/images/bjj-placeholder.webp';
import teamBanner from '../../assets/images/team-banner.webp';
import theTeam from '../../assets/images/the-team.webp';

export default function CarouselAndTextSection() {
  return (
    <section className={styles['carousel-and-text']}>
      <div className={styles['carousel-and-text-container']}>
        <h2>Elevate your BJJ skills in Gi & No Gi Classes</h2>
        <Carousel images={[bjjPlaceholder, teamBanner, theTeam]} />
        <p>
          Our Adults Gi and No Gi Classes are designed for every skill level,
          from beginners to advanced practitioners. Whether you’re looking to
          compete or just stay in shape, our experienced instructors will guide
          you every step of the way.
        </p>
      </div>
    </section>
  );
}
