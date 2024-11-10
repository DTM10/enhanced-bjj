import styles from './CarouselAndTextSection.module.scss';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';

export default function CarouselAndTextSection({
  title,
  images,
  text,
  carrouselPosition = '',
  variant = '',
}) {
  const componentClass = variant
    ? `${styles['carousel-and-text']} ${styles[variant]}`
    : styles['carousel-and-text'];
  const containerClass =
    carrouselPosition === 'right'
      ? `${styles['carousel-and-text-container']} ${styles['carousel-and-text-container-right']}`
      : styles['carousel-and-text-container'];

  return (
    <section className={componentClass}>
      <div className={containerClass}>
        <h2>{title}</h2>
        <div className={styles['content-container']}>
          <div className={styles['carousel-space']}>
            <Carousel images={images} />
          </div>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

CarouselAndTextSection.propTypes = {
  title: PropTypes.string,
  images: PropTypes.array,
  text: PropTypes.string,
  carrouselPosition: PropTypes.string,
  variant: PropTypes.string,
};
