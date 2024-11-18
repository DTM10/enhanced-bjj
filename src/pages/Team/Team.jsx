import styles from './Team.module.scss';
import ImageTextSection from '../../components/ImageTextSection/ImageTextSection';
import Bio from './Bio';
import Divider from '../../components/Divider/Divider';
import pDiego from '../../assets/images/professor-diego.webp';
import pMax from '../../assets/images/professor-max.webp';
import pHawk from '../../assets/images/professor-hawk.webp';
import pMatt from '../../assets/images/professor-matt.webp';
import pBarry from '../../assets/images/professor-barry.webp';

export default function Team() {
  const team = [
    {
      img: pMatt,
      altImg: 'Professor Matt',
      name: 'Matt',
      belt: 'black',
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
      altImg: 'Professor Diego',
      name: 'Diego',
      belt: 'black',
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
      altImg: 'Professor Hawk',
      name: 'Hawk',
      belt: 'black',
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
            Looking for a personal trainer who not only has a wealth of
            experience in functional fitness, weight loss, and strength training
            but also radiates positive energy wherever he goes? Look no further
            than Hawk! With an impressive 13-year tenure as a personal trainer,
            he has honed his expertise in helping individuals achieve their
            fitness goals and transform their lives.
          </p>
          <p>
            Hawk is renowned within the London community for his unwavering
            positive attitude, which is sure to uplift and motivate you
            throughout your fitness journey. His commitment to making a
            meaningful difference in the lives of others is evident in his
            pursuit of a firefighting career, showcasing his dedication to
            serving and safeguarding the community.
          </p>
          <p>
            But that&apos;s not all! Hawk is not only passionate about fitness
            but also about the art of jiu-jitsu. If you&apos;re looking to take
            your training to the next level and explore the world of martial
            arts, Hawk is your perfect guide. Jiu-jitsu is a fantastic
            discipline that combines self-defense techniques, physical fitness,
            mental focus, and strategic thinking. It can enhance your strength,
            flexibility, and overall physical and mental well-being.
          </p>
          <p>
            By training with Hawk in jiu-jitsu, you&apos;ll benefit from his
            extensive knowledge, experience, and enthusiasm for the sport. He
            will guide you through the intricacies of jiu-jitsu, helping you
            improve your technique, build confidence, and achieve your goals on
            and off the mat. Whether you&apos;re a beginner looking to try
            something new or an experienced practitioner seeking to refine your
            skills, Hawk will tailor the training sessions to your individual
            needs and abilities.
          </p>
          <p>
            Beyond his professional accomplishments, Hawk is also a dedicated
            father to three children and a loving husband, which speaks volumes
            about his character and commitment to his loved ones. His caring
            nature extends beyond his family, as he genuinely cares about the
            well-being of his clients and wants to see them succeed.
          </p>
          <p>
            Hawk loves Dragonball, it&apos;s essentially a documentary about his
            life… (+9000).
          </p>
        </>
      ),
    },
    {
      img: pBarry,
      altImg: 'Professor Barry',
      name: 'Barry',
      belt: 'black',
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
            is happy and proud to be part of Enhanced BJJ.{' '}
          </p>
        </>
      ),
    },
    {
      img: pMax,
      altImg: 'Professor Max',
      name: 'Max',
      belt: 'black',
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
            achieving their competitive goals.{' '}
          </p>
        </>
      ),
    },
  ];
  return (
    <div className={styles.team}>
      <div className={styles['team-container']}>
        <h1 className={styles['team-title']}>Enhanced BJJ Team</h1>
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
              imgPosition={index % 2 === 0 || index === 0 ? '' : 'right'}
              variant="team"
            />
            <Divider
              side={index % 2 === 0 || index === 0 ? 'left' : 'right'}
              variant="team"
            />
          </>
        ))}
      </div>
    </div>
  );
}
