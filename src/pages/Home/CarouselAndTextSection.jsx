import styles from './CarouselAndTextSection.module.scss';
import Carousel from '../../components/Carousel/Carousel';
import carouselImg1 from '../../assets/images/carousel1.webp';
import carouselImg2 from '../../assets/images/carousel2.webp';
import carouselImg3 from '../../assets/images/carousel3.webp';
import carouselImg4 from '../../assets/images/carousel4.webp';
import carouselImg5 from '../../assets/images/carousel5.webp';

export default function CarouselAndTextSection() {
  return (
    <section className={styles['carousel-and-text']}>
      <div className={styles['carousel-and-text-container']}>
        <h2>Elevate your BJJ skills in Gi & No Gi Classes</h2>
        <div className={styles['content-container']}>
          <Carousel
            images={[
              carouselImg1,
              carouselImg2,
              carouselImg3,
              carouselImg4,
              carouselImg5,
            ]}
          />
          <p>
            Our Adults Gi and No Gi Classes are designed for every skill level,
            from beginners to advanced practitioners. Whether you’re looking to
            compete or just stay in shape, our experienced instructors will
            guide you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
