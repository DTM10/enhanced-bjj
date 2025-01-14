import styles from "./Team.module.scss";
import { Helmet } from "react-helmet";
import ImageTextSection from "../../components/ImageTextSection/ImageTextSection";
import Bio from "./Bio";
import Divider from "../../components/Divider/Divider";
import pDiego from "../../assets/images/professor-diego.webp";
import pMax from "../../assets/images/professor-max.webp";
import pHawk from "../../assets/images/professor-hawk.webp";
import pMatt from "../../assets/images/pMatt.webp";
import pBarry from "../../assets/images/professor-barry.webp";
import pBlair from "../../assets/images/pBlair.webp";

export default function Team() {
  const team = [
    {
      img: pMatt,
      altImg: "Professor Matt",
      name: "Matt",
      belt: "black",
      bio: (
        <>
          <p>
            <strong>1st Degree Black Belt</strong>
          </p>
          <p>
            Are you looking to enhance your skills in Brazilian Jiu-Jitsu? Look
            no further! Meet Matt, an experienced martial artist with over 12
            years of training and competition in various disciplines, including
            MMA, Judo, and, most notably, BJJ. Matt&apos;s dedication to his
            craft and his passion for nurturing the growth of BJJ enthusiasts
            make him an outstanding coach for practitioners of all skill levels.
          </p>
        </>
      ),
    },
    {
      img: pDiego,
      altImg: "Professor Diego",
      name: "Diego",
      belt: "black",
      bio: (
        <>
          <p>
            <strong>1st Degree Black Belt - IBJJF Certified Black Belt</strong>
          </p>
          <p>
            Introducing Diego Terto Martins, a highly accomplished martial
            artist with a background in jiu-jitsu and judo. After eight years of
            judo, he dedicated over twelve years to jiu-jitsu, where he earned
            the esteemed rank of 1st Degree Black Belt. Diego&apos;s passion for
            martial arts led him to compete in local and national tournaments in
            Brazil. He earned the prestigious silver medal at the World Masters
            three times in 2018 and 2019, showcasing his dedication.
          </p>
          <p>
            Whether you&apos;re a beginner or an experienced practitioner,
            training with Diego will transform your martial arts journey. Enroll
            in his classes today and learn from a seasoned Black Belt and
            esteemed competitor. His extensive knowledge and genuine passion for
            teaching provide invaluable guidance to aspiring students.
          </p>
        </>
      ),
    },
    {
      img: pHawk,
      altImg: "Professor Hawk",
      name: "Hawk",
      belt: "black",
      bio: (
        <>
          <ul>
            <li>
              Brazilian Jiu-Jitsu Black Belt 14 Years of Training and Competing
            </li>
            <li>Certified Personal Trainer Group Fitness Instructor</li>
            <li>Precision Nutrition Level 1 Certification</li>
            <li>
              13 Years of Experience in Personal Training Hawk has been training
              and competing in Brazilian Jiu-Jitsu for 14 years.
            </li>
          </ul>
          <p>
            Looking for a personal trainer skilled in functional fitness, weight
            loss, and strength training? Meet Hawk, with 13 years of experience
            helping clients achieve their fitness goals. His positive attitude
            motivates others, and he is dedicated to serving the community while
            pursuing a firefighting career.
          </p>
          <p>
            Hawk’s jiu-jitsu passion transcends fitness, providing clients with
            a self-defense and martial arts experience that enhances physical
            fitness, mental focus, and strategic thinking. With deep knowledge
            and enthusiasm, Hawk supports clients in developing techniques and
            confidence through tailored training sessions.
          </p>
        </>
      ),
    },
    {
      img: pBarry,
      altImg: "Professor Barry",
      name: "Barry",
      belt: "black",
      bio: (
        <>
          <p>
            Barry believes in community service and has worked emergency
            services for over 20 years. Barry believes martial arts is a vehicle
            for self-improvement, developing self-discipline, compassion,
            humility, respect and confidence. He considers himself to be a
            life-long martial artist having trained in the arts of boxing, judo,
            and karate, where he holds a black belt. Barry also has a black belt
            in jiu-jitsu after being a practitioner for 13 years. He has
            competed in IBJJF, provincial and local tournaments. When not
            training with his friends, Barry likes to spend time with family. He
            is happy and proud to be part of Enhanced BJJ.{" "}
          </p>
        </>
      ),
    },
    {
      img: pMax,
      altImg: "Professor Max",
      name: "Max",
      belt: "black",
      bio: (
        <>
          <ul>
            <li>2024 IBJJF Pans Champion</li>
            <li>2024 American Nationals Champion (Gi and Nogi)</li>
            <li>2022 and 2023 IBJJF Masters Worlds Medalist</li>
            <li>2021 and 2022 IBJJF Worlds Medalist</li>
          </ul>
          <p>
            Max Doucet is an IBJJF Certified Brazilian Jiu Jitsu Black Belt
            under Professor Jeff Joslin. Max is an avid competitor in the sport
            of Brazilian Jiu Jitsu regularly competing in international
            competitions. With over 10 years of experience, Max brings a wealth
            of knowledge and a commitment to supporting aspiring athletes in
            achieving their competitive goals.{" "}
          </p>
        </>
      ),
    },
    {
      img: pBlair,
      altImg: "Professor Blair",
      name: "Blair",
      belt: "black",
      bio: (
        <>
          <p>
            Have you ever thought about starting BJJ and thought it too late. It
            is not. I am Blair Bravender Brazilian jiu-jitsu black belt. I
            discovered this amazing martial art in my early 30's and now in my
            mid 40's enjoy it more than ever. Through competition and regular
            training I have developed a passion for helping others discover and
            development love for Brazilian jiu-jitsu. I do this by making sure
            we all understand the fun in fundamentals. Look forward to sharing
            our BJJ journeys together.
          </p>
        </>
      ),
    },
  ];
  return (
    <div className={styles.team}>
      <Helmet>
        <title>Meet Our Team | Enhanced BJJ</title>
        <meta
          name="description"
          content="Meet the Enhanced BJJ team, a group of skilled Brazilian Jiu-Jitsu black belts and instructors dedicated to guiding students of all levels. Learn more about our experienced and passionate coaches."
        />
        <meta
          name="keywords"
          content="Enhanced BJJ team, Brazilian Jiu-Jitsu instructors, BJJ black belts, Jiu-Jitsu school in London Ontario, BJJ coaches"
        />
        <link rel="canonical" href="https://enhancedbjj.com/team" />
        <meta property="og:title" content="Meet Our Team | Enhanced BJJ" />
        <meta
          property="og:description"
          content="Discover the Enhanced BJJ team of dedicated Brazilian Jiu-Jitsu instructors. Learn about their experience and passion for guiding students."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enhancedbjj.com/team" />
        <meta
          property="og:image"
          content="https://enhancedbjj.com/images/team-banner.webp"
        />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Enhanced BJJ" />
      </Helmet>
      <div className={styles["team-container"]}>
        <h1 className={styles["team-title"]}>Enhanced BJJ Team</h1>
        {team.map((member, index) => (
          <>
            <ImageTextSection
              key={index}
              img={member.img}
              imgAlt={member.altImg}
              writtenContent={
                <Bio
                  name={member.name}
                  content={member.bio}
                  belt={member.belt}
                />
              }
              imgPosition={index % 2 === 0 || index === 0 ? "" : "right"}
              variant="team"
            />
            {index !== team.length - 1 && (
              <Divider
                side={index % 2 === 0 || index === 0 ? "right" : "left"}
                variant="team"
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
