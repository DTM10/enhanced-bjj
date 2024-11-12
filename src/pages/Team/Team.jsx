import styles from './Team.module.scss';
import pDiego from '../../assets/images/professor-diego.webp';
import pMax from '../../assets/images/professor-max.webp';
import pHawk from '../../assets/images/professor-hawk.webp';
import pMatt from '../../assets/images/professor-matt.webp';
import pBarry from '../../assets/images/professor-barry.webp';

export default function Team() {
  const team = [
    { img: pDiego, name: 'Diego', bio: '' },
    { img: pMax, name: 'Max', bio: '' },
    { img: pHawk, name: 'Hawk', bio: '' },
    { img: pMatt, name: 'Matt', bio: '' },
    { img: pBarry, name: 'Barry', bio: '' },
  ];
  return (
    <section className={styles.team}>
      <div className={styles['team-container']}>
        <h2>Enhanced BJJ Team</h2>
        {team.map((member, index) => (
          <div key={index} className={styles['team-member']}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
