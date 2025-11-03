import styles from "./Pricing.module.scss";
import ScheduleCard from "../../components/ScheduleCard/ScheduleCard";
import { adultsPricing, kidsPricing } from "../../constants/data";
import kidsImg from "../../assets/images/kids7.webp";
import adultsImg from "../../assets/images/carousel2.webp";
import ImageTextSection from "../../components/ImageTextSection/ImageTextSection";

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <h2>Enhanced BJJ Pricing</h2>
      <div className={styles["pricing-container"]}>
        <ImageTextSection
          img={adultsImg}
          writtenContent={
            <ScheduleCard
              weekday="Adults and Teens (ages 14+)"
              classes={adultsPricing}
              variant="pricing"
              legalText="* All memberships will autorenew based on the option purchased."
            />
          }
          variant="pricing"
        />
        <ImageTextSection
          img={kidsImg}
          writtenContent={
            <ScheduleCard
              weekday="Kids (ages 5-13+)"
              classes={kidsPricing}
              variant="pricing"
              legalText="* All memberships will autorenew based on the option purchased."
            />
          }
          imgPosition="right"
          variant="pricing"
        />
      </div>
    </section>
  );
}
