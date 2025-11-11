import ShippingWidget from "@/components/shipping_widget/shipping_widget";
import styles from "./page.module.css";
import { Flex } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import CouriersStrip from "@/components/couriers_strip/couriers_strip";
import ContactShortcut from "@/components/contact_shortcut/contact_shortcut";
import WhyUS from "@/components/whyus/whyus";
import Introduction from "@/components/introduction/introduction";
import SetupShipping from "@/components/setup_shipping/setup_shipping";

export default function Home() {

  const p = useTranslations('paragraph');

  return (
    <div className={styles.main}>
      <div className={styles.backgroundImage}></div>
      <ShippingWidget />
      <Flex className={styles.introContainer} direction="column">
        <Introduction/>
        <WhyUS/>
        <CouriersStrip/>
        <SetupShipping/>
        {false && <ContactShortcut/>}
      </Flex>
    </div>
  );
}
