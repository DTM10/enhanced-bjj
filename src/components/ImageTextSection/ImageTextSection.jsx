import styles from "./ImageTextSection.module.scss";
import PropTypes from "prop-types";

export default function ImageTextSection({
  img,
  imgAlt,
  title,
  text, // Optional - will be displayed below the image
  writtenContent, // Optional - if you want to display JSX instead of text
  imgPosition, // Pass "right" to make the image go to the right on large screens
  variant,
}) {
  const componentClass = variant
    ? `${styles["img-text-session"]} ${styles[variant]}`
    : styles["img-text-session"];

  const containerClass =
    imgPosition && imgPosition === "right"
      ? `${styles["img-text-session-container"]} ${styles["img-right"]}`
      : styles["img-text-session-container"];
  return (
    <section className={componentClass}>
      <div className={containerClass}>
        {title && <h2 className={styles["section-title"]}>{title}</h2>}

        <div className={styles["content-container"]}>
          <div className={styles["img-container"]}>
            <img src={img} alt={imgAlt} />
          </div>
          {text && (
            <div className={styles["text-container"]}>
              <p>{text}</p>
            </div>
          )}
          {writtenContent && <>{writtenContent}</>}
        </div>
      </div>
    </section>
  );
}

ImageTextSection.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  writtenContent: PropTypes.node,
  imgPosition: PropTypes.string,
  isMatte: PropTypes.bool,
  variant: PropTypes.string,
};
