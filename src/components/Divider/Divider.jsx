import styles from './Divider.module.scss';
import PropsType from 'prop-types';

export default function Divider({ side = 'left' }) {
  return (
    <div
      className={
        side === 'left' ? styles['divider-left'] : styles['divider-right']
      }
    ></div>
  );
}

Divider.propTypes = {
  side: PropsType.string,
};
