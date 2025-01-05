import styles from "./FreeTrial.module.scss";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import qrCodeImg from "../../assets/images/enhanced-qrs.png";
import OutlinedButton from "../../components/OutlinedButton/OutlinedButton";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
export default function FreeTrial() {
  const AppleBtnContent = () => (
    <div className={styles["app-btn-content"]}>
      <FaApple />
      <div className={styles["app-btn-text"]}>
        <span>Download on the</span>
        <p className={styles["btn-type"]}>App Store</p>
      </div>
    </div>
  );
  const AndroidBtnContent = () => (
    <div className={styles["app-btn-content"]}>
      <FaGooglePlay />
      <div className={styles["app-btn-text"]}>
        <span>Get it on</span>
        <p className={styles["btn-type"]}>Google Play</p>
      </div>
    </div>
  );
  const handleAppleClick = () => {
    console.log("Apple clicked");
    window.open(
      "https://apps.apple.com/us/app/enhanced-bjj/id6740027011",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleAndroidClick = () => {
    console.log("Android clicked");
    window.open(
      "https://play.google.com/store/apps/details?id=enhanced.bjj",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const buttonsContent = [
    {
      btn: <AppleBtnContent key={"apple"} />,
      key: "apple-btn",
      action: handleAppleClick,
    },
    {
      btn: <AndroidBtnContent key={"android"} />,
      key: "android-btn",
      action: handleAndroidClick,
    },
  ];
  return (
    <section className={styles["free-trial"]}>
      <div className={styles["free-trial-container"]}>
        <div className={styles["text-container"]}>
          <p className={styles["not-member"]}>Not a member yet?</p>

          <p className={styles["free-trial-text"]}>
            Get <strong>3 class free trial</strong>&nbsp; right in the app!
          </p>
          <div className={styles["contact-container"]}>
            <p className={styles["contact"]}>Contact us for more info</p>
            <span className={styles["social"]}>
              <a
                href="https://www.instagram.com/enhancedbjj"
                className={styles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a href="mailto:contact@enhancedbjj.com" className={styles.email}>
                <FaEnvelope />
              </a>
              <a
                href="https://www.facebook.com/people/Enhanced-BJJ/100089549310457/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className={styles.facebook}
              >
                <FaFacebook />
              </a>
            </span>
          </div>
        </div>

        <div className={styles["app-container"]}>
          <div className={styles["btns-container"]}>
            {buttonsContent.map((btnObj) => (
              <OutlinedButton key={btnObj.key} onClick={btnObj.action}>
                {btnObj.btn}
              </OutlinedButton>
            ))}
          </div>
          <img
            src={qrCodeImg}
            alt="Enhanced BJJ QR Code"
            className={styles["qr-code"]}
          />
        </div>
      </div>
    </section>
  );
}
