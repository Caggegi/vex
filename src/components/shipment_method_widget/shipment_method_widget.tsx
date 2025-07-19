import { Flex } from "@radix-ui/themes";
import styles from "./shipment_method_widget.module.css";
import { mdiTruckFastOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function ShipmentMethodWidget() {
    return (
        <Flex className={styles.shipping}>
            <div className={styles.line}></div>
            <Icon path={mdiTruckFastOutline} className={styles.icon} size={2.5}/>
            <div className={styles.line}></div>
        </Flex>
    )
}