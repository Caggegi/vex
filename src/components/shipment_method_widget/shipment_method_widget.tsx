import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "@radix-ui/themes";
import styles from "./shipment_method_widget.module.css";

export default function ShipmentMethodWidget() {
    return (
        <Flex className={styles.airplane}>
            <div className={styles.line}></div>
            <FontAwesomeIcon icon={faPlane} className={styles.icon}/>
            <div className={styles.line}></div>
        </Flex>
    )
}