import styles from './Location.module.scss';
import Map from '../../components/Map/Map';

export default function Location() {
  return (
    <section className={styles['location']}>
      <div className={styles['location-container']}>
        <h2>Enhanced BJJ Location</h2>
        {/* TODO: Add link when do the Google Business profile */}
        <a href="https://maps.app.goo.gl/x87H2bLNakcW4cJm7" target="_blank">
          303 Richmond Street, London, Ontario, N6B 2H8
        </a>
        <p>
          <span>*</span>Use the Bathurst Street Entrance
        </p>
        <Map latitude={42.9799} longitude={-81.2482} />
      </div>
    </section>
  );
}
