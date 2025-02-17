import styles from "./ScheduleAndPricing.module.scss";
import ScheduleSection from "./ScheduleSection";
import Pricing from "./Pricing";
import Divider from "../../components/Divider/Divider";
import { Helmet } from "react-helmet";

export default function ScheduleAndPricing() {
  return (
    <div className={styles["schedule-and-pricing"]}>
      <Helmet>
        {/* Page-specific Title */}
        <title>Enhanced BJJ | Jiu-Jitsu School in London, Ontario</title>

        {/* Page-specific Meta Description */}
        <meta
          name="description"
          content="Enhanced BJJ offers premier Brazilian Jiu-Jitsu training in London, Ontario. Join us for adult, kids, and women-only classes at our central London location. Learn self-defense, improve fitness, and connect with our community."
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://enhancedbjj.com/" />

        {/* Open Graph (OG) Metadata */}
        <meta
          property="og:title"
          content="Enhanced BJJ | Jiu-Jitsu School in London, Ontario"
        />
        <meta
          property="og:description"
          content="Enhanced BJJ offers premier Brazilian Jiu-Jitsu training in London, Ontario. Join us for adult, kids, and women-only classes at our central London location."
        />
        <meta property="og:url" content="https://enhancedbjj.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://enhancedbjj.com/path-to-image.jpg"
        />

        {/* Facebook Card Metadata */}
        <meta name="facebook:card" content="summary_large_image" />
        <meta
          name="facebook:title"
          content="Enhanced BJJ | Jiu-Jitsu School in London, Ontario"
        />
        <meta
          name="facebook:description"
          content="Join Enhanced BJJ to train in Gi & No Gi classes, women's only sessions, and kids' programs in London, Ontario."
        />
        <meta
          name="facebook:image"
          content="https://enhancedbjj.com/facebook.png"
        />

        {/* Instagram Card Metadata */}
        <meta name="instagram:card" content="summary_large_image" />
        <meta
          name="instagram:title"
          content="Enhanced BJJ | Jiu-Jitsu School in London, Ontario"
        />
        <meta
          name="instagram:description"
          content="Join Enhanced BJJ to train in Gi & No Gi classes, women's only sessions, and kids' programs in London, Ontario."
        />
        <meta
          name="instagram:image"
          content="https://enhancedbjj.com/instagram.png"
        />
      </Helmet>
      <div className={styles["schedule-and-pricing-container"]}>
        <div className={styles["schedule-section"]}>
          <ScheduleSection />
        </div>
        <Divider />
        <Pricing />
      </div>
    </div>
  );
}
