import styles from './AboutUs.module.scss';
import ImageTextSection from '../../components/ImageTextSection/ImageTextSection';
import teamImage from '../../assets/images/team.webp';
import founders from '../../assets/images/about-us.webp';

export default function AboutUs() {
  //   const writtenContent = (
  //     <div className={styles['written-content']}>
  //       <p>
  //         Enhanced BJJ was founded in January 2023 by co-owners Hawk IV and Max
  //         Doucet. Hawk and Max both shared a true passion for the art of Brazilian
  //         Jiu Jitsu and wanted to help grow the sport in the London Community. The
  //         academy opened under the newly formed Northern Vanguard Association,
  //         headed by Professor Jeff Joslin. Professor Jeff Joslin is a black belt
  //         under Romero “Jacare” Cavalcanti.
  //       </p>
  //       <p>
  //         Enhanced BJJ is also led by Professors Diego Terto Martins, Matt
  //         Thorburn, and Barry MacDonald. All of our instructors hold a lifetime of
  //         knowledge in Brazilian Jiu Jitsu and are eager to share their knowledge
  //         with our members. Together, our mission is to truly enhance every
  //         member&aposs Brazilian Jiu Jitsu journey.{' '}
  //       </p>
  //     </div>
  //   );
  return (
    <section className={styles['about-us']}>
      <div className={styles['about-us-container']}>
        <h1>About Us</h1>

        <ImageTextSection
          img={founders}
          imgAlt="Enhanced BJJ Founders Hawk and Max"
          //   writtenContent={writtenContent}
          text="Enhanced BJJ was founded in January 2023 by co-owners Hawk IV and Max
        Doucet. Hawk and Max both shared a true passion for the art of Brazilian
        Jiu Jitsu and wanted to help grow the sport in the London Community. The
        academy opened under the newly formed Northern Vanguard Association,
        headed by Professor Jeff Joslin. Professor Jeff Joslin is a black belt
        under Romero “Jacare” Cavalcanti."
        />
        <div className={styles['banner']}>
          <img src={teamImage} alt="Enhanced BJJ Professors" />
          <p>
            Enhanced BJJ is also led by Professors Diego Terto Martins, Matt
            Thorburn, and Barry MacDonald. All of our instructors hold a
            lifetime of knowledge in Brazilian Jiu Jitsu and are eager to share
            their knowledge with our members. Together, our mission is to truly
            enhance every member&aposs Brazilian Jiu Jitsu journey.
          </p>
          {/* <p>
            From left to right: Professors Barry, Diego, Hawk, Max, and Matt
          </p> */}
        </div>
      </div>
    </section>
  );
}
