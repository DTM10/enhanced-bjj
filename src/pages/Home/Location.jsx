import styles from './Location.module.scss';
import Map from '../../components/Map/Map';

export default function Location() {
  return (
    <section className={styles['location']}>
      <div className={styles['location-container']}>
        <h2>Enhanced BJJ Location</h2>
        <div className={styles['content']}>
          {/* TODO: Add link when do the Google Business profile */}
          <div className={styles['address']}>
            <a href="https://maps.app.goo.gl/x87H2bLNakcW4cJm7" target="_blank">
              <span>303 Richmond Street</span>
              <span>London, Ontario</span>
              <span>N6B 2H8</span>
            </a>
            <p className={styles['expeption']}>
              <span>*</span> Use the Bathurst Street Entrance
            </p>
          </div>
          <Map latitude={42.9799} longitude={-81.2482} />
        </div>
      </div>
    </section>
  );
}
