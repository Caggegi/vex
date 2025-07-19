import ShippingWidget from "@/components/shipping_widget/shipping_widget";
import styles from "./page.module.css";
import { Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className={styles.main}>
      <ShippingWidget />
    </div>
  );
}
