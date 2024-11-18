import styles from './Divider.module.scss';
import PropsType from 'prop-types';

export default function Divider({ side = 'left', variant }) {
  const componentClass = variant
    ? `${styles[`divider-${side}`]} ${styles[variant]}`
    : styles[`divider-${side}`];
  return <div className={componentClass}></div>;
}

Divider.propTypes = {
  side: PropsType.string,
  variant: PropsType.string,
};
