import styles from "./AboutUs.module.scss";
import ImageTextSection from "../../components/ImageTextSection/ImageTextSection";
import teamImage from "../../assets/images/team.webp";
import founders from "../../assets/images/about-us.webp";
import { Helmet } from "react-helmet";

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
    <section className={styles["about-us"]}>
      <Helmet>
        <title>About Us | Enhanced BJJ</title>
        <meta
          name="description"
          content="Learn about Enhanced BJJ, founded in 2023 by Hawk IV and Max Doucet, dedicated to teaching Brazilian Jiu-Jitsu in London, Ontario. Meet our experienced instructors and discover our mission to enhance your Jiu-Jitsu journey."
        />
        <meta
          name="keywords"
          content="Enhanced BJJ, Brazilian Jiu-Jitsu London Ontario, BJJ founders, Northern Vanguard Association, Jiu-Jitsu training, BJJ instructors, Hawk IV, Max Doucet"
        />
        <link rel="canonical" href="https://enhancedbjj.com/about-us" />
        <meta property="og:title" content="About Us | Enhanced BJJ" />
        <meta
          property="og:description"
          content="Discover the story of Enhanced BJJ, a leading Brazilian Jiu-Jitsu school in London, Ontario. Learn about our founders, instructors, and mission."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enhancedbjj.com/about-us" />
        <meta
          property="og:image"
          content="https://enhancedbjj.com/images/about-us.webp"
        />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Enhanced BJJ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Enhanced BJJ" />
        <meta
          name="twitter:description"
          content="Learn about Enhanced BJJ, its founders, and its mission to enhance your Brazilian Jiu-Jitsu journey in London, Ontario."
        />
        <meta
          name="twitter:image"
          content="https://enhancedbjj.com/images/about-us.webp"
        />
      </Helmet>
      <div className={styles["about-us-container"]}>
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
        <div className={styles["banner"]}>
          <img src={teamImage} alt="Enhanced BJJ Professors" />
          <p>
            Enhanced BJJ is also led by Professors Diego Terto Martins, Matt
            Thorburn, and Barry MacDonald. All of our instructors hold a
            lifetime of knowledge in Brazilian Jiu Jitsu and are eager to share
            their knowledge with our members. Together, our mission is to truly
            enhance every member's Brazilian Jiu Jitsu journey.
          </p>
          {/* <p>
            From left to right: Professors Barry, Diego, Hawk, Max, and Matt
          </p> */}
        </div>
      </div>
    </section>
  );
}
