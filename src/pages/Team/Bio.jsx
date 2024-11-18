import styles from './Bio.module.scss';
import PropTypes from 'prop-types';
import Belt from '../../components/Belt/Belt';
export default function Bio({ name, content, belt }) {
  return (
    <div className={styles.bio}>
      <div className={styles['bio-container']}>
        <div className={styles['coach-info']}>
          <h2 className={styles['coach-name']}>{name}</h2>
          <Belt belt={belt} />
        </div>
        <>{content}</>
      </div>
    </div>
  );
}

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  belt: PropTypes.string.isRequired,
};
