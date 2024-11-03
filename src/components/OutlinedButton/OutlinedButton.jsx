import styles from './OutlinedButton.module.scss';
import PropTypes from 'prop-types';

export default function OutlinedButton({ children, onClick }) {
  return (
    <button className={styles['outlined-button']} onClick={onClick}>
      {children}
    </button>
  );
}

OutlinedButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
