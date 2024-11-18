import styles from './Belt.module.scss';
import PropTypes from 'prop-types';

export default function Belt({ belt }) {
  const beltColorClass = `${styles['belt']} ${styles[belt]}`;

  return (
    <div className={beltColorClass}>
      <div className={styles['belt-body']}></div>
      <div className={styles['belt-stripe']}></div>
    </div>
  );
}

Belt.propTypes = {
  belt: PropTypes.string.isRequired,
};
