import styles from './Location.module.scss';
// import Map from '../../components/Map/Map';

export default function Location() {
  return (
    <section className={styles['location']}>
      <div className={styles['location-container']}>
        <h2>Enhanced BJJ Location</h2>
        <div className={styles['content']}>
          <div className={styles['address']}>
            <a
              href="https://maps.app.goo.gl/HYmYwocEFhZcWrCs7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>We are Located at:</span>
              <span>303 Richmond Street</span>
              <span>London, Ontario</span>
              <span>N6B 2H8</span>
            </a>
            <p className={styles['expeption']}>
              <span>*</span> Use the Bathurst Street Entrance
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2918.943006494529!2d-81.2505888!3d42.9794742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef3fa8194c147%3A0xad8f92054964f346!2sEnhanced%20Bjj!5e0!3m2!1sen!2sca!4v1733094018266!5m2!1sen!2sca"
            // style={{ border: 0, width: '600', height: '450' }}
            className={styles['map']}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <Map latitude={42.9799} longitude={-81.2482} /> */}
        </div>
      </div>
    </section>
  );
}
