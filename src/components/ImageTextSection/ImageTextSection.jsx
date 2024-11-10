import styles from './ImageTextSection.module.scss';
import PropTypes from 'prop-types';

export default function ImageTextSection({
  img,
  imgAlt,
  title,
  text,
  imgPosition, // Pass "right" to make the image go to the right on large screens
  isMatte = false,
}) {
  const componentClass = isMatte
    ? `${styles['img-text-session']} ${styles['matte']}`
    : styles['img-text-session'];
  const containerClass =
    imgPosition && imgPosition === 'right'
      ? `${styles['img-text-session-container']} ${styles['img-right']}`
      : styles['img-text-session-container'];
  return (
    <section className={componentClass}>
      <div className={containerClass}>
        <h2>{title}</h2>
        <div className={styles['content-container']}>
          <img src={img} alt={imgAlt} />
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

ImageTextSection.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgPosition: PropTypes.string,
  isMatte: PropTypes.bool,
};
