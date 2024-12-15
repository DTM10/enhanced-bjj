import styles from './Carousel.module.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Carousel({ images, carouselContent }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setNewIndex = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
  };

  const setNextIndexTimeout = () => {
    setTimeout(setNewIndex, 5000);
  };

  useEffect(() => {
    setNextIndexTimeout();
  }, [currentIndex]);

  return (
    <div className={styles['carousel']}>
      <div className={styles['carousel-container']}>
        {images
          ? images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="jiujitsu carousel image"
                className={index === currentIndex ? styles['active'] : ''}
              />
            ))
          : carouselContent.map((component, index) => (
              <div
                key={index}
                alt="jiujitsu carousel image"
                className={index === currentIndex ? styles['active'] : ''}
              >
                {component}
              </div>
            ))}
        {/* <img src={images[currentIndex]} alt="team image" /> */}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array,
  carouselContent: PropTypes.array,
};
