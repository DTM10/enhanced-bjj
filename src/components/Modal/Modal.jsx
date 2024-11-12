import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

export default function Modal({ children }) {
  return (
    <div className={styles['modal']}>
      <div className={styles['modal-container']}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
