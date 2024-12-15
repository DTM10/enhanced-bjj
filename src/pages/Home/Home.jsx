import styles from './Home.module.scss';
import teamBanner from '../../assets/images/banner.webp';
import CarouselAndTextSection from '../../components/CarouselAndTextSection/CarouselAndTextSection';
import ScheduleSection from './ScheduleSection';
import Location from './Location';
// import ImageTextSection from '../../components/ImageTextSection/ImageTextSection';
import womenImg3 from '../../assets/images/woman-3.webp';
import womenImg4 from '../../assets/images/woman-4.webp';
import womenImg8 from '../../assets/images/woman-8.webp';
import womenImg9 from '../../assets/images/woman-9.webp';
import carouselImg1 from '../../assets/images/carousel1.webp';
import carouselImg2 from '../../assets/images/carousel2.webp';
import carouselImg3 from '../../assets/images/carousel3.webp';
import carouselImg4 from '../../assets/images/carousel4.webp';
import carouselImg5 from '../../assets/images/carousel5.webp';
import kidsImg1 from '../../assets/images/kids1.webp';
import kidsImg3 from '../../assets/images/kids3.webp';
import kidsImg6 from '../../assets/images/kids6.webp';
import kidsImg7 from '../../assets/images/kids7.webp';
import FreeTrial from './FreeTrial';
import Divider from '../../components/Divider/Divider';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div className={styles['home']}>
      <Helmet>
        {/* Page-specific Title */}
        <title>Enhanced BJJ | Jiu-Jitsu School in London, Ontario</title>

        {/* Page-specific Meta Description */}
        <meta
          name="description"
          content="Enhanced BJJ offers premier Brazilian Jiu-Jitsu training in London, Ontario. Join us for adult, kids, and women-only classes at our central London location. Learn self-defense, improve fitness, and connect with our community."
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://enhancedbjj.com/" />

        {/* Open Graph (OG) Metadata */}
        <meta
          property="og:title"
          content="Enhanced BJJ | Jiu-Jitsu School in London, Ontario"
        />
        <meta
          property="og:description"
          content="Enhanced BJJ offers premier Brazilian Jiu-Jitsu training in London, Ontario. Join us for adult, kids, and women-only classes at our central London location."
        />
        <meta property="og:url" content="https://enhancedbjj.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://enhancedbjj.com/path-to-image.jpg"
        />

        {/* Facebook Card Metadata */}
        <meta name="facebook:card" content="summary_large_image" />
        <meta
          name="facebook:title"
          content="Enhanced BJJ | Jiu-Jitsu School in London, Ontario"
        />
        <meta
          name="facebook:description"
          content="Join Enhanced BJJ to train in Gi & No Gi classes, women's only sessions, and kids' programs in London, Ontario."
        />
        <meta
          name="facebook:image"
          content="https://enhancedbjj.com/facebook.png"
        />

        {/* Instagram Card Metadata */}
        <meta name="instagram:card" content="summary_large_image" />
        <meta
          name="instagram:title"
          content="Enhanced BJJ | Jiu-Jitsu School in London, Ontario"
        />
        <meta
          name="instagram:description"
          content="Join Enhanced BJJ to train in Gi & No Gi classes, women's only sessions, and kids' programs in London, Ontario."
        />
        <meta
          name="instagram:image"
          content="https://enhancedbjj.com/instagram.png"
        />
      </Helmet>
      <div className={styles['home-container']}>
        <section className={styles['banner']}>
          <img src={teamBanner} alt="jiujitsu grading event" />
          <div className={styles['banner-text']}>
            <h1>Brazilian Jiu-Jitsu CHANGES LIVES</h1>
            <p>
              At Enhanced BJJ, we create a fantastic learning environment where
              you’ll not only learn Jiu-Jitsu but also become part of an awesome
              community. Brazilian Jiu-Jitsu has already changed the lives of so
              many people, join us and let it transform yours!
            </p>
          </div>
        </section>
        <Divider />
        <CarouselAndTextSection
          title="Enhance your BJJ skills in Gi & No Gi Classes"
          images={[
            carouselImg1,
            carouselImg2,
            carouselImg3,
            carouselImg4,
            carouselImg5,
          ]}
          text=" Our Adults Gi and No Gi Classes are designed for every skill level, from beginners to advanced practitioners. Whether you’re looking to compete or just stay in shape, our experienced instructors will guide you every step of the way."
          carrouselPosition="right"
        />
        <Divider side="right" />

        <CarouselAndTextSection
          title="Empowering Women on the Mats"
          images={[womenImg3, womenImg4, womenImg8, womenImg9]}
          text="Discover the perfect space to train, connect, and grow in our Women’s Only Class. Designed exclusively for women of all skill levels, this class offers a supportive and inclusive environment to learn Brazilian Jiu-Jitsu techniques while building confidence, strength, and camaraderie."
        />

        <Divider />

        <CarouselAndTextSection
          title="Building Confidence and Discipline in Our Kids"
          // images={[kidsImg2, kidsImg3, kidsImg4, kidsImg5]}
          images={[kidsImg1, kidsImg6, kidsImg3, kidsImg7]}
          text="Our Kids Program is focused on empowering young champions. Through carefully designed classes, kids learn discipline, respect, and self-confidence while having fun. Our experienced instructors ensure a safe and supportive environment for all participants."
          carrouselPosition="right"
        />
        <Divider side="right" />

        <ScheduleSection />
        <Divider />

        <FreeTrial />
        <Divider side="right" />
        <div className={styles['divider-right']}></div>
        <Location />
      </div>
    </div>
  );
}
