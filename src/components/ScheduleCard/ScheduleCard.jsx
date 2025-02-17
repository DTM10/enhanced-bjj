import styles from "./ScheduleCard.module.scss";
import PropTypes from "prop-types";

export default function ScheduleCard({ weekday, classes, variant }) {
  const classDefinition = variant
    ? `${styles["schedule-card"]} ${styles[variant]}`
    : styles["schedule-card"];
  return (
    <li className={classDefinition}>
      <div className={styles["schedule-card-container"]}>
        <p>{weekday}</p>
        <ul>
          {classes.map((className) => (
            <li key={className}>{className}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

ScheduleCard.propTypes = {
  weekday: PropTypes.string.isRequired,
  classes: PropTypes.array.isRequired,
};
